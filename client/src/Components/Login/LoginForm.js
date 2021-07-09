import {useContext} from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { UserContext } from '../../App';

const LoginForm = ({setRegisterForm}) => {
    const [user, setUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:3002/auth/login', data)
        .then(data => {
            if(data.data.success){
                setUser(data.data.success.user)
                localStorage.setItem('user', JSON.stringify(data.data.success.user))
            }else{
            console.log('Something went wrong..')
            }
        })
    };
    return (
    <div>
      <span>Don't have a account? <button onClick={()=> setRegisterForm(true)}>Register Now</button></span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test@test.com" {...register("email", {required: true})} />
        {errors.email && <span>Email is required</span>}
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>Password is required</span>}
        <input type="submit" value="Login" />
    </form>
    </div>
    );
};

export default LoginForm;