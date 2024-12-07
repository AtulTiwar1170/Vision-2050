import React from 'react';
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Mail,
    MapPin
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Vision 2050</h3>
                    <p className="text-gray-400 mb-4">Empowering learners with future-ready skills in technology and digital innovation.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-blue-300">Courses</a></li>
                        <li><a href="#" className="hover:text-blue-300">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-300">Instructors</a></li>
                        <li><a href="#" className="hover:text-blue-300">Careers</a></li>
                    </ul>
                </div>

                {/* Learning */}
                <div>
                    <h4 className="font-semibold mb-4">Learning</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-blue-300">AI & Machine Learning</a></li>
                        <li><a href="#" className="hover:text-blue-300">Data Science</a></li>
                        <li><a href="#" className="hover:text-blue-300">Digital Marketing</a></li>
                        <li><a href="#" className="hover:text-blue-300">Certification</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-semibold mb-4">Contact</h4>
                    <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2">
                            <Mail size={18} />
                            <span>support@vision2050.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin size={18} />
                            <span>San Francisco, CA, USA</span>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-blue-300"><Facebook /></a>
                        <a href="#" className="hover:text-blue-300"><Twitter /></a>
                        <a href="#" className="hover:text-blue-300"><Linkedin /></a>
                        <a href="#" className="hover:text-blue-300"><Instagram /></a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 mt-8 pt-6 text-center">
                <p className="text-gray-400">
                    © {currentYear} Vision 2050. All Rights Reserved.
                    <span className="ml-4">
                        <a href="#" className="hover:text-blue-300 mr-4">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-300">Terms of Service</a>
                    </span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;