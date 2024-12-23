import { useLoaderData, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const CategoryProducts = () => {
    const data = useLoaderData();  // Loaded products data from loader
    const { category } = useParams();  // Get the category parameter from the URL
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Filter products based on category
        const filteredByCategory = data.filter((product) => product.category === category);
        setFilteredProducts(filteredByCategory);
    }, [category, data]);  // Re-run effect when category or data changes

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-3">  {/* Adjusted gap between cards */}
            {filteredProducts.map((product) => (
                <ProductCard key={product.product_id} product={product} />
            ))}
        </div>
    );
};

export default CategoryProducts;
