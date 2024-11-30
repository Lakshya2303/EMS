import React, { useState } from "react";
import axios from "axios";
const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');  

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', {
                email,
                password
            });
            const { role, name } = response.data;
            onLogin(role, name);  
            setEmail('');
            setPassword('');
            setError('');
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 rounded-xl border-emerald-500 p-20">
                <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
                    <input required 
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent border-2 border-emerald-600 rounded-full text-xl outline-none py-3 px-5 placeholder:text-gray-400" 
                    type="email"
                    value={email} 
                    placeholder='Enter your email' />
                    <input required 
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-transparent border-2 border-emerald-600 rounded-full text-xl outline-none py-3 px-5 mt-3 placeholder:text-gray-400" 
                    type="password" 
                    value={password}
                    placeholder='Enter your password'/>
                    <button className="bg-emerald-600 rounded-full text-xl text-white outline-none py-3 px-5 mt-5 placeholder:text-white">Log In</button>
                    {error && <p className="text-red-500 mt-3">{error}</p>}
                </form>
            </div>
        </div>
    )
}

export default Login