import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { VITE_BACKEND_URL } from "../App";

//problem with backend: can't change structure of customer model. So: firstname is name, lastname is email, email is passwort 

const LoginPage = () => {

    //const [firstname, setName] = useState("");
    const [lastname, setEmail] = useState("");
    const [email, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        if( lastname === "" || email === "" ) {
            alert('please fill out all input completly');
            return; 
        }
        try {
            setIsLoading(true);
            const response = await axios.post(`${VITE_BACKEND_URL}/api/customer/login`, { lastname: lastname,email: email})
            toast.success(`User: ${response.data.lastname} has been logged in succesfully`)
            setIsLoading(false);
            navigate('/home');

        } catch (error) {
            toast.error(error.response.data.message);
            setIsLoading(false);
        }
        
    }
    
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}> 
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                    <input 
                    type="email"
                    placeholder="Enter Email"
                    autoComplete="off"
                    value={lastname}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    className="form-control rounded-0"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={email}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        className="form-control rounded-0"
                        />
                </div>
                <button type="submit" className="btn btn-success border w-100 rounded-0"
                style={{ backgroundColor: '#28a745', color: '#fff', borderColor: '#28a745' }}>
                    Login
                </button>
                </form>
                <p>You don't have an account yet?</p>
                < Link to= "/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Register
                </Link>
                
            </div>
        </div>
    );
}

export default LoginPage;