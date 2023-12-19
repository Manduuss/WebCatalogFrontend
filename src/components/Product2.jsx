//used for the CustomerPage

import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { VITE_BACKEND_URL } from "../App";

const Product2 = ({ product, getProducts }) => {

    const deleteProduct = async (id) => {
        const result = await Swal.fire( {
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonColor: '#3085d6',
            confirmButtonColor: '#d33',

        })
        if(result.isConfirmed) {
        try {
            await axios.delete(`${VITE_BACKEND_URL}/api/products/${id}`);
            toast.success("Delete a product successfully");
            getProducts();
        }
    
        catch (error) {
            toast.error(error.message);
        }
    } 
    }

    return(
        <div className="bg-White rounded shadow-lg overflow-hidden w-3/5">
            <img src= {product.image} className="w-full h-full object-cover" />
            <div className="px-4 pt-2 pb-4">
                <h2 className="text font-semibold">{product.name}</h2>
                <div className="text-sm">Quantity: {product.quantity}</div>
                <div className="text-sm">Price ${product.price}</div>
        </div>
        </div>
        
    )
}

export default Product2;



