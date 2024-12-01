import React, { useState } from "react";
import './style.css';
type LoginProps = {
    handleLogin: (index:number) => void;
}
const Login = (props: LoginProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        
        if (username == "admin" && password == "admin") {
            localStorage.setItem('userName', 'admin')
            props.handleLogin(2) } else props.handleLogin(1);
    };
    return(
        <div className="container">
            <div className="LoginTemplate">
                <table>
                    <tr>
                        <td>User name:</td>
                        <td><input type="text" onChange={(e)=>setUsername(e.currentTarget.value)}/></td>
                    </tr>

                    <tr>
                        <td>Password:</td>
                        <td><input type="password" onChange={(e)=>setPassword(e.currentTarget.value)}/></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td><button onClick={handleLogin}>Login</button></td>
                    </tr>

                </table>
            </div>
        </div>
    )
}

export default Login;