import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';

const Home = () => {
    // Using useLoaderData to load categories dynamically
    const categories = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>Home | Gadget Haven</title>
            </Helmet>
            <div>
                <Banner></Banner>

                {/* Category Buttons */}
                <div className="grid grid-cols-5 gap-2 mt-8">
                    <div className="flex flex-col gap-4 text-center">
                        <Link to="/"><button className="btn w-32">All Products</button></Link>
                        {categories?.map((category) => (
                            <Link key={category.id} to={`/category/${category.category}`}>
                                <button className="btn w-32">{category.category}</button>
                            </Link>
                        ))}
                    </div>

                    {/* Outlet for dynamic product display */}
                    <div className="col-span-4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
