import { useEffect, useState } from "react";
import { getStoreCartList, addToStoreCartList, addToStoreWishList } from "../Utility/Utility";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";

const ListedCart = () => {
    const [cartListProduct, setCartList] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const allCarts = useLoaderData(); // Getting data passed from loader

    useEffect(() => {
        if (allCarts.length > 0) {
            const StoreCartList = getStoreCartList(); // Get stored cart IDs
            const cartList = allCarts.filter(cart => StoreCartList.includes(String(cart.product_id)));
            setCartList(cartList);
        }
    }, [allCarts]);

    const deleteFromCart = (productId) => {
        const updatedCartList = cartListProduct.filter(item => item.product_id !== productId);
        setCartList(updatedCartList);

        // Remove from localStorage
        const StoreCartList = getStoreCartList();
        const updatedStoreCartList = StoreCartList.filter(id => id !== String(productId));
        localStorage.setItem('cart-list', JSON.stringify(updatedStoreCartList));
    };

    const sortCartList = () => {
        const sortedList = [...cartListProduct].sort((a, b) => b.price - a.price);
        setCartList(sortedList);
    };

    const openModalWithTotal = () => {
        const total = cartListProduct.reduce((acc, item) => acc + item.price, 0);
        setTotalCost(total);
        document.getElementById('my_modal_1').showModal(); // Open modal to confirm purchase
    };

    return (
        <div>
            <div className="flex justify-evenly mt-28">
                <div>
                    <h1 className="font-bold">Cart</h1>
                </div>
                <div className="flex justify-evenly gap-8">
                    <div>
                        <h1 className="font-bold">Total cost: ${totalCost}</h1>
                    </div>
                    <div>
                        <button className="btn font-bold" onClick={sortCartList}>Sort By Price</button>
                    </div>
                    <div>
                        <button
                            className="btn"
                            onClick={openModalWithTotal}
                            // disabled={cartListProduct.length === 0}
                        >
                            Purchase
                        </button>
                    </div>
                </div>
            </div>
            {cartListProduct.length === 0 ? (
                <p className="-mr-36 px-4">No items in the cart</p>
            ) : (
                cartListProduct.map(cart => <Cart key={cart.product_id} cart={cart} onDelete={deleteFromCart} />)
            )}
        </div>
    );
};

export default ListedCart;
