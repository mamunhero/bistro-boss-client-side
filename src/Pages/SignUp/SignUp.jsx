import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const {createUser} = useContext(AuthContext);
  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result=> {
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch(error=> {
      console.log(error.message);
    })
  }
  return (
    <div className="flex min-h-screen bg-base-200">
      <div className="w-1/2 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Name"  {...register("name", { required: true })} name='name' className="input input-bordered" required />
            {errors.name && <span className='text-red-600'>Name is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email"  {...register("email", { required: true })} name='email' className="input input-bordered" required />
            {errors.email && <span className='text-red-600'>Email is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input 
             type="password"
             placeholder="password" 
             {...register("password", 
             { required: true, 
               minLength:6, 
               maxLength: 20,
               pattern: [
                { value: /(?=.*[A-Z])/},
                { value: /(?=.*[a-z])/ },
                { value: /.*[0-9].*/ },
                { value: /.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-].*/ },
              ],
              })} 
             name='password' 
             className="input input-bordered" 
             required />
            {errors.password?.type === "minLength" && (
              <span className='text-red-600'>Password must be 6 character</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className='text-red-600'>Password must be less than 20 character</span>
            )}
            {errors.password?.type === "pattern" && (
              <span className='text-red-600'>Password must one Uppercase</span>
            )}
            {errors.password?.type === "pattern" && (
              <span className='text-red-600'>Password must one Lowercase</span>
            )}
            {errors.password?.type === "pattern" && (
              <span className='text-red-600'>Password must one Number</span>
            )}
            {errors.password?.type === "pattern" && (
              <span className='text-red-600'>Password must one Special Character</span>
            )}
          </div>
          <div className="form-control mt-6">
            <input type="submit"  className="btn btn-primary" value="Sign Up" />
          </div>
        </form>
        <p className='text-center mb-5 text-[#D1A054] font-bold text-2xl'><small>Already registered? <Link to="/login">Go to Login</Link></small></p>
      </div>
      <div className="w-1/2">
        <h1>hello world</h1>
      </div>
    </div>
  );
};

export default SignUp;


