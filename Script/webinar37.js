const root = ReactDOM.createRoot(document.getElementById("root"));

const student = {
    name: "Otto",
    age: 25,
    course: "Frontend Development"
};
const student1 = {
    name: "John",
    age: 17,
    course: "Frontend Development"
};
const student2 = {
    name: "Sarah",
    age: 22,
    course: "Software Development"
}

function Student(props){
    return (
        <div className="student-card">
            <p>Name: {props.student.name} </p>
            <p>Date of Birth: {props.student.age} </p>
            <p>Status: {props.student.age >=18 ? "Adult" : "Teen"}</p>
            <p>Course: {props.student.course} </p>
        </div>
    )
}



root.render(
    <div className="container">
        <h1 style={{color: "darkblue", fontSize: "48px"}}>Information about student!</h1>
        <Student student ={student}/>
        <Student student ={student1}/>
        <Student student ={student2}/>
    </div>);