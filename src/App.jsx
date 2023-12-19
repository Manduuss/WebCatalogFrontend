import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="container mx-auto p-2">
          <Link to="/home"><h2 className="text-white text-2xl font-bold">Pottery by Ellen</h2></Link>
          <Link to="/login" className="text-white">
            Login for admin
          </Link>
        </div>
      </nav>

     <div className="container mx-auto p-2 h-full">
      <Routes>

        <Route index element={<SignupPage/>}></Route>

        <Route path="/adminpage" element={<AdminPage/>}></Route>
        <Route path="/create" element={<CreatePage/>}></Route>
        <Route path="/edit/:id" element={<EditPage/>}></Route>
        <Route path='/register' element= {<SignupPage/>}></Route>
        <Route path='/login' element= {<LoginPage/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
      </Routes>
      
      </div> 
      <ToastContainer />
    </div>
  );
}

export default App;



