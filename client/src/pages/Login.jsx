import React, { useState } from "react";
import api from "../config/api";
import toast from "react-hot-toast";
import { Link , useNavigate} from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { setUser, setIsLogin, setIsrecruiter } = useAuth();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit =async  (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(loginData);
  try {
      const res = await api.post("/auth/login", loginData);
      toast.success(res.data.message);
      sessionStorage.setItem("userData", JSON.stringify(res.data.data));
      setUser(res.data.data);
      setIsLogin(true);
      setIsrecruiter(res.data.data.role === "recruiter");
      setLoginData({
        email: "",
        password: "",
      });
      res.data.data.role === "recruiter" ? navigate("/recruiterDashboard") : navigate("/userDashboard");
    } catch (error) {
      console.log(error);
      toast.error(
        `Error : ${error.response?.status} | ${error.response?.data?.message}`
      );
    } finally {
      setLoading(false);
    }
  }; 
  
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-violet-100 to-blue-300 flex justify-center items-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Login to JobPortal
            </h1>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200 font-semibold"
            >
              Login
            </button>
          </form>

          <div className="text-center text-sm text-gray-500 pt-4">
            Don’t have an account?{" "}
            <Link to={"/register"} className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
