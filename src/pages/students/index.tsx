import { useQueryHandler } from "../../hooks/useQueryHandler";

function Students() {
  const { data } = useQueryHandler({
    pathname: "students",
    url: "api/student/get-all-students",
  });
  console.log(data);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold text-gray-800">Foydalanuvchilar ro'yxati</h2>

      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full text-left text-gray-700">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="py-3 px-4 font-semibold">Ism</th>
              <th className="py-3 px-4 font-semibold">Familiya</th>
              <th className="py-3 px-4 font-semibold">Telefon raqam</th>
              <th className="py-3 px-4 font-semibold">Guruhlar soni</th>
              <th className="py-3 px-4 font-semibold">Holat</th>
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
                  <td className="py-3 px-4">{item.first_name}</td>
                  <td className="py-3 px-4">{item.last_name}</td>
                  <td className="py-3 px-4">{item.phone}</td>
                  <td className="py-3 px-4">{item.groups?.length || 0}</td>
                  <td className="py-3 px-4 capitalize">{item.status}</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      ...
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-400">
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

export default Students;
