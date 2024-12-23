import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import banner from '../../assets/banner.jpg'


const Banner = () => {
    return (
        <div>
            {/* Outer container for the banner */}
            <div className='bg-purple-600 relative h-[500px]'> {/* Increased height of the banner */}
                {/* Heading */}
                <h1 className="text-3xl text-center font-bold text-white pt-12">
                Where Innovation Meets Excellence – Welcome to Gadget Heaven
                </h1>
                {/* Paragraph */}
                <p className="text-sm text-center mt-4 text-white">
                Explore cutting-edge gadgets, unbeatable deals, and the latest tech trends. Whether you're upgrading your gear or discovering the newest innovations, Gadget Heaven is your ultimate destination for all things tech.
                </p>

                {/* Shop Now button */}
                <div className="flex justify-center mt-4">

                    <Link to='/dashboard'><button className="btn text-black">Shop Now</button></Link>   
                </div>
            </div>

            {/* Banner image with white border positioned half in and half out of the banner */}
            <div className="flex justify-center -mt-[250px]"> {/* Negative margin to move image upwards */}
                <div className='relative w-full max-w-4xl p-4 border-4 border-white rounded-xl'>
                    <img
                        className='w-full object-cover rounded-lg h-[450px]' 
                        src={banner}
                        alt="Banner"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
