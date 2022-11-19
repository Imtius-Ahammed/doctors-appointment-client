import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const { register,formState: { errors }, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token]= useToken(loginUserEmail);

  const from = location.state?.from?.pathname || '/';
 

  const [loginError,setLoginError] = useState('');
 if(token){
    navigate(from, {replace: true});
  }
 
  const handleLogin = data=>{
  console.log(data);
  setLoginError('');
  signIn(data.email, data.password)
  .then(result=>{
    const user = result.user;
    console.log(user);
    setLoginUserEmail(data.email);
    
  })
  .catch(err=>{
    console.error(err.message);
    setLoginError(err.message);
  });
  

 
  }
  return (
    <div className="h-[800px] w-96 flex justify-center items-center">
      <div className="w-96 p-7 ">
        <h1 className="text-xl text-center"> Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              
              {...register("email", {required: "Email Address is required"})}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}
            
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password",{required: "password is required", minLength:{value:6,message: 'password must be 6 character or longer' }})}
            />
             {errors.password && <p className="text-red-600" role="alert">{errors.password?.message}</p>}
            <label className="label">
              <span className="label-text">Forgot Password</span>
            </label>
          </div>

          <input
            className="btn btn-accent w-full"
            value="Login"
            type="submit"
          />
          <div>{loginError && <p>{loginError}</p>}</div>
        </form>
        <p>New to Doctors Portal <Link className="text-secondary" to='/signup'>Create New Account</Link></p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
