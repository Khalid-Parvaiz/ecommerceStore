import { useNavigate } from "react-router"
import Header from "../../components/Header"
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "../../config";

export default function SignUp() {
    const navigate = useNavigate()
    
        useEffect(() => {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    navigate('/ecommerceStore/dashboard')
                    const uid = user.uid;
                    // ...
                }
            });
        },[navigate])

    return (
        <>
            <Header />
            <div className="w-full h-screen flex flex-col gap-20 items-center justify-center">
                <h1 className="text-5xl font-bold">Welcome To <span className="text-green-500">Dr.Token</span></h1>
                <div className="flex gap-10">

                    {/* // patient */}

                    <div className="w-auto h-auto border-gray-300 border-1 rounded-lg opacity-50 hover:opacity-100 hover:shadow-xl transition-all" >
                        <button className="w-full h-full" onClick={() => navigate("/ecommerceStore/signUp/patient")} >
                            <div>
                                <div className="w-50 h-50 bg-green-300 m-5 flex items-center justify-center rounded-lg">
                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="7" r="4" />
                                        <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
                                    </svg>
                                </div>
                                <div className="w-full h-20 ">
                                    <h1 className="text-3xl font-bold">Patient</h1>
                                    <p className="text-sm font-medium text-gray-400">Get Token</p>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* // doctor */}

                    <div className="w-auto h-auto border-gray-300 border-1 rounded-lg opacity-50 hover:opacity-100 hover:shadow-xl transition-all" >
                        <button className="w-full h-full" onClick={() => navigate("/ecommerceStore/signUp/doctor")} >
                            <div>
                                <div className="w-50 h-50 bg-green-300 m-5 flex items-center justify-center rounded-lg">
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z" />
                                        <path d="M4 22v-2a6 6 0 0 1 12 0v2" />
                                        <path d="M19 8v6" />
                                        <path d="M16 11h6" />
                                    </svg>
                                </div>
                                <div className="w-full h-20 ">
                                    <h1 className="text-3xl font-bold">Doctor</h1>
                                    <p className="text-sm font-medium text-gray-400">Get Token</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}