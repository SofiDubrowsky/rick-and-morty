import { useState } from "react";
import validate from "../../validation";
import { useNavigate } from "react-router-dom";
import style from "./Form.module.css"
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2';

const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const [errors, setErrors] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)

        Swal.fire({
            icon: "success",
            title: "Inicio de sesión exitoso",
            showConfirmButton: false,
            timer: 2000,
        });
    }

    return (
        <div className={style.container}>
            <form className={style.form} onSubmit={handleSubmit}>
                <h2>Inicia sesión</h2>

                <div className={style.text}>
                    <div className={style.content}>
                        <input onChange={handleChange} value={userData.email} name='email' type='email' placeholder="ingrese su email aqui"></input>
                        {errors.email && <span className={style.error}>{errors.email}</span>}
                    </div>

                    <div className={style.content}>
                        <input onChange={handleChange} value={userData.password} name='password' type='password' placeholder="ingrese su password aqui"></input>
                        {errors.password && <span className={style.error}>{errors.password}</span>}
                    </div>
                </div>

                <div>
                    <button className={style.btn} disabled={userData.email === '' || userData.password === ''}>Acceder</button>
                </div>

                <div>
                    <NavLink to="/SingUp" className={style.account}>
                        <p className={style.p2Login}>¿Aún no tienes cuenta?</p>
                    </NavLink>
                </div>
            </form>
        </div>
    )
}

export default Form;