import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Component/Provider/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
    const { signUpUser, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, email, password }
        console.log(user);

        signUpUser(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    Swal.fire({
                        title: "Thanks for Join with Us!",
                        text: "You aue successfully register!",
                        icon: "success"
                    });
                }
                form.reset();
                navigate(location.state ? location.state : "/")
            })

            .catch(error => console.log(error))

    }

    const handleSignUpWithGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                if (user) {
                    Swal.fire({
                        title: "Thanks for Join with Us!",
                        text: "You aue successfully register!",
                        icon: "success"
                    });
                }
                navigate(location.state ? location.state : "/")
            })
            .catch(error => console.log(error))
    }

    return (
        <section className="px-4 py-24 mx-auto max-w-7xl">
            <div className="grid items-center w-full grid-cols-1 gap-0 mx-auto lg:grid-cols-11 lg:gap-24 xl:w-11/12">
                <div className="col-auto text-center md:col-span-6 lg:text-left">
                    <img src="/signup.png" alt="" />
                </div>
                <div className="col-auto md:col-span-5 w-full">
                    <div className="mt-2 bg-slate-100 px-5 py-2 rounded-md">
                        <div className="">
                            <h1 className="text-5xl font-bold">Sign Up</h1>
                            <form onSubmit={handleSignUp} action="#" className="space-y-6 mt-3">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-600"> Name </label>
                                    <div className="mt-1">
                                        <input autoComplete="name" id="name" name="name" type="text" required="" placeholder="Your Name" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-white focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-600"> Email address </label>
                                    <div className="mt-1">
                                        <input id="email" name="email" type="email" autoComplete="email" required="" placeholder="Your Email" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-white focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="password" className="block text-sm font-medium text-neutral-600"> Password </label>
                                    <div className="mt-1">
                                        <input id="password" name="password" type="password" autoComplete="current-password" required="" placeholder="Your Password" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-white focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign Up</button>
                                </div>
                            </form>
                            <div className="relative my-4">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-slate-100 text-neutral-600"> Or continue with </span>
                                </div>
                            </div>
                            <div>
                                <button onClick={handleSignUpWithGoogle} type="submit" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white hover:bg-slate-500 hover:text-white">
                                    <div className="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 48 48">
                                            <defs>
                                                <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path>
                                            </defs>
                                            <clipPath id="b">
                                                <use xlinkHref="#a" overflow="visible"></use>
                                            </clipPath>
                                            <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"></path>
                                            <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path>
                                            <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path>
                                            <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path>
                                        </svg>
                                        <span className="ml-4"> Sign Up with Google</span>
                                    </div>
                                </button>
                            </div>
                            <p className="py-2 text-sm text-center">Already have an acout, go to <Link to='/login'><span className="text-blue-700">login</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default SignUp;