import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/Header";
import { getAuth, onAuthStateChanged } from "../../config";
import { DataContext } from "../../context";

export default function Dashboard() {
    const { loginUser , setLoginUser } = useContext(DataContext)
    const navigate = useNavigate()

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate("/ecommerceStore/")
                const uid = user.uid;
                // ...
            } else {
                console.log(user)
               setLoginUser(user)  
            }
        });
    }, [navigate])

    return (
        <>
            <Header user={loginUser} />
        </>
    )
}