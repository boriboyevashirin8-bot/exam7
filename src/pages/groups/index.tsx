import { useQueryHandler } from "../../hooks/useQueryHandler";

function Groups() {
  const { data } = useQueryHandler({
    pathname: "groups",
    url: "api/group/get-all-group",
  });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Guruhlar ro'yxati</h2>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full text-left text-gray-700">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="py-3 px-4 font-semibold">No</th>
              <th className="py-3 px-4 font-semibold">Guruh nomi</th>
              <th className="py-3 px-4 font-semibold">Ustoz</th>
              <th className="py-3 px-4 font-semibold">O'quvchilar soni</th>
              <th className="py-3 px-4 font-semibold">Boshlanish vaqti</th>
              <th className="py-3 px-4 font-semibold">Tugash vaqti</th>
              <th className="py-3 px-4 font-semibold">Amallar</th>
            </tr>
          </thead>

          <tbody>
            {data?.length ? (
              data.map((item: any, index: number) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4">
                    {item.teacher?.first_name} {item.teacher?.last_name}
                  </td>
                  <td className="py-3 px-4">{item.students?.length || 0}</td>
                  <td className="py-3 px-4">{item.started_group}</td>
                  <td className="py-3 px-4">{item.end_group}</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      ...
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-6 text-gray-400">
                  Ma'lumot topilmadi
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Groups;
