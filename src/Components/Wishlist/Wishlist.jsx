import { useEffect, useState } from "react";
import { getStoreWishList, addToStoreCartList, addToStoreWishList } from "../Utility/Utility"; 
import Cart from "../Cart/Cart"; 
import { useLoaderData } from "react-router-dom";

const Wishlist = () => {
    const [wishlistProduct, setWishlist] = useState([]);
    const allProducts = useLoaderData(); // Getting data passed from loader

    useEffect(() => {
        if (allProducts.length > 0) {
            const StoreWishlist = getStoreWishList(); // Get stored wishlist IDs
            const wishlist = allProducts.filter(product => StoreWishlist.includes(String(product.product_id)));
            setWishlist(wishlist);
        }
    }, [allProducts]);

    const deleteFromWishlist = (productId) => {
        const updatedWishlist = wishlistProduct.filter(item => item.product_id !== productId);
        setWishlist(updatedWishlist);

        // Remove from localStorage
        const StoreWishlist = getStoreWishList();
        const updatedStoreWishlist = StoreWishlist.filter(id => id !== String(productId));
        localStorage.setItem('wish-list', JSON.stringify(updatedStoreWishlist));
    };

    const sortWishlist = () => {
        const sortedList = [...wishlistProduct].sort((a, b) => b.price - a.price);
        setWishlist(sortedList);
    };

    return (
        <div>
            <div className="flex justify-evenly mt-28">
                <div>
                    <h1 className="font-bold">Wishlist</h1>
                </div>
                <div className="flex justify-evenly gap-8">
                    <div>
                        <button className="btn font-bold" onClick={sortWishlist}>Sort By Price</button>
                    </div>
                </div>
            </div>
            {wishlistProduct.length === 0 ? (
                <p className="-mr-36 px-4">No items in the wishlist</p>
            ) : (
                wishlistProduct.map(product => <Cart key={product.product_id} cart={product} onDelete={deleteFromWishlist} />)
            )}
        </div>
    );
};

export default Wishlist;
