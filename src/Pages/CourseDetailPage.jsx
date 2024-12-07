import React, { useState } from 'react';
import {
    Book,
    Clock,
    Users,
    Award,
    ChevronLeft
} from 'lucide-react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { useParams } from 'react-router';

const CourseDetails = () => {
    const { courseId } = useParams()
    // Default course in case no course is passed (for demonstration)
    const defaultCourse = {
        id: 1,
        title: "AI Fundamentals",
        instructor: "Dr. Emma Chen",
        difficulty: "Beginner",
        description: "A comprehensive introduction to Artificial Intelligence concepts, covering machine learning, neural networks, and practical applications.",
        duration: "6 weeks",
        enrolled: 1024,
        videoUrl: "/api/placeholder/video", // Replace with actual video URL
        curriculum: [
            "Introduction to AI",
            "Machine Learning Basics",
            "Neural Networks",
            "Deep Learning Techniques",
            "AI Ethics and Considerations",
            "Practical AI Projects"
        ]
    };


        const coursesData = [
            {
                id: 1,
                title: "AI Fundamentals",
                instructor: "Dr. Emma Chen",
                difficulty: "Beginner",
                progress: 65,
                thumbnail: "/api/placeholder/300/200",
                color: "bg-blue-50",
                textColor: "text-blue-800",
                borderColor: "border-blue-300",
                description: "A comprehensive introduction to Artificial Intelligence concepts, covering machine learning, neural networks, and practical applications.",
                duration: "6 weeks",
                enrolled: 1024,
                videoUrl: "/api/placeholder/video",
                curriculum: [
                    "Introduction to AI",
                    "Machine Learning Basics", 
                    "Neural Networks",
                    "Deep Learning Techniques", 
                    "AI Ethics and Considerations",
                    "Practical AI Projects"
                ]
            },
            {
                id: 2,
                title: "Advanced Data Science",
                instructor: "Prof. Alex Rodriguez",
                difficulty: "Advanced",
                progress: 30,
                thumbnail: "/api/placeholder/300/200",
                color: "bg-red-50",
                textColor: "text-red-800",
                borderColor: "border-red-300",
                description: "An in-depth exploration of advanced data science techniques, including predictive modeling, big data analytics, and machine learning algorithms.",
                duration: "8 weeks",
                enrolled: 756,
                videoUrl: "/api/placeholder/video",
                curriculum: [
                    "Advanced Statistical Methods",
                    "Predictive Modeling",
                    "Big Data Technologies",
                    "Machine Learning Algorithms",
                    "Data Visualization Techniques",
                    "Capstone Data Science Project"
                ]
            },
            {
                id: 3,
                title: "Digital Marketing Strategies",
                instructor: "Sarah Kim",
                difficulty: "Intermediate",
                progress: 45,
                thumbnail: "/api/placeholder/300/200",
                color: "bg-green-50",
                textColor: "text-green-800",
                borderColor: "border-green-300",
                description: "Comprehensive course on modern digital marketing techniques, covering social media, content strategy, and data-driven marketing approaches.",
                duration: "5 weeks",
                enrolled: 1200,
                videoUrl: "/api/placeholder/video",
                curriculum: [
                    "Fundamentals of Digital Marketing",
                    "Social Media Marketing",
                    "Content Strategy",
                    "SEO and SEM",
                    "Analytics and Performance Tracking",
                    "Digital Marketing Campaign Design"
                ]
            },
            {
                id: 4,
                title: "Blockchain Technology",
                instructor: "Michael Wong",
                difficulty: "Advanced",
                progress: 20,
                thumbnail: "/api/placeholder/300/200",
                color: "bg-purple-50",
                textColor: "text-purple-800",
                borderColor: "border-purple-300",
                description: "Deep dive into blockchain technology, cryptocurrencies, smart contracts, and decentralized applications (DApps).",
                duration: "7 weeks",
                enrolled: 512,
                videoUrl: "/api/placeholder/video",
                curriculum: [
                    "Blockchain Fundamentals",
                    "Cryptocurrency Basics",
                    "Smart Contracts Development",
                    "Ethereum and Solidity",
                    "Decentralized Applications",
                    "Blockchain Security and Governance"
                ]
            },
            {
                id: 5,
                title: "UX Design Principles",
                instructor: "Lisa Martinez",
                difficulty: "Intermediate",
                progress: 55,
                thumbnail: "/api/placeholder/300/200",
                color: "bg-orange-50",
                textColor: "text-orange-800",
                borderColor: "border-orange-300",
                description: "Comprehensive UX design course covering user research, interface design, usability testing, and user-centered design principles.",
                duration: "6 weeks",
                enrolled: 945,
                videoUrl: "/api/placeholder/video",
                curriculum: [
                    "Introduction to UX Design",
                    "User Research Methods",
                    "Wireframing and Prototyping",
                    "Interface Design Principles",
                    "Usability Testing",
                    "Design Thinking Workshop"
                ]
            },
            {
                id: 6,
                title: "Cloud Computing Essentials",
                instructor: "David Kim",
                difficulty: "Beginner",
                progress: 40,
                thumbnail: "/api/placeholder/300/200",
                color: "bg-teal-50",
                textColor: "text-teal-800",
                borderColor: "border-teal-300",
                description: "Foundational course in cloud computing, covering major cloud platforms, infrastructure, services, and best practices.",
                duration: "5 weeks",
                enrolled: 1350,
                videoUrl: "/api/placeholder/video",
                curriculum: [
                    "Cloud Computing Fundamentals",
                    "AWS Basics",
                    "Azure Services",
                    "Google Cloud Platform",
                    "Cloud Security",
                    "Deployment and Scaling Strategies"
                ]
            }
        
    ];
    const currentCourseId = coursesData.find(course => course.id === parseInt(courseId));

    const currentCourse = currentCourseId || defaultCourse;

    return (
        <>
            <Navbar />
            <div className="flex min-h-screen bg-gray-50">

                {/* Left Section: Video Player */}
                <div className="w-2/3 p-8 bg-black">
                    <div className="sticky top-0">
                        <video
                            controls
                            className="w-full rounded-lg shadow-xl"
                            src={currentCourse.videoUrl}
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                {/* Right Section: Course Details */}
                <div className="w-1/3 p-8 bg-white overflow-y-auto">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 mb-6">
                            <ChevronLeft className="text-gray-600 cursor-pointer" size={24} />
                            <h1 className="text-2xl font-bold">{currentCourse.title}</h1>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <Book className="text-blue-600" size={24} />
                                <div>
                                    <p className="font-semibold">Instructor</p>
                                    <p className="text-gray-600">{currentCourse.instructor}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <Award className="text-green-600" size={24} />
                                <div>
                                    <p className="font-semibold">Difficulty</p>
                                    <p className="text-gray-600">{currentCourse.difficulty}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <Clock className="text-purple-600" size={24} />
                                <div>
                                    <p className="font-semibold">Duration</p>
                                    <p className="text-gray-600">{currentCourse.duration}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <Users className="text-orange-600" size={24} />
                                <div>
                                    <p className="font-semibold">Enrolled Students</p>
                                    <p className="text-gray-600">{currentCourse.enrolled}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-xl font-semibold mb-4">Course Description</h2>
                            <p className="text-gray-700">{currentCourse.description}</p>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-xl font-semibold mb-4">Curriculum</h2>
                            <ul className="space-y-2 text-gray-700">
                                {currentCourse.curriculum.map((item, index) => (
                                    <li key={index} className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6 flex space-x-4">
                            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                                Start Course
                            </button>
                            <button className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition">
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CourseDetails;