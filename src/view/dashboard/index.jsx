import { useContext, useEffect } from "react";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router";
import Header from "../../components/Header";

export default function Dashboard() {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(()=> {
        if(!user?.accessToken) {
            navigate("/ecommerceStore/")
        }
    },[user,navigate])

    return(
        <>
        <Header user={user}/>
        </>
    )
}