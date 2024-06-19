import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Login() {
  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail, login } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleQuickLogin = () => {
    signUpWithGmail()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    login(email.value, password.value)
      .then(() => {
        alert("Login successful!");
        navigate(from, { replace: true });
      })
      .catch(() => {
        setErrorMessage("Please provide valid email & password!");
      });
  };

  return (
    <div className="py-4 flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="w-[600px] bg-white shadow-md rounded px-12 pt-12 pb-12 mb-4"
      >
        <h3 className="text-xl text-background font-semibold mb-2">
          Chào mừng bạn đã quay trở lại
        </h3>
        <h3 className=" mb-6 text-gray-500">
          Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội việc làm bạn
          mơ ước
        </h3>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="name@email.com"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Mật khẩu
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="grid gap-5">
          <a
            className="text-end font-bold text-sm text-background hover:text-teal-400"
            href="#"
          >
            Quên mật khẩu?
          </a>

          <button
            className="bg-background text-white py-2 font-bold rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Đăng nhập
          </button>
        </div>

        {/* social login */}
        <div className="mt-8 text-center w-full mx-auto">
          <p className="mb-4">Hoặc đăng nhập nhanh với</p>

          <div className="flex items-center justify-center gap-4 w-full mx-auto">
            <button
              className="bg-red-500 text-white flex items-center gap-2 py-2 px-6 font-bold rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleQuickLogin}
            >
              <FaGoogle /> Google
            </button>
            <button
              className="bg-gray-700 text-white flex items-center gap-2 py-2 px-6 font-bold rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <FaGithub /> Github
            </button>
          </div>
        </div>
        <div className="mt-4 flex gap-2 justify-center">
          <h3>Bạn chưa có tài khoản?</h3>
          <Link
            className="font-semibold text-background hover:text-teal-400"
            to={"/sign-up"}
          >
            Đăng kí ngay
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
