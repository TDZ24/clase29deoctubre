import { useState } from "react";
import {useForm} from "react-hook-form"

export default function User(){
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [inputs, setInputs] = useState([]);
    // Metodo par realizar las validaciones cuando se haga enviar
    const onSubmit = (data, e) => {
        console.log(data);
        setInputs([
            ...inputs,
            data
        ])
        alert("Datos Correctos..");
        e.target.reset()

        // limpiar campos
        /*alert("Datos correctos ...");
        e.target.reset();*/
    }
    return(
        <div className="container">
            <h1>Formulario React con Validaciones</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Nombres</label>
                <input
                    {...register('name', 
                            { //reglas de validacion para el imput 
                                required:true,
                                maxLength:50,
                                minLength:3,
                                pattern: /^[A-Za-zÑñáéíóúÁÉÍÓÚ ]+$/i 
                    })}
                    name="name"
                    className="form-control my-2"
                    placeholder="Ingrese Nombre"
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors.name?.type === 'required' && "Nombre es obligatorio"}
                    {errors.name?.type === 'maxLength' && "Debe ser inferior o igual a 50 chars"}
                    {errors.name?.type === 'minLength' && "Debe ser superior a 3 chars"}
                    {errors.name?.type === 'pattern' && "Solo letras y/o espacios"}
                </span>
                
                <label>Apellidos</label>
                <input
                    {...register('lastname', 
                            {
                                required:true,
                                maxLength:50,
                                minLength:3,
                                pattern: /^[A-Za-zzÑñáéíóúÁÉÍÓÚ]+$/i
                    })}
                    name="lastname"
                    className="form-control my-2"
                    placeholder="Ingrese Apellidos"
                ></input>
                
                <span className="text-danger text-small d-block mb-2">
                    {errors.lastname?.type === 'required' && "Apellidos es obligatorio"}
                    {errors.lastname?.type === 'maxLength' && "Debe ser inferior o igual a 50 chars"}
                    {errors.lastname?.type === 'minLength' && "Debe ser superior a 3 chars"}
                    {errors.lastname?.type === 'pattern' && "Solo letras y/o espacios"}
                </span>

                <label>Correo Electrónico</label>
                <input
                    {...register('email', 
                            {
                                required:true,
                                maxLength:100,
                                minLength:10,
                                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })}
                    name="email"
                    className="form-control my-2"
                    placeholder="Ingrese Email"
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors.email?.type === 'required' && "Email es obligatorio"}
                    {errors.email?.type === 'maxLength' && "Debe ser inferior o igual a 100 chars"}
                    {errors.email?.type === 'minLength' && "Debe ser superior a 10 chars"}
                    {errors.email?.type === 'pattern' && "Email Inválido"}
                </span>
                
                <label>Contraseña</label>
                <input
                    {...register('Contraseña', 
                            {
                                required:true,
                                maxLength:15,
                                minLength:8,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/i
                    })}
                    name="Contraseña"
                    type="password"
                    className="form-control my-2"
                    placeholder="Ingrese su Contraseña"
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors.Contraseña?.type === 'required' && "Su contraseña es obligatoria"}
                    {errors.Contraseña?.type === 'minLength' && "Debe ser superior a 8 caracteres"}
                    {errors.Contraseña?.type === 'maxLength' && "Debe ser inferior a 15 caracteres"}
                </span>

                <label>EDAD</label>
                <input
                    {...register('age', 
                            {
                                required:true,
                                pattern: /^[0-9]+$/,
                                min: 18,
                                max:35
                                
                    })}
                    name="age"
                    type="text"
                    className="form-control my-2"
                    placeholder="Ingrese su Edad"
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors.age?.type === 'required' && "Su edad es obligatoria"}
                    {errors.age?.type === 'min' && "Debe ser Mayor a 18 años"}
                    {errors.age?.type === 'max' && "Debe ser Menor a 35 años"}
                </span>
                <button 
                    type="submit" 
                    className="btn btn-primary my-2"
                    >
                Agregar
                </button>
            </form>
            {/* <ul className="mt-2">
                {
                    inputs.map((item, index) =>
                        <li key={index}>
                            {item.name} - {item.lastname}
                        </li>
                    )
                }
            </ul> */}
        </div>

    )
}