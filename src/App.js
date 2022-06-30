import logo from './logo.svg';
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Teacher from "./components/Teacher/Teacher";
import Course from "./components/Course/Course";
import Review from "./components/Review/Review";
import Contact from "./components/Contact/Contact";



function App() {
    return(
        <div className="App">
            <Header />
            <Routes>
                 <Route path="/" element={<Home/>}/>
                 <Route path="/about" element={<About/>}/>
                 <Route path="/teacher" element={<Teacher/>}/>
                 <Route path="/course" element={<Course/>}/>
                 <Route path="/review" element={<Review/>}/>
                 <Route path="/contact" element={<Contact/>}/>
            </Routes>  
        </div>
    )
}

export default App;