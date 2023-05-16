import { useState } from "react";
import validate from "../validation";

const Form = ({login}) => {

const [userData,setUserData] = useState({
    email:'',
    password: ''
})

const handleChange = (event) => {
    setUserData({
        ...userData,
        [event.target.name]: event.target.value })

    setErrors(validate({
         ...userData,
         [event.target.name]: event.target.value
    }))    
}

const [errors, setErrors] = useState ({})

const handleSubmit = (event) =>{
    event.preventDefault();
    login(userData);
}

    return (
        <form onSubmit={handleSubmit}>
            <br/>
            <label style={{color:"white"}} htmlFor="email">Email: </label>
            <input onChange={handleChange} value={userData.email} name='email' type='email' placeholder="ingrese su email aqui"></input>
            {errors.email && <p style={{color:"white"}} >{errors.email}</p>}
            <hr/>
            <label style={{color:"white"}} htmlFor="password">Password: </label>
            <input onChange={handleChange} value={userData.password} name='password' type='password' placeholder="ingrese su password aqui"></input>
            {errors.password && <p style={{color:"white"}} >{errors.password}</p>}
            <hr/>
            <button>Submit</button>
        </form>
    )
}

export default Form;