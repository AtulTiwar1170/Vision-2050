import React, { useState } from 'react';
import { Search, Clock, Star, ChevronRight, Users } from 'lucide-react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';


const AllCoursesPage = () => {
    // Sample courses data - would come from API in production
    const [courses, setCourses] = useState([
        {
            id: 1,
            title: "AI Fundamentals",
            category: "AI",
            instructor: "Dr. Emma Chen",
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
            thumbnail: "/api/placeholder/300/200",
            color: "bg-teal-50",
            textColor: "text-teal-800",
            borderColor: "border-teal-300"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedLevel, setSelectedLevel] = useState('All');

    const categories = ['All', 'AI', 'Data Science', 'Digital Marketing'];
    const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

    // Filter courses based on search and filters
    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
        const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;

        return matchesSearch && matchesCategory && matchesLevel;
    });

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-50">

                {/* Header Section */}
                <div className="bg-indigo-900 text-white p-8">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl font-bold mb-4">Future-Ready Courses</h1>
                        <p className="text-xl mb-6">Shaping Tomorrow's Leaders with Skills of Today</p>

                        {/* Search Bar */}
                        <div className="relative max-w-2xl">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search courses or instructors..."
                                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto p-6">
                    {/* Filters Section */}
                    <div className="mb-8 flex flex-wrap gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Category</label>
                            <select
                                className="p-2 border rounded-md"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Level</label>
                            <select
                                className="p-2 border rounded-md"
                                value={selectedLevel}
                                onChange={(e) => setSelectedLevel(e.target.value)}
                            >
                                {levels.map(level => (
                                    <option key={level} value={level}>{level}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Popular Courses Section */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">Popular Courses</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCourses.filter(course => course.popular).map(course => (
                                <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <span className="inline-block px-2 py-1 text-sm text-blue-600 bg-blue-100 rounded-full mb-2">
                                            {course.category}
                                        </span>
                                        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                            <Users className="w-4 h-4" />
                                            <span>{course.enrolled.toLocaleString()} enrolled</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                            <Clock className="w-4 h-4" />
                                            <span>{course.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                                            <Star className="w-4 h-4 text-yellow-400" />
                                            <span>{course.rating}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {course.skills.map(skill => (
                                                <span key={skill} className="px-2 py-1 text-xs bg-gray-100 rounded-full">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-bold">&#8377;{course.price}</span>
                                            <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
                                                Learn More
                                                <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* All Courses Section */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">All Courses</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCourses.map(course => (
                                <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <span className="inline-block px-2 py-1 text-sm text-blue-600 bg-blue-100 rounded-full mb-2">
                                            {course.category}
                                        </span>
                                        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                            <Users className="w-4 h-4" />
                                            <span>{course.enrolled.toLocaleString()} enrolled</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                            <Clock className="w-4 h-4" />
                                            <span>{course.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                                            <Star className="w-4 h-4 text-yellow-400" />
                                            <span>{course.rating}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {course.skills.map(skill => (
                                                <span key={skill} className="px-2 py-1 text-xs bg-gray-100 rounded-full">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-bold">&#8377;{course.price}</span>
                                            <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
                                                Learn More
                                                <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default AllCoursesPage;