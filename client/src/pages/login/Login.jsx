import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [logError, setLogError] = useState("");
  const [success, setSuccess] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setLogError("");
    setSuccess("");
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        setSuccess("User Logged In Successfully");
      })
      .catch((error) => {
        console.log(error);
        setLogError(error.message);
      });
  };
  return (
    <div>
      <div className="container flex flex-col mx-auto rounded-lg pt-12 my-5">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center xl:p-10">
              <form
                onSubmit={handleLogin}
                className="flex flex-col w-full h-full p-6 text-center rounded-3xl border-4 border-main-color shadow-lg shadow-green-500/100"
              >
                <h3 className="mb-3 text-4xl font-extrabold text-white">
                  Log In
                </h3>
                <button className="flex items-center border-4 border-main-color shadow-lg shadow-green-500/50 justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
                  <img
                    className="h-5 mr-2"
                    src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                    alt=""
                  />
                  Sign in with Google
                </button>
                <div className="flex items-center mb-3">
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                  <p className="mx-4 text-grey-600">or</p>
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                </div>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="mail@loopple.com"
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                />

                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter a password"
                  className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                />
                <div className="flex flex-row justify-between mb-8">
                 
                  <a
                    href="javascript:void(0)"
                    className="mr-4 text-sm font-medium text-purple-blue-500"
                  >
                    Forget password?
                  </a>
                </div>
                <button className="w-full px-6 py-5 mb-5 text-sm font-bold bg-main-color rounded-lg text-black shadow-lg shadow-green-500/50">
                  Login
                </button>
                {logError ? (
                  <p className="text-red-600">{logError}</p>
                ) : (
                  <p className="text-green-600">{success}</p>
                )}
                <p>
                  Not registered yet?{" "}
                  <Link to={"/register"} className="font-bold text-grey-700">
                    Create an Account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
