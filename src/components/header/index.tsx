import { NavLink, Outlet } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiUser,
  FiBookOpen,
  FiSettings,
  FiLogOut,
  FiUserCheck,
  FiCreditCard,
} from "react-icons/fi";

function Header({ children }: { children?: React.ReactNode }) {
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload();
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 text-[16px] px-4 py-2 rounded-md transition ${
      isActive
        ? "border-l-4 border-gray-300 bg-gray-100 font-medium text-gray-900"
        : "text-gray-800 hover:bg-gray-100"
    }`;

  return (
    <div className="flex min-h-screen bg-white font-sans">
      <aside className="w-[260px] bg-white border-r border-gray-200 flex flex-col justify-between fixed top-0 left-0 h-screen">
        <div className="flex flex-col justify-between h-full py-6">
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-gray-800 px-6 mb-4">Menu</h2>

            <nav className="flex flex-col gap-1">
              <NavLink className={linkClass} to="/">
                <FiHome className="text-[18px]" /> Asosiy
              </NavLink>
              <NavLink className={linkClass} to="/menegers">
                <FiUserCheck className="text-[18px]" /> Menejerlar
              </NavLink>
              <NavLink className={linkClass} to="/admins">
                <FiUsers className="text-[18px]" /> Adminlar
              </NavLink>
              <NavLink className={linkClass} to="/teachers">
                <FiUser className="text-[18px]" /> Ustozlar
              </NavLink>
              <NavLink className={linkClass} to="/students">
                <FiUsers className="text-[18px]" /> Studentlar
              </NavLink>
              <NavLink className={linkClass} to="/groups">
                <FiUsers className="text-[18px]" /> Guruhlar
              </NavLink>
              <NavLink className={linkClass} to="/courses">
                <FiBookOpen className="text-[18px]" /> Kurslar
              </NavLink>
              <NavLink className={linkClass} to="/payment">
                <FiCreditCard className="text-[18px]" /> To‘lovlar
              </NavLink>
            </nav>

            <div className="mt-6">
              <h2 className="text-lg font-bold text-gray-800 px-6 mb-3">
                Boshqalar
              </h2>
              <div className="flex flex-col gap-1">
                <NavLink className={linkClass} to="/settings">
                  <FiSettings className="text-[18px]" /> Sozlamalar
                </NavLink>
                <NavLink className={linkClass} to="/profile">
                  <FiUser className="text-[18px]" /> Profil
                </NavLink>
                <button
                  className="flex items-center gap-2 text-[16px] text-gray-800 px-4 py-2 rounded-md hover:bg-gray-100 transition"
                  onClick={logOut}
                >
                  <FiLogOut className="text-[18px]" /> Chiqish
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1 ml-[260px] flex flex-col">
        <nav className="h-[60px] bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <h2 className="text-[18px] font-medium text-gray-900">Asosiy</h2>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center font-semibold uppercase">
              {user
                ? user.first_name?.[0] || user.username?.[0]
                : "D"}
            </div>
            <span className="text-gray-900 text-[16px] font-medium tracking-wide">
              {user ? `${user.first_name} ${user.last_name}` : "Davron"}
            </span>
          </div>
        </nav>

        <main>
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
}

export default Header;
