import { useState } from "react"
import { getAuth, signOut } from "../config";

export default function Header({ user }) {
    const [showProfileCard, setShowProfileCard] = useState(false)

    const userSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("user sign out ho gia")
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <header className="w-[100%] h-15 p-10 flex items-center justify-between fixed" >
            <div className="text-3xl font-bold text-green-500">Dr.Token</div>
            <div className={`relative w-12 h-12 rounded-4xl border-green-500 border-2 items-center justify-center ${user ? 'flex' : 'hidden'}`}
                >
                <div className="w-10 h-10 rounded-4xl bg-green-300" onClick={() => { showProfileCard ? setShowProfileCard(false) : setShowProfileCard(true) }}><img src={user?.image} alt="" /></div>
                <div className={`absolute right-0 top-15 w-auto p-2.5 border border-green-500 rounded-lg transition-all ${showProfileCard ? 'scale-x-full' : 'scale-x-0'}`}>
                    <div className="flex text-sm items-center gap-3 mb-3 pb-3 border-b-2 border-green-500">
                        <div className="w-10 h-10 rounded-4xl bg-green-300"><img src={user?.image} alt="" /></div>
                        <div className="text-sm">{user?.email}</div>

                    </div>
                    <div className="text-sm border-b-2 border-green-500 mb-3 pb-3">
                        <p className="p-1.5 rounded-sm hover:bg-green-200">Profile</p>
                        <p className="p-1.5 rounded-sm hover:bg-green-200">Setting</p>
                    </div>
                    <div className="text-red-500 text-sm font-bold p-1.5 rounded-sm hover:bg-green-200" onClick={() => userSignOut()} >Sign Out</div>
                </div>


            </div>
        </header>
    )
}