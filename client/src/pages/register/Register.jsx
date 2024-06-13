import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {
  const {createUser} = useContext(AuthContext)

  const handleRegister = e =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const user ={name, photo, email, password}

    createUser(email,password)
    .then(res =>{
      console.log(res.user);
    }) 
    .catch(error => {
      console.log(error);
    })
  }
    return (
        <div>
              <div className="container flex flex-col mx-auto rounded-lg pt-12 my-5">
           <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
      <div className="flex items-center justify-center w-full lg:p-12">
        <div className="flex items-center xl:p-10">
          <form onSubmit={handleRegister} className="flex flex-col w-full h-full p-6 text-center rounded-3xl border-4 border-main-color shadow-lg shadow-green-500/100">
            <h3 className="mb-3 text-4xl font-extrabold text-white">Sign In</h3>
            <p className="mb-4 text-main-color">Enter your email and password</p>
            <a className="flex items-center border-4 border-main-color shadow-lg shadow-green-500/50 justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
              <img className="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt=""/>
              Sign in with Google
            </a>
            <div className="flex items-center mb-3">
              <hr className="h-0 border-b border-solid border-grey-500 grow"/>
              <p className="mx-4 text-grey-600">or</p>
              <hr className="h-0 border-b border-solid border-grey-500 grow"/>
           </div>
          <div className="flex gap-3">
           
            <input id="name" type="text" name="name" placeholder="Your Name" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"/>

            <input id="name" type="text" name="photo" placeholder="Photo" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"/>

          </div>
 
            <input id="email" type="email" name="email" placeholder="mail@loopple.com" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"/>

          
            <input id="password" type="password" name="password" placeholder="Enter a password" className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"/>
            <div className="flex flex-row justify-between mb-8">
              <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                <input type="checkbox" checked value="" className="sr-only peer"/>
                <div
                  className="w-5 h-5 bg-white border-2 rounded-sm border-grey-500 peer peer-checked:border-0 peer-checked:bg-purple-blue-500">
                  <img className="" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png" alt="tick"/>
                </div>
                <span className="ml-3 text-sm font-normal text-grey-900">Keep me logged in</span>
              </label>
              <a href="javascript:void(0)" className="mr-4 text-sm font-medium text-purple-blue-500">Forget password?</a>
            </div>
            <button className="w-full px-6 py-5 mb-5 text-sm font-bold bg-main-color rounded-lg text-black shadow-lg shadow-green-500/50">Register</button>
            <p className="text-sm leading-relaxed text-grey-900">Already have an Account? <Link to={'/login'} className="font-bold text-grey-700">Create an Account</Link></p>
          </form>
        </div>
      </div>
    </div>
        </div>
        <div className="flex flex-wrap -mx-3 my-5">
            <div className="w-full max-w-full sm:w-3/4 mx-auto text-center">
                <p className="text-sm text-slate-500 py-1">
                    Tailwind CSS Component from <a href="https://www.loopple.com/theme/motion-landing-library?ref=tailwindcomponents" className="text-slate-700 hover:text-slate-900" target="_blank">Motion Landing Library</a> by <a href="https://www.loopple.com" className="text-slate-700 hover:text-slate-900" target="_blank">Loopple Builder</a>.
                </p>
            </div>
        </div>
        </div>
    );
};

export default Register;