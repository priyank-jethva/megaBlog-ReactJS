import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { Button, Input, Logo } from './index'
import { useForm } from 'react-hook-form'



function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit} = useForm()
    const [error, setError] = useState('')

    const login = async (data) =>{
        setError('');
        try {
            const session = await authService.login(data)
            if(session) {
                const userData = authService.getCurrentUser()
                dispatch(authLogin(userData))
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div>Login</div>
    )
}

export default Login