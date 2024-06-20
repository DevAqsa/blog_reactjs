import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Login as authLogin} from "../store/authSlice" 
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import {authService} from "../appwrite/auth"
import { useForm } from "react-hook-form"

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm() 
    const [error, setError] = useState(null)
  return (
    <div>Login</div>
  )
}

export default Login