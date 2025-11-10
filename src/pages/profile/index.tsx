import { useState, useEffect } from "react";
import { FiUser, FiMail, FiCalendar } from "react-icons/fi";

interface UserData {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  created_at?: string;
}

function Profile() {
  const [user, setUser] = useState<UserData | null>(null);
  const [formData, setFormData] = useState<UserData>({
    first_name: "",
    last_name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed);
      setFormData(parsed);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    localStorage.setItem("user", JSON.stringify(formData));
    setUser(formData);
    alert("Profil ma'lumotlari yangilandi ");
  };

  const handleChangePassword = () => {
    alert("Parolni o‘zgartirish funksiyasi keyingi bosqichda qo‘shiladi ");
  };

  if (!user) return <p>Yuklanmoqda...</p>;

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="w-[80px] h-[80px] rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center">
            <FiUser className="text-[40px] text-gray-700" />
          </div>
          <div>
            <h2 className="text-[22px] font-semibold text-gray-900">
              {user.first_name} {user.last_name}
            </h2>
            <p className="text-gray-700 flex items-center gap-2">
              <FiMail /> {user.email}
            </p>
            <p className="text-gray-600 flex items-center gap-2 mt-1">
              <FiCalendar /> Qo‘shilgan:{" "}
              {user.created_at || "2025-06-04"}
            </p>
          </div>
        </div>

        <div>
          <span className="bg-red-600 text-white text-[14px] px-4 py-1 rounded-md">
            {user.role}
          </span>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-[18px] font-semibold text-gray-900 mb-1">
          Profil ma'lumotlari
        </h3>
        <p className="text-gray-600 mb-6 text-[14px]">
          Shaxsiy ma'lumotlaringizni yangilashingiz mumkin.
        </p>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="text-[15px] text-gray-700">Ism</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />
          </div>

          <div>
            <label className="text-[15px] text-gray-700">Familiya</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />
          </div>

          <div>
            <label className="text-[15px] text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />
          </div>

          <div>
            <label className="text-[15px] text-gray-700">Rol</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6 gap-3">
          <button
            onClick={handleChangePassword}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition"
          >
            Parol ni O‘zgartirish
          </button>
          <button
            onClick={handleUpdate}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition"
          >
            O‘zgartirish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
