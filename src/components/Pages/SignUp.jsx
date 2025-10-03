import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import { FIREBASE_APP } from "../../utils/firebaseAuth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [failedSignUp, setFailedSignUp] = useState('');
    const {register, handleSubmit, formState:{ errors }}= useForm();
    const auth = getAuth(FIREBASE_APP);
    const navigate = useNavigate();
    
    const onSubmit = async (data) => {
        const { name, email, password } = data;
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: name });
            const user = userCredential.user;
            setFailedSignUp('');
            navigate('/sign-in');
        } catch (error) {
            const errorCode = error.code;
            let errorMessage = error.message;
            
            if (errorCode === "auth/email-already-in-use") {
                errorMessage ="This email is already registered. Please log in instead.";
            }
            setFailedSignUp(errorMessage);
        }
    }

    return (
        <div className="w-full min-h-[calc(100vh_-_37vh)] bg-zinc-50 flex justify-center items-center">
            <div className="w-3/12 p-12 my-24 border-0 rounded-2xl bg-white shadow-2xl">
                <h2 className="font-bold text-4xl py-2">Sign Up</h2>
                <span className="text-md text-gray-600">Already have an Acoount?
                    <Link to="/sign-in" className="font-semibold text-blue-600 mx-2 border-b-1">
                        Sign In
                    </Link>
                </span>
                <div className="py-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-full py-2">
                            <div className="text-xl font-semibold mb-2">Name</div>
                            <input { ...register('name', {
                                        required: "Name Field is required"
                                    })
                                } type="text" className="w-full px-2 border-1 border-zinc-800 rounded-md py-2 focus:outline-none" />
                            <span className="text-red-500 text-sm">{ errors.name ? errors.name.message : ''} </span>
                        </div>
                        <div className="w-full py-2">
                            <div className="text-xl font-semibold mb-2">Email</div>
                            <input { ...register('email', {
                                        required: "Email Field is required",validate: {
                                            matchPattern: (v) =>
                                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                                            "Email address must be a valid address",
                                        } 
                                    })
                                } type="text" className="w-full px-2 border-1 border-zinc-800 rounded-md py-2 focus:outline-none" />
                            <span className="text-red-500 text-sm">{ errors.email ? errors.email.message : ''} </span>
                        </div>
                        <div className="w-full py-2">
                            <div className="text-xl font-semibold mb-2">Password</div>
                            <input { ...register('password',{required: "Password Field is required"})} type="password" className={`w-full px-2 border-1 border-zinc-800 rounded-md py-2 focus:outline-none`} />
                            <span className="text-red-500 text-sm">{ errors.password ? errors.password.message : ''} </span>
                        </div>
                        { failedSignUp && <span className="text-red-500 text-sm">{failedSignUp}</span> }
                        <div className="w-full py-4">
                            <button type="submit" className="px-6 py-2 bg-orange-600 rounded-lg text-white text-xl font-semibold mb-2 cursor-pointer">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;