
// import { Home } from 'lucide-react'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import AllCourses from './Pages/All-Courses'
import Profile from './Pages/Profile'
import { Routes, Route} from 'react-router-dom'
import CourseDetails from './Pages/courseDetailPage'



function App() {


  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/dashboard" element={<Dashboard/>}/>
          <Route path="/allCourses" element={<AllCourses/>}/>
          <Route path="/user/profile" element={<Profile/>}/>
          <Route path='/user/course/:courseId' element={<CourseDetails/>}/>

          
          
        </Routes>
      
    </>
  )
}

export default App
