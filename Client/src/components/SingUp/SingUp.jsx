import { useState } from "react";
import validate from "../../validation";
import { useNavigate } from "react-router-dom";
import style from "./SingUp.module.css"
import { NavLink } from "react-router-dom";
import { allUsers, postUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Swal from 'sweetalert2';

const SingUp = ({ login }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(allUsers())
    }, [dispatch]);

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
        event.preventDefault(); //se evita que la página se recargue al enviar el formulario.
        const errorSave = validate(userData); // se asigna el resultado de la funcion validate, pasandole input como parametro.
        const existName = users.find(user => user.email === userData.email) ? 1 : 0; //si hay alguna actividad con el mismo nombre que el valor ingresado en el campo input.name, existName se establece en 1, de lo contrario, se establece en 0.
        if (existName === 1)  Swal.fire({
            icon: "error",
            title: "Error",
            text: "Ya hay una cuenta con ese email registrado",
            showConfirmButton: false,
            timer: 2000
          });// si hay una actividad con el mismo nombre 
        else if (Object.values(errorSave).length !== 0) alert("Debes completar todos los datos necesarios");//Si el objeto errorSave tiene algún valor (Object.values() convierte el objeto en un array), se muestra una alerta al usuario indicando que deben cumplirse todas las condiciones requeridas. ¡¡¡YA NO ES NECESARIO PORQUE DESHABILITE EL BOTON!!!!
        else {
            dispatch(postUser(userData)) //se despacha la action pasandole como argumento "input", que es un objeto con todo lo necesario para crear una nueva actividad. 
            Swal.fire({
                icon: "success",
                title: "Cuenta creada exitosamente",
                showConfirmButton: false,
                timer: 1500,
            });
            navigate('/')
        }
    }

    return (
        <div className={style.container}>
            <form className={style.form} onSubmit={handleSubmit}>
                <h2>Crear Cuenta</h2>

                <div className={style.text}>
                    <div className={style.content}>
                        <input onChange={handleChange} value={userData.email} name='email' type='email' placeholder="Correo electrónico"></input>
                        {errors.email && <span className={style.error}>{errors.email}</span>}
                    </div>

                    <div className={style.content}>
                        <input onChange={handleChange} value={userData.password} name='password' type='password' placeholder="Contraseña"></input>
                        {errors.password && <span className={style.error}>{errors.password}</span>}
                    </div>
                </div>

                <div>
                    <button className={style.btn} disabled={userData.email === '' || userData.password === ''}>Crear</button>
                </div>

                <div>
                    <NavLink to="/" className={style.account}>
                        <p className={style.p2Login}>¿Ya tienes cuenta? Ingresar</p>
                    </NavLink>
                </div>
            </form>
        </div>
    )
}

export default SingUp;