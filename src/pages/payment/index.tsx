import { useState, useEffect } from "react";
import axios from "axios";

function Payments() {
  const [data, setData] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [month, setMonth] = useState(""); 
  const [status, setStatus] = useState(""); 
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      let url = "";
      if (search) {
        url = `http://localhost:7070/api/payment/search-student?name=${search}`;
      } else if (month) {
        url = `http://localhost:7070/api/payment/get-debtors-student?month=${month}`;
      } else {
        url = `http://localhost:7070/api/payment/payment-student`;
      }

      const res = await axios.get(url, {
        params: { status },
      });
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [search, month, status]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">To‘lovlar ro‘yxati</h2>

      <div className="flex flex-wrap gap-3 mb-5">
        <input
          type="text"
          placeholder="Student ismi bo‘yicha qidirish..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 flex-1 min-w-[200px] outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Barchasi</option>
          <option value="paid">To‘langan</option>
          <option value="pending">To‘lanmagan</option>
        </select>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full text-left text-gray-700">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="py-3 px-4 font-semibold">Student</th>
              <th className="py-3 px-4 font-semibold">Email</th>
              <th className="py-3 px-4 font-semibold">Summa</th>
              <th className="py-3 px-4 font-semibold">Status</th>
              <th className="py-3 px-4 font-semibold">Sana</th>
              <th className="py-3 px-4 font-semibold">Amallar</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-400">
                  Yuklanmoqda...
                </td>
              </tr>
            ) : data?.length ? (
              data.map((item: any, index: number) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4">{item.student_name}</td>
                  <td className="py-3 px-4">{item.student_email}</td>
                  <td className="py-3 px-4">{item.amount} USD</td>
                  <td
                    className={`py-3 px-4 font-medium ${
                      item.status === "paid" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.status === "paid" ? "To‘langan" : "To‘lanmagan"}
                  </td>
                  <td className="py-3 px-4">{item.payment_date}</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Tafsilot
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

export default Payments;
