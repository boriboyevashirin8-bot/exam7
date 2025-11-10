import { useState } from "react";
import { FiMail, FiLock, FiMoon } from "react-icons/fi";
import { useLoginMutation } from "../../hooks/useQueryHandler/useQueryAction";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isPending } = useLoginMutation();

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white relative">
      <button className="absolute top-5 left-5 border border-gray-200 p-2 rounded-lg hover:bg-gray-50 transition">
        <FiMoon className="text-gray-700 text-lg" />
      </button>

      <div className="bg-white shadow-[0_0_60px_-10px_rgba(0,0,0,0.15)] rounded-2xl p-10 w-[400px] flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          Xush kelibsiz <span className="text-[22px]">👋</span>
        </h1>
        <p className="text-gray-600 text-center mb-8 text-[15px] leading-snug">
          Hisobingizga kirish uchun email va parolni kiriting
        </p>

        <form onSubmit={login} className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-gray-800 text-[15px] font-medium">
              Email
            </label>
            <div className="flex items-center border border-gray-200 rounded-md px-3 py-2 gap-2 focus-within:border-gray-400 transition">
              <FiMail className="text-gray-400 text-[18px]" />
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 outline-none text-[15px] text-gray-700"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-gray-800 text-[15px] font-medium">
              Parol
            </label>
            <div className="flex items-center border border-gray-200 rounded-md px-3 py-2 gap-2 focus-within:border-gray-400 transition">
              <FiLock className="text-gray-400 text-[18px]" />
              <input
                type="password"
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 outline-none text-[15px] text-gray-700"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="mt-2 bg-black hover:bg-gray-900 text-white font-medium py-2 rounded-md transition-all"
          >
            {isPending ? "Yuklanmoqda..." : "Kirish"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
