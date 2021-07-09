import {useContext, useState} from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { UserContext } from '../../App';

const RegisterForm = ({setRegisterForm}) => {
    const [user, setUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:3002/auth/registerUser', data)
        .then(data => {
            if(data.data.success){
            setUser(data.data.success.user)
            localStorage.setItem('user', data.data.success.user)
            }else{
            console.log('Something went wrong..')
            }
        })
    };
    return (
    <div>
      <span>Already have a account? <button onClick={()=> setRegisterForm(false)}>Login Now</button></span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="Name" {...register("fullName", {required: true})} />
        {errors.name && <span>Name is required</span>}
        <input defaultValue="test@test.com" {...register("email", {required: true})} />
        {errors.email && <span>Email is required</span>}
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>Password is required</span>}
        <input type="submit" value="Register" />
    </form>
    </div>
    );
};

export default RegisterForm;