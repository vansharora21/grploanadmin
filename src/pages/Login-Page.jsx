import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Set loading state for visual feedback
    setLoading(true);
    
    // Simulate a brief loading delay for better UX
    setTimeout(() => {
      // Set authentication in localStorage
      localStorage.setItem("isAuthenticated", "true");
      
      // Navigate to dashboard
      navigate('/dashboard');
      
      // Reset loading state
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <div style={{ marginLeft: "14rem" }}>
        <div className="min-h-screen flex items-center justify-center bg-[#0f172a] py-12">
          <div className="w-full max-w-7xl flex flex-col md:flex-row bg-[#1e293b] rounded-3xl overflow-hidden shadow-2xl">

            {/* Left Side - Form */}
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg mx-auto"
              >
                <h1 className="text-4xl font-bold text-white mb-6 text-center">
                  Sign in to <span className="text-blue-500">Learnitfy</span>
                </h1>
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full rounded-xl bg-[#0f172a] text-white border border-gray-600 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Password</label>
                    <input
                      type="password"
                      className="w-full rounded-xl bg-[#0f172a] text-white border border-gray-600 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <a href="#" className="hover:underline">Forgot Password?</a>
                  </div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white font-semibold py-3 px-4 rounded-xl transition duration-300 hover:bg-blue-600 flex justify-center items-center"
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      ) : (
                        "Sign In"
                      )}
                    </button>
                  </motion.div>
                  <p className="text-gray-400 text-center text-sm">
                    Need an account? <a href="#" className="text-blue-400 hover:underline">Sign up</a>
                  </p>
                </form>
                <p className="text-xs text-gray-500 mt-10 text-center">
                  By continuing, you agree to our <a href="#" className="underline">Terms & Conditions</a> and <a href="#" className="underline">Privacy Policy</a>.
                </p>
              </motion.div>
            </div>

            {/* Right Side - Image */}
            <div className="hidden md:flex w-1/2 bg-[#0f172a] items-center justify-center relative">
              <img
                src="https://learnitfy.com/static/media/PNG-01.8ee368613646ae2541d7.png"
                alt="Learnitfy Preview"
                className="rounded-lg shadow-xl w-[85%]"
              />
              <div className="absolute bg-orange-400 rounded-full w-52 h-52 top-16 left-16 opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
