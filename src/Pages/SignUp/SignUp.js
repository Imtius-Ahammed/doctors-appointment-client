import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
  
  const {register,handleSubmit,formState: { errors }} = useForm();
  const{createUser,updateUser}=useContext(AuthContext)
  const [signUpError, setSignUpError]=useState('')
  const handleSignUp = (data)=>{
    console.log(data)
    setSignUpError('')
    createUser(data.email,data.password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      toast('User Created Successfully')
      const userInfo = {
        displayName: data.name
      }
      updateUser(userInfo)
      .then(()=>{})
      .catch(err=>console.log(err));
    })
    .catch(err=>{
      console.error(err)
      setSignUpError(err.message)
    });
  }
  return (
    <div className="h-[800px] w-96 flex items-center justify-center container mx-auto">
    <div className="w-96 p-7">
      <h1 className="text-xl text-center"> SignUp</h1>
      <form  onSubmit={handleSubmit(handleSignUp)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name",{required:"Name is required"})}
             className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
        
          
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email",{required:'email is required'})}
 
            className="input input-bordered w-full max-w-xs"
          />
           {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
        
          
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password",{required: "password required",minLength:{value:6,message:"password must be 6 character or longer"},
            pattern:{value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be Strong'}
          
          
          })}
            className="input input-bordered w-full max-w-xs"
          
          />
          {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
         
          
        </div>

        <input
          className="btn btn-accent w-full mt-4"
          value="SignUp"
          type="submit"
        />
        {signUpError && <p className='text-red-600'>{signUpError}</p>}
      </form>
      <p>Already have an Account? <Link className="text-secondary" to='/login'>Please Login </Link></p>
      <div className="divider">OR</div>
      <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
    </div>
  </div>
  );
};

export default SignUp;