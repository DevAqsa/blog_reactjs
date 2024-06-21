/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import authService from "../appwrite/auth"

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus =  useSelector(state => state.auth.status)


    useEffect(() => {
        //Todo: make it more easy to understand
        if (authentication && authService !== authentication) {
            navigate("/login")
        } else if(!authentication && authStatus !== authentication) {
            navigate("/")
        }
          setLoader(false)                                                                                                              
    }, [authStatus, navigate, authentication])
    
  return loader ? <h1>Loading...</h1> : <>{children}</>
}

