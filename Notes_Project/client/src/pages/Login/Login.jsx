import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { validateEmail } from "../../utils/helper";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [Error, setError] = useState();

  const HandleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please Enter the valid Email and Password!");
      return;
    }

    if (!password) {
      setError("Please Enter the correct password!");
      return;
    }
    setError("");

    // LoginAPI
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className=" border-2 p-5 h-80 w-3/4 lg:w-1/3 sm:min-w-1/2 md:w-1/2 border-4 bg-white shadow-2xl flex flex-col justify-center items-center rounded-2xl">
        <h2 className="font-bold text-2xl text-red-500">LogIn</h2>
        <form
          action=""
          className="w-3/5 sm:w-1/2  lg:w-64"
          onSubmit={HandleLogin}
        >
          <div className="my-4 w-full">
            <input
              type="text"
              placeholder="Email"
              value={email}
              className="bg-slate-100 outline-none rounded-lg h-10 p-2 w-full"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="my-4 w-full flex justify-center rounded-lg items-center bg-slate-100">
            <input
              type={isShowPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              className="bg-slate-100 rounded-lg h-10 p-2 w-full outline-none"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {password && (
              <FaRegEye
                className="mr-3 hover:cursor-pointer"
                onClick={() => setIsShowPassword(!isShowPassword)}
              />
            )}
          </div>
          {Error && <p className="text-xs text-red-500 mb-3">{Error}</p>}
          <button
            className="bg-red-500 rounded-md lg:w-20  text-white p-1 px-2"
            // onClick={HandlingData}
          >
            Login
          </button>
        </form>
        <div className="my-2">
          Not registered yet?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
