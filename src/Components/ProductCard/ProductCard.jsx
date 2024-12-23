import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { product_id, product_image, product_title, price, product_code } = product;

    return (
        <div className="card bg-base-100 shadow-xl p-4">
            <figure className="px-5 pt-5">
                <img
                    src={product_image}
                    alt="Gadget"
                    className="rounded-xl object-cover w-full h-48"  // Ensures the image covers the space
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product_title}</h2>
                <p>Code: {product_code}</p>
                <p>${price}</p>
                <div className="card-actions">
                    <Link to={`/products/${product_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;
