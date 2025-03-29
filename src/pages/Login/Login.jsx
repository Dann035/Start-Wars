import React, { useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import loginSound from "../../assets/sounds/obi-wan_says_hello_thereyoutubetomp4.mp3";


function Login() {
    useEffect(() => {
        const timer = setTimeout(() => {
            const audio = new Audio(loginSound);
            audio.play().catch((error) => {
                console.error("Error playing audio:", error);
            });
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="contenedor">
            <div className="login-container">
                <h2>Login</h2>
                <form>
                    <div>
                        <label>Email:</label>
                        <input type="email" placeholder="Enter your email.." />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            placeholder="Enter your password.."
                        />
                    </div>
                    <Link to="/home">
                        <button type="submit">Login</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
