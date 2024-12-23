import { FaTrash } from 'react-icons/fa'; // Importing the trash icon

const Cart = ({ cart, onDelete }) => {
    const { product_image, product_title, price, description } = cart;

    return (
        <div className="mt-11 px-4 md:px-8">
            <div className="flex gap-9 space-y-7 mt-14">
                <div>
                    <img className="w-20" src={product_image} alt="" />
                </div>
                <div>
                    <h1>{product_title}</h1>
                    <p>{description}</p>
                    <p>Price: {price}</p>
                </div>
                {/* Delete Icon */}
                <div className="ml-auto cursor-pointer" onClick={() => onDelete(cart.product_id)}>
                    <FaTrash size={24} />
                </div>
            </div>
        </div>
    );
};

export default Cart;
