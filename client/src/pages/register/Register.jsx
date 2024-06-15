import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Logo from "../../components/header/logo/Logo";
import SocialLogin from "../../components/socialLogin/SocialLogin";

const Register = () => {
  const { createUser, user } = useContext(AuthContext);
  const [regError, setRegError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;

    const userDetails = { name, photo, email, password, terms };
    console.log(userDetails);

    setRegError("");
    setSuccess("");

    if (password.length < 8) {
      return setRegError("Password should 8 character or more");
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        setSuccess("User Created Successfully");
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("profile updated");
          })
          .catch((error) => {
            setRegError(error.message);
          });
      })
      .catch((error) => {
        setRegError(error.message);
      });
  };
  return (
    <div>
      <div className="container flex flex-col mx-auto rounded-lg pt-12 my-5">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center xl:p-10">
              <div
                
                className="flex flex-col w-full h-full p-6 text-center rounded-3xl border-4 border-main-color shadow-lg shadow-green-500/100"
              >
                <div className="mx-auto mb-2">
                <Logo/>

                </div>
                <h3 className="mb-3 text-4xl font-extrabold text-white">
                  Register
                </h3>

                <SocialLogin/>
                <div className="flex items-center mb-3">
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                  <p className="mx-4 text-grey-600">or</p>
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                </div>
                <form onSubmit={handleRegister}>
                <div className="flex gap-3">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                    required
                  />

                  <input
                    id="name"
                    type="text"
                    name="photo"
                    placeholder="Photo"
                    className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                    required
                  />
                </div>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="mail@loopple.com"
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  required
                />

                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter a password"
                  className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  required
                />
                <div className="flex flex-row justify-between mb-8">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Terms & Conditions</span>
                      <input
                        type="checkbox"
                        defaultChecked
                        name="terms"
                        className="checkbox ml-2"
                      />
                    </label>
                  </div>
                
                </div>
                <button className="w-full px-6 py-5 mb-5 text-sm font-bold bg-main-color rounded-lg text-black shadow-lg shadow-green-500/50">
                  Register
                </button>
                {regError ? (
                  <p className="text-red-600">{regError}</p>
                ) : (
                  <p className="text-green-600">{success}</p>
                )}
                <p className="text-sm leading-relaxed text-grey-900">
                  Already have an Account?{" "}
                  <Link to={"/login"} className="font-bold text-grey-700">
                    Login your Account
                  </Link>
                </p>
                </form>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
