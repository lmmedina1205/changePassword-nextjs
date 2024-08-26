"use client";

import {  useState } from "react";
import { useForm } from "react-hook-form";
import validation from "./validation";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FaArrowRightFromBracket, FaEye, FaEyeSlash } from "react-icons/fa6";

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

<div className="container-fluid ps-md-0">
  <div className="row g-0">
    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" id="bg-image"></div>
    <div className="col-md-8 col-lg-6">
      <div className="login d-flex align-items-center py-5" id="login">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto">
              <h4 className="login-heading mb-4" id="login-heading">!Cambio de Contraseña!&nbsp;&nbsp;<span onClick={()=> setHidden(hidden ? false : true) }>{(hidden ? <FaEyeSlash /> : <FaEye />)}</span></h4>
                <form onSubmit={handleSubmit(data => {handledata(data)})}>
                    <div className="form-floating mb-3">
                    {/* passwords */}
                    <input type={hidden ? "password":"text"} id="password" className="form-control" {...register('password')}/>
                    <label htmlFor="password">Contraseña</label>
                    </div>
                    <div className="form-floating mb-3">
                    <input type={hidden ? "password":"text"} className="form-control" id="confirmPassword" {...register('confirmPassword')}/>
                    <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                    </div>

                    <div className="d-grid">
                    {/* submit form */}
                    <button className="btn btn-lg btn-login text-uppercase fw-bold mb-2" id="btn-login" type="submit">Cambiar&nbsp;&nbsp;<span><FaArrowRightFromBracket  /></span></button>
                    </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


)}