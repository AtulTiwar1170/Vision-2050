import React, { useState } from "react";
import {
    Book,
    Search,
    Award,
    BarChart,
    Play,
    ChevronRight,
} from "lucide-react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDifficulty, setSelectedDifficulty] = useState("");

    const courses = [
        {
            id: 1,
            title: "AI Fundamentals",
            category: "AI",
            instructor: "Dr. Emily Chen",
            level: "Intermediate",
            duration: "12 weeks",
            enrolled: 1250,
            rating: 4.8,
            image: "https://tse2.mm.bing.net/th?id=OIP.skLSi71M3pQg42uTS9vs7QHaE7&pid=Api&P=0&h=180",
            skills: ["Python", "TensorFlow", "Data Analysis"],
            price: 9999,
            popular: true,
            difficulty: "Beginner",
            progress: 65,
            thumbnail: "https://tse2.mm.bing.net/th?id=OIP.skLSi71M3pQg42uTS9vs7QHaE7&pid=Api&P=0&h=180",
            color: "bg-blue-50",
            textColor: "text-blue-800",
            borderColor: "border-blue-300"
        },
        {
            id: 2,
            title: "Advanced Data Science",
            category: "Digital Marketing",
            instructor: "Prof. Alex Rodriguez",
            level: "Beginner",
            duration: "8 weeks",
            enrolled: 980,
            rating: 4.6,
            image: "https://tse2.mm.bing.net/th?id=OIP.f_bKzWXLfknMDgmfvHLx_wHaDe&pid=Api&P=0&h=180",
            skills: ["SEO", "Social Media", "Content Strategy"],
            price: 7999,
            popular: true,
            difficulty: "Advanced",
            progress: 30,
            thumbnail: "https://tse2.mm.bing.net/th?id=OIP.f_bKzWXLfknMDgmfvHLx_wHaDe&pid=Api&P=0&h=180",
            color: "bg-red-50",
            textColor: "text-red-800",
            borderColor: "border-red-300"
        },
        {
            id: 3,
            title: "Digital Marketing Strategies",
            category: "Data Science",
            instructor: "Sarah Kim",
            level: "Advanced",
            duration: "16 weeks",
            enrolled: 750,
            rating: 4.9,
            image: "https://tse3.mm.bing.net/th?id=OIP.UpgpHc-ZzXLJREotRpnjCwHaE6&pid=Api&P=0&h=180",
            skills: ["Python", "Pandas", "SQL", "Statistics"],
            price: 12999,
            popular: false,
            difficulty: "Intermediate",
            progress: 45,
            thumbnail: "https://tse3.mm.bing.net/th?id=OIP.UpgpHc-ZzXLJREotRpnjCwHaE6&pid=Api&P=0&h=180",
            color: "bg-green-50",
            textColor: "text-green-800",
            borderColor: "border-green-300"
        },
        {
            id: 4,
            title: "Blockchain Technology",
            category: "Technology",
            instructor: "Michael Wong",
            level: "Advanced",
            duration: "10 weeks",
            enrolled: 500,
            rating: 4.5,
            image: "https://tse4.mm.bing.net/th?id=OIP.5esIL8KQOFKIPGSvtySfqAHaE8&pid=Api&P=0&h=180",
            skills: ["Blockchain", "Cryptocurrency", "Smart Contracts"],
            price: 8999,
            popular: false,
            difficulty: "Advanced",
            progress: 20,
            thumbnail: "https://tse4.mm.bing.net/th?id=OIP.5esIL8KQOFKIPGSvtySfqAHaE8&pid=Api&P=0&h=180",
            color: "bg-purple-50",
            textColor: "text-purple-800",
            borderColor: "border-purple-300"
        },
        {
            id: 5,
            title: "UX Design Principles",
            category: "Design",
            instructor: "Lisa Martinez",
            level: "Intermediate",
            duration: "8 weeks",
            enrolled: 650,
            rating: 4.7,
            image: "https://tse1.mm.bing.net/th?id=OIP.fy5YNFw-i89nr-BGil6jQQAAAA&pid=Api&P=0&h=180",
            skills: ["UI Design", "User Research", "Wireframing"],
            price: 6999,
            popular: false,
            difficulty: "Intermediate",
            progress: 55,
            thumbnail: "https://tse1.mm.bing.net/th?id=OIP.fy5YNFw-i89nr-BGil6jQQAAAA&pid=Api&P=0&h=180",
            color: "bg-orange-50",
            textColor: "text-orange-800",
            borderColor: "border-orange-300"
        },
        {
            id: 6,
            title: "Cloud Computing Essentials",
            category: "Cloud Technology",
            instructor: "David Kim",
            level: "Beginner",
            duration: "6 weeks",
            enrolled: 900,
            rating: 4.4,
            image: "https://tse3.mm.bing.net/th?id=OIP.MdMRN16zhm3gNoB6It677gHaEc&pid=Api&P=0&h=180",
            skills: ["AWS", "Cloud Architecture", "Networking"],
            price: 5999,
            popular: true,
            difficulty: "Beginner",
            progress: 40,
            thumbnail: "https://tse3.mm.bing.net/th?id=OIP.MdMRN16zhm3gNoB6It677gHaEc&pid=Api&P=0&h=180",
            color: "bg-teal-50",
            textColor: "text-teal-800",
            borderColor: "border-teal-300"
        }
    ];

    const filteredCourses = courses.filter(
        (course) =>
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedDifficulty === "" || course.difficulty === selectedDifficulty)
    );

    return (
        <>
        <Navbar/>
        <div className="bg-gray-50 min-h-screen py-6  w-full">
            
            <header className="flex justify-between items-center mb-8 w-full px-12">
                
                <div className="flex space-x-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search courses..."
                            className="w-96 px-4 py-2 border rounded-lg pl-10 focus:ring-2 focus:ring-indigo-300"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute left-3 top-3 text-gray-400 " size={20} />
                    </div>
                    <select
                        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-300 w-48 text-slate-400 "
                        value={selectedDifficulty}
                        onChange={(e) => setSelectedDifficulty(e.target.value)}
                    >
                        <option value="">All Levels</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>
            </header>

            <main className="grid grid-cols-4 gap-6 px-12">
                {filteredCourses.map((course) => (
                    <div
                        key={course.id}
                        className={`rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow ${course.color} border ${course.borderColor} w-86`}
                    >
                        <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className={`text-xl font-semibold mb-2 ${course.textColor}`}>
                                {course.title}
                            </h2>
                            <p className="text-gray-600 mb-2">{course.instructor}</p>
                            <div className="flex justify-between items-center mb-4">
                                <span
                                    className={`
                  px-2 py-1 rounded-full text-xs font-bold
                  ${course.difficulty === "Beginner"
                                            ? "bg-green-100 text-green-800"
                                            : course.difficulty === "Intermediate"
                                                ? "bg-yellow-100 text-yellow-800"
                                                : "bg-red-100 text-red-800"
                                        }
                `}
                                >
                                    {course.difficulty}
                                </span>
                                <div className="flex items-center space-x-2">
                                    <BarChart size={16} className="text-blue-500" />
                                    <span>{course.progress}% Complete</span>
                                </div>
                            </div>
                            {/* <button
                                className={`w-full flex items-center justify-center text-white py-2 rounded-lg hover:opacity-90 transition ${course.textColor.replace(
                                    "text-",
                                    "bg-"
                                )}`}
                            >
                                Continue Learning <ChevronRight className="ml-2" size={20} />
                            </button> */}
                            <button
    onClick={() => {
        // Navigate to the course details page
        // This assumes you're using React Router
        navigate(`/user/course/${course.id}`);
    }}
    className={`w-full flex items-center justify-center text-white py-2 rounded-lg hover:opacity-90 transition ${course.textColor.replace(
        "text-",
        "bg-"
    )}`}
>
    Continue Learning <ChevronRight className="ml-2" size={20} />
</button>
                        </div>
                    </div>
                ))}
            </main>
            <div className="mt-12 bg-white rounded-lg shadow-md p-6 px-12">
                <h3 className="text-xl font-semibold mb-4">Recommended Courses</h3>
                <div className="grid grid-cols-3 gap-4">
                    {courses.slice(0, 3).map(course => (
                        <div
                            key={course.id}
                            className="flex items-center space-x-4 bg-gray-100 p-3 rounded-lg"
                        >
                            <Play className="text-blue-600" size={24} />
                            <div>
                                <h4 className="font-medium">{course.title}</h4>
                                <p className="text-sm text-gray-600">{course.instructor}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
</>
    );
};

export default Dashboard;
