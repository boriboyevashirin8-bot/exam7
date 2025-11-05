import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import axios from 'axios';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDark, setIsDark] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Iltimos, email va parolni kiriting');
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`, {
        email,
        password,
      });

      console.log('Login success:', response.data);
      alert(`Kirish muvaffaqiyatli! Token: ${response.data.token}`);
      // Agar token bo‘lsa, localStorage ga saqlash
      localStorage.setItem('token', response.data.token);
      // Keyin asosiy sahifaga yo‘naltirish:
      // window.location.href = '/dashboard';
    } catch (error: any) {
      console.error('Login error:', error.response?.data || error.message);
      alert(`Xato: ${error.response?.data?.message || 'Login muvaffaqiyatsiz'}`);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <button
        onClick={() => setIsDark(!isDark)}
        className={`absolute top-6 left-6 p-3 rounded-full transition-colors ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-700'} shadow-lg hover:scale-110 transition-transform`}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className={`w-full max-w-md mx-4 rounded-2xl shadow-2xl p-8 transition-colors ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Xush kelibsiz 👋</h1>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Hisobingizga kirish uchun email va parolni kiriting
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'}`}
            />
          </div>

          <div>
            <label htmlFor="password" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Parol</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'}`}
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 mt-6"
          >
            Kirish
          </button>
        </div>

        <div className="mt-6 text-center">
          <a href="#" className={`text-sm hover:underline ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Parolni unutdingizmi?</a>
        </div>
      </div>
    </div>
  );
}
