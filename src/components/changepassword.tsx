"use client";

import {  useState } from "react";
import { useForm } from "react-hook-form";
import validation from "./validation";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

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
    const handledata = (data:any)=>{
        const { password, confirmPassword } = data
        let newData = validation(password, confirmPassword)
        setState(newData);
        Toast.fire({
            icon: (newData.status ? "success" : "error"),
            title: newData.msg
        })
    }
    return(

    <div className="">

        <form onSubmit={handleSubmit(data => {handledata(data)})}>

            <h1>Cambio de Contraseña</h1> <br />

            {/* passwords */}
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control form-control-sm"
            {...register('password')}
            />

            {/* confirm passwords */}
            <label htmlFor="password">Confirm Password</label>
            <input type="password" id="confirmPassword" className="form-control form-control-sm"
            {...register('confirmPassword')}
            />

            {/* submit form */}
            <button className="btn btn-primary" type="submit">
            Submit
            </button>

        </form>

        {/* <h2 className={ (state.status ? "success":"wrong") } > {state.msg} </h2> */}

    </div>

)}