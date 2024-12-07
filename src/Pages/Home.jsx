import React, { useState } from 'react';
import {
    BookOpen,
    Users,
    Award,
    Zap,
    Play,
    TrendingUp
} from 'lucide-react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Link, Outlet } from 'react-router-dom'

const HomePage = () => {
    const [email, setEmail] = useState('');

    const featuredCourses = [
        {
            icon: <Zap className="text-blue-600" size={32} />,
            title: 'AI & Machine Learning',
            description: 'Master cutting-edge AI technologies and algorithms'
        },
        {
            icon: <TrendingUp className="text-green-600" size={32} />,
            title: 'Data Science Mastery',
            description: 'Transform data into actionable insights'
        },
        {
            icon: <Users className="text-purple-600" size={32} />,
            title: 'Digital Marketing',
            description: 'Develop strategic digital marketing skills'
        }
    ];

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement email signup logic
        alert('Thank you for subscribing!');
    };

    return (

        <>
        <Navbar/>
        
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-indigo-900 text-white py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6">Shaping Tomorrow's Leaders with Skills of Today</h1>
                    <p className="text-xl mb-8">Discover future-ready courses in AI, Data Science, and Digital Marketing</p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                        <Link to="/allCourses">Explore Courses</Link>
                        </button>
                        <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600">
                            Free Trial
                        </button>
                    </div>
                </div>
            </section>

            {/* Featured Courses */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Most Popular Courses</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {featuredCourses.map((course, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
                            >
                                {course.icon}
                                <h3 className="text-xl font-semibold mt-4 mb-2">{course.title}</h3>
                                <p className="text-gray-600">{course.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="bg-blue-50 py-16 px-6">
                <div className="max-w-xl mx-auto text-center">
                    <Award className="mx-auto text-blue-600 mb-6" size={48} />
                    <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h2>
                    <p className="text-gray-700 mb-8">Subscribe to our newsletter and get exclusive learning opportunities</p>
                    <form onSubmit={handleEmailSubmit} className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow px-4 py-3 rounded-l-lg border focus:ring-2 focus:ring-blue-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
        <Footer/>
        </>
    );
};

export default HomePage;