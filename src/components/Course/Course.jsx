import React from 'react';
import CourseCard from './CourseCard';
import courseInfo from "../../courseInfo";


function Course(props) {
    return (
        <div className="course" id="course">
        <h1 className="section__heading">our courses</h1>
        <h3 className="section__title">upgrade your skills with newest courses</h3>

        <div className="course__container">
            {/* MAP LOOPING */}
            {courseInfo.map(course =><CourseCard courseIcon = {course.courseIcon} courseTitle = {course.courseTitle} courseText = {course.courseText}/>)}
        </div>
    </div>
    );
}

export default Course;