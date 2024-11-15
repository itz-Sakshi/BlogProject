import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
    return (
        <section className="relative py-5 bg-[#2D7D64] border-t-2 border-[#E8E8E8] h-[35vh] w-full overflow-y-hidden">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* Logo Section */}
                    <div className="w-full md:w-1/4 p-4">
                        <div className="flex flex-col h-full justify-between">
                            <div className="mb-2">
                                <Logo width="100px" />
                            </div>
                            <p className="text-sm text-[#E8E8E8] mt-2">
                                &copy; 2023. All Rights Reserved by DevUI.
                            </p>
                        </div>
                    </div>
                    {/* Company Links */}
                    <div className="w-full md:w-1/4 lg:w-2/12 p-4">
                        <h3 className="text-xs font-semibold uppercase text-[#E8E8E8] mb-4">
                            Company
                        </h3>
                        <ul>
                            {['Features', 'Pricing', 'Affiliate Program', 'Press Kit'].map((item, index) => (
                                <li key={index} className="mb-2">
                                    <Link
                                        className="text-sm font-medium text-[#E8E8E8] hover:underline"
                                        to="/"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Support Links */}
                    <div className="w-full md:w-1/4 lg:w-2/12 p-4">
                        <h3 className="text-xs font-semibold uppercase text-[#E8E8E8] mb-4">
                            Support
                        </h3>
                        <ul>
                            {['Account', 'Help', 'Contact Us', 'Customer Support'].map((item, index) => (
                                <li key={index} className="mb-2">
                                    <Link
                                        className="text-sm font-medium text-[#E8E8E8] hover:underline"
                                        to="/"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Legal Links */}
                    <div className="w-full md:w-1/4 lg:w-3/12 p-4">
                        <h3 className="text-xs font-semibold uppercase text-[#E8E8E8] mb-4">
                            Legals
                        </h3>
                        <ul>
                            {['Terms & Conditions', 'Privacy Policy', 'Licensing'].map((item, index) => (
                                <li key={index} className="mb-2">
                                    <Link
                                        className="text-sm font-medium text-[#E8E8E8] hover:underline"
                                        to="/"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
