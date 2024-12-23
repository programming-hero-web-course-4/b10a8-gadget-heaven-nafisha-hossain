import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { FaHeart } from "react-icons/fa"; // Import FontAwesome heart icon
import { addToStoreCartList, addToStoreWishList } from "../Utility/Utility";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const ViewDetails = () => {
    const { product_id } = useParams();
    const data = useLoaderData();

    // Find the product that matches the product_id from the loader data
    const product = data.find(product => product.product_id === parseInt(product_id));

    if (!product) {
        return <div>Product Not Found</div>;
    }

    // Destructure the product data
    const {
        product_image,
        product_code,
        product_title,
        description,
        rating,
        availability,
        Specification,
        price,
    } = product;

    const [isInWishlist, setIsInWishlist] = useState(false);  // State to track if the product is in wishlist

    const handleAddToCart = (id) => {
        addToStoreCartList(id);
        toast("Adding item to cart");
    };

    const handleWishlist = (id) => {
        addToStoreWishList(id);  // Add to wishlist in local storage
        setIsInWishlist(true);    // Update state to reflect item is in wishlist
        toast("Adding item to WishList");
    };

    return (
        <div>
            {/* Product Details Section */}
            <div className="bg-purple-600 h-96 py-6 text-center text-white">
                <h2 className="text-3xl font-semibold">Product Details</h2>
                <p className="text-lg mt-4">Explore the full details of the product and its specifications.</p>
            </div>

            {/* Product Info Section with White Border */}
            <div className="relative px-4 py-2">
                {/* White border container */}
                <div className="flex justify-center -mt-[180px]">
                    <div className="relative w-full max-w-4xl p-4 border-8 border-white rounded-xl"> {/* Increased border size to 8px and added more padding */}
                        {/* Info Div with Product Details */}
                        <div className="flex gap-8 bg-white p-8 rounded-xl"> {/* Added padding inside the info div for more space */}
                            {/* Left side: Product Image */}
                            <div className="w-1/2">
                                <img
                                    src={product_image}
                                    alt={product_title}
                                    className="w-full h-auto object-cover rounded-xl"
                                />
                            </div>

                            {/* Right side: Product Information */}
                            <div className="w-1/2">
                                {/* Product Name and Code */}
                                <h3 className="text-2xl font-semibold">{product_title}</h3>
                                <p className="text-lg text-gray-600 mt-2">Code: {product_code}</p>

                                {/* Availability Button */}
                                <div className="mt-4">
                                    {availability ? (
                                        <button className="bg-green-500 text-white py-2 px-4 rounded-full">In Stock</button>
                                    ) : (
                                        <button className="bg-red-500 text-white py-2 px-4 rounded-full">Out of Stock</button>
                                    )}
                                </div>

                                {/* Conditional Rendering for Product Details */}
                                {availability ? (
                                    <>
                                        {/* Description */}
                                        <p className="text-lg mt-4">{description}</p>

                                        {/* Specifications */}
                                        <h4 className="text-xl font-medium mt-4">Specifications</h4>
                                        <ul className="list-disc ml-5 mt-2">
                                            {Specification && Specification.length > 0 ? (
                                                Specification.map((spec, index) => (
                                                    <li key={index}>{spec}</li>
                                                ))
                                            ) : (
                                                <li>No specifications available</li>
                                            )}
                                        </ul>

                                        {/* Rating */}
                                        <div className="flex items-center gap-4 mt-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl font-bold">{rating}</span>
                                                <span className="text-yellow-500">★</span>
                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div className="mt-6">
                                            <span className="text-xl font-semibold">Price: </span>
                                            <span className="text-2xl font-bold">${price}</span>
                                        </div>

                                        {/* Add to Cart Button and Heart Icon */}
                                        <div className="flex gap-4 mt-6 items-center">
                                            {/* Add to Cart Button */}
                                            <button 
                                                onClick={() => handleAddToCart(product_id)} 
                                                className="bg-slate-100 text-black py-2 px-4 rounded-full flex items-center hover:bg-gray-200"
                                            >
                                                Add to Cart
                                                <SlBasket className="text-xl" />
                                            </button>

                                            {/* Heart Icon */}
                                            <button 
                                                onClick={() => handleWishlist(product_id)} 
                                                className={`p-2 rounded-full border-2 ${isInWishlist ? 'bg-red-500 border-red-500' : 'bg-white border-black'} transition-all duration-300`}
                                            >
                                                <FaHeart className={`text-xl ${isInWishlist ? 'text-white' : 'text-black'}`} />
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center mt-8">
                                        <p className="text-xl font-semibold text-gray-800">
                                            We are unable to display the product details at this time as the item is currently out of stock.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ViewDetails;
