import React from "react";
import TeacherCard from "./TeacherCard";
import teacherInfo from "../../teacherInfo";


function Teacher(props){
    return(
        <section className="teacher" id="teacher">
        <h1 className="section__heading">our teacher</h1>
        <h3 className="section__title">meet professional trainers</h3>

        <div className="teacher__container">
            {/* MAP LOOPING WITH ARROW FUNCTION */}
            {teacherInfo.map(teacher => 
            <TeacherCard tImage = {teacher.tImage} tName = {teacher.tName} tText = {teacher.tText} />)}
        </div>
    </section>
    );
}


export default Teacher;