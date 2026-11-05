const root = ReactDOM.createRoot(document.getElementById('root'));

const Student = ({name="Vasya",age}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>age: {age ?? 'unknown'}</p>
        </div>
    )
}
//<p>age: {age ? age :'unknown'}</p>
root.render(
    <>
        <Student   age={20}/>
         <Student  name = {"Peter"} age={30}/>
         <Student  name = {`Mary`} />
    </>
);
// <Student   age=20/>//ERROR

