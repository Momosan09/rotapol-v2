import { Link } from "react-router-dom";

const middle = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
return(
<>
<h1>Middle</h1>

<form onSubmit={handleSubmit}>
    <input id="pass" type="number"/>
    <button type="submit">A</button>
</form>

</>

);

}
let Pass = document.getElementById("pass");
console.log(Pass);
if(Pass === 1234) console.log("Correcto")


export default middle;
