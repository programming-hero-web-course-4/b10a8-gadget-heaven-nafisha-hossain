import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const AllProductCards = ({ categories }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="container mx-auto px-4 mb-10"> {/* Added margin-bottom */}
            {/* Heading */}
            <div>
                <h1 className="text-3xl font-bold text-center">
                Explore Top-Tech Gadgets
                </h1>
            </div>

            {/* Product Grid */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-slate-100 p-3">
                {products.map((product) => (
                    <ProductCard key={product.product_id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default AllProductCards;
