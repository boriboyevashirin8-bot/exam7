import { useState } from "react";
import { useQueryHandler } from "../../hooks/useQueryHandler";
import { FiSearch } from "react-icons/fi";  

function Teachers() {
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  const { data } = useQueryHandler({
    pathname: `teachers-${status}-${search}`, 
    url: "api/teacher/get-all-teachers",
    params: { status, search },
  });
  console.log(data);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold text-gray-800">Ustozlar ro'yxati</h2>
        <div className="flex gap-3 w-full sm:w-auto">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Qidirish..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <select
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="min-w-[140px] border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white"
          >
            <option value="">Barchasi</option>
            <option value="ta'tilda">Ta'tilda</option>
            <option value="faol">Faol</option>
            <option value="ishdan bo'shatilgan">Nofaol</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full text-left text-gray-700">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="py-3 px-4 font-semibold">Ism</th>
              <th className="py-3 px-4 font-semibold">Familiya</th>
              <th className="py-3 px-4 font-semibold">Email</th>
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
                  <td className="py-3 px-4">{item.email}</td>
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
                <td colSpan={5} className="text-center py-6 text-gray-400">
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

export default Teachers;
