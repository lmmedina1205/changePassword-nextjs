"use client";

import {  useState } from "react";
import { useForm } from "react-hook-form";
import validation from "./validation";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

// const MySwal = withReactContent(Swal);

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
    //   toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });



export default function ChangePassword(){
    const { register, handleSubmit} = useForm();
    const [state, setState ] = useState({
        status: true,
        msg: ""
      });
      const [ hidden, setHidden ] = useState(true);
    const handledata = (data:any)=>{
        const { password, confirmPassword } = data
        let newData = validation(password, confirmPassword)
        setState(newData);
        if(newData.status){
            Swal.fire({
                title: newData.msg,
                text: "Cambio de Contraseña exitoso!",
                icon: "success"
              });
        }else{
            Toast.fire({
                icon: "error",
                title: newData.msg
            })
        }
    }
    return(

    <div className="">

        <form onSubmit={handleSubmit(data => {handledata(data)})}>

            <h1>Cambio de Contraseña</h1> <br />

            {/* passwords */}
            <label htmlFor="password">Contraseña&nbsp;&nbsp;<span onClick={()=> setHidden(hidden ? false : true) }>{(hidden ? <FaEyeSlash /> : <FaEye />)}</span></label>
            <input type={hidden ? "password":"text"} id="password" className="form-control form-control-sm"
            {...register('password')}
            />

            {/* confirm passwords */}
            <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
            <input type={hidden ? "password":"text"} id="confirmPassword" className="form-control form-control-sm"
            {...register('confirmPassword')}
            />
            

            {/* submit form */}
            <button className="btn btn-primary" type="submit">
            Cambiar
            </button>

        </form>

        {/* <h2 className={ (state.status ? "success":"wrong") } > {state.msg} </h2> */}

    </div>

)}