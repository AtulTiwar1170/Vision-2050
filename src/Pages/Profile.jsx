import React, { useState } from 'react';
import { 
  User, 
  BookOpen, 
  Award, 
  Clock, 
  Settings, 
  CheckCircle 
} from 'lucide-react';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [userProfile] = useState({
    name: 'Atul Tiwari',
    email: 'atul.martinez@example.com',
    profileImage: 'https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&P=0&h=180',
    totalCourses: 6,
    completedCourses: 0,
    learningHours: "Not Calc."
  });

  const courses = [
    {
      id: 1,
      title: 'AI Fundamentals',
      progress: 65,
      instructor: 'Dr. Emily Chen',
      status: 'In Progress',
      certificate: false
    },
    {
      id: 2,
      title: 'Advanced Data Science',
      progress: 30,
      instructor: 'Prof. Alex Rodriguez',
      status: 'In Progress',
      certificate: false
    },
    {
      id: 3,
      title: 'Digital Marketing Strategies',
      progress: 45,
      instructor: 'Sarah Kim',
      status: 'In Progress',
      certificate: false
    },
    {
      id: 4,
      title: 'Blockchain Technology',
      progress: 20,
      instructor: 'Michael Wong',
      status: 'In Progress',
      certificate: false
    },
    {
      id: 5,
      title: 'UX Design Principles',
      progress: 55,
      instructor: 'Lisa Martinez',
      status: 'In Progress',
      certificate: false
    },
    {
      id: 6,
      title: 'Cloud Computing Essentials',
      progress: 40,
      instructor: 'David Kim',
      status: 'In Progress',
      certificate: false
    },
  ];

  const certifications = [
    {
      // id: 1,
      // title: 'Data Science Certification',
      // issuer: 'Vision 2050',
      // date: 'June 2024',
      // verified: false
    }
  ];

  return (
    <>
    <Navbar/>
    
    <div className="container mx-auto px-4 py-8">
        
      <div className="grid md:grid-cols-3 gap-8">
        {/* Profile Sidebar */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="relative inline-block mb-4">
            <img 
              src={userProfile.profileImage} 
              alt={userProfile.name}
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-indigo-100"
            />
            <div className="absolute bottom-0 right-0 bg-green-500 text-white rounded-full p-1">
              <CheckCircle size={20} />
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-4">{userProfile.name}</h2>
          <p className="text-gray-600">{userProfile.email}</p>
          
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="font-bold text-xl">{userProfile.totalCourses}</p>
              <p className="text-gray-600 text-sm">Courses</p>
            </div>
            <div>
              <p className="font-bold text-xl">{userProfile.completedCourses}</p>
              <p className="text-gray-600 text-sm">Completed</p>
            </div>
            <div>
              <p className="font-bold text-xl">{userProfile.learningHours}</p>
              <p className="text-gray-600 text-sm">Hours</p>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-md">
          {/* Tabs */}
          <div className="border-b flex">
            {[
              { key: 'courses', icon: <BookOpen />, label: 'My Courses' },
              { key: 'certifications', icon: <Award />, label: 'Certifications' },
              { key: 'settings', icon: <Settings />, label: 'Settings' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`
                  flex items-center space-x-2 px-4 py-3 
                  ${activeTab === tab.key 
                    ? 'border-b-2 border-indigo-600 text-indigo-600' 
                    : 'text-gray-600 hover:bg-gray-50'}
                `}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Courses Tab */}
          {activeTab === 'courses' && (
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">My Learning Journey</h3>
              {courses.map((course) => (
                <div 
                  key={course.id} 
                  className="border-b py-4 last:border-b-0 hover:bg-gray-50 transition"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">{course.title}</h4>
                      <p className="text-gray-600 text-sm">{course.instructor}</p>
                    </div>
                    <div className="text-right">
                      <span 
                        className={`
                          text-xs px-2 py-1 rounded-full 
                          ${course.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'}
                        `}
                      >
                        {course.status}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-indigo-600 h-2.5 rounded-full" 
                        style={{width: `${course.progress}%`}}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-600 mt-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Earned Certifications</h3>
              {certifications.map((cert) => (
                <div 
                  key={cert.id} 
                  className="border rounded-lg p-4 mb-4 flex items-center"
                >
                  <Award className="text-green-600 mr-4" size={40} />
                  <div className="flex-grow">
                    <h4 className="font-semibold">{cert.title}</h4>
                    <p className="text-gray-600">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.date}</p>
                  </div>
                  {cert.verified && (
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="mr-2" size={20} />
                      <span className="text-sm">Verified</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    defaultValue={userProfile.name}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    defaultValue={userProfile.email}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                >
                  Save Changes
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default UserProfile;