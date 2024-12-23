const Footer = () => {
    return (
        <div>
            <footer className="bg-neutral text-neutral-content p-10">
                <div>
                    <h1 className="text-4xl text-center font-bold">Gadget Heaven</h1>
                    <p className="text-center mt-3 max-w-xs mx-auto">
                        Your one-stop destination for the latest gadgets, reviews, and exclusive deals. Stay ahead with our tech insights, gadget releases, and everything in between.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-evenly mt-5">
                      
                        <div>
                            <ul>
                                <li className="text-2xl font-bold">Gadget Services</li>
                                <li className="link link-hover">Gadget Repairs</li>
                                <li className="link link-hover">Tech Support</li>
                                <li className="link link-hover">Product Setup</li>
                                <li className="link link-hover">Warranty Services</li>
                            </ul>
                        </div>

                        
                        <div>
                            <ul>
                                <li className="text-2xl font-bold">About Gadget Heaven</li>
                                <li className="link link-hover">Our Story</li>
                                <li className="link link-hover">Contact Us</li>
                                <li className="link link-hover">Careers</li>
                                <li className="link link-hover">Press</li>
                            </ul>
                        </div>

                       
                        <div>
                            <ul>
                                <li className="text-2xl font-bold">Legal</li>
                                <li className="link link-hover">Terms of Service</li>
                                <li className="link link-hover">Privacy Policy</li>
                                <li className="link link-hover">Cookie Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
