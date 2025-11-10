import { FaSearch, FaUserGraduate, FaChalkboardTeacher, FaBook } from "react-icons/fa";
import { Button, Table, Dropdown } from "antd";
import type { ColumnsType } from "antd/es/table";

interface Student {
  key: string;
  name: string;
  course: string;
  phone: string;
  email: string;
  country: string;
  status: "Active" | "Inactive";
}

const columns: ColumnsType<Student> = [
  { title: "Ism", dataIndex: "name", key: "name", render: text => <span className="font-medium">{text}</span> },
  { title: "Kurs", dataIndex: "course", key: "course" },
  { title: "Telefon", dataIndex: "phone", key: "phone" },
  { title: "Email", dataIndex: "email", key: "email" },
  { title: "Mamlakat", dataIndex: "country", key: "country" },
  {
    title: "Holat",
    dataIndex: "status",
    key: "status",
    render: status => (
      <span className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${status === "Active" ? "bg-green-600" : "bg-red-600"}`}>
        {status === "Active" ? "Faol" : "Faol emas"}
      </span>
    ),
  },
];

const data: Student[] = [
  { key: "1", name: "Alixon", course: "Web Dasturlash", phone: "998901234567", email: "alixon@mail.com", country: "O'zbekiston", status: "Active" },
  { key: "2", name: "Bobur", course: "UX/UI Dizayn", phone: "998902345678", email: "bobur@mail.com", country: "O'zbekiston", status: "Inactive" },
  { key: "3", name: "Ozod", course: "Python Dasturlash", phone: "998903456789", email: "ozod@mail.com", country: "O'zbekiston", status: "Active" },
  { key: "3", name: "Begzod", course: "Frontend Dasturlash", phone: "998943457789", email: "begzod@mail.com", country: "O'zbekiston", status: "Active" },

];

export default function Dashboard() {
  const dropdownItems = [
    { key: "1", label: <span className="text-green-600 font-medium hover:text-green-700">Faol</span> },
    { key: "2", label: <span className="text-red-600 font-medium hover:text-red-700">Faol emas</span> },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-10 font-sans">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Salom, Davron</h1>
        <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-md w-64">
          <FaSearch className="text-gray-400" />
          <input type="text" placeholder="O‘quvchilarni qidirish..." className="w-full outline-none text-gray-700" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
          <div className="p-4 rounded-full bg-blue-100">
            <FaUserGraduate className="text-blue-600 text-4xl" />
          </div>
          <div>
            <p className="text-gray-500">Umumiy o‘quvchilar</p>
            <h2 className="text-2xl font-bold text-gray-900">120</h2>
            <p className="text-green-600 font-medium">10% o'sish bu oy</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
          <div className="p-4 rounded-full bg-purple-100">
            <FaChalkboardTeacher className="text-purple-600 text-4xl" />
          </div>
          <div>
            <p className="text-gray-500">O‘qituvchilar</p>
            <h2 className="text-2xl font-bold text-gray-900">15</h2>
            <p className="text-red-600 font-medium">1% pasayish bu oy</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
          <div className="p-4 rounded-full bg-yellow-100">
            <FaBook className="text-yellow-600 text-4xl" />
          </div>
          <div>
            <p className="text-gray-500">Kurslar</p>
            <h2 className="text-2xl font-bold text-gray-900">8</h2>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Barcha o‘quvchilar</h2>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-xl w-64">
              <FaSearch className="text-gray-400" />
              <input type="text" placeholder="Qidirish..." className="outline-none w-full text-gray-700" />
            </div>
            <Dropdown menu={{ items: dropdownItems }} placement="bottom">
              <Button className="flex items-center gap-2 bg-gray-100 border-none shadow-none hover:bg-gray-200">
                Saralash
              </Button>
            </Dropdown>
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
          rowClassName={() => "hover:bg-gray-50 transition-colors cursor-pointer"}
        />
      </div>
    </div>
  );
}

