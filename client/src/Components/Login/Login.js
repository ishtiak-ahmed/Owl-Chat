import { useState} from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const Login = () => {
  const [registerForm, setRegisterForm] = useState(false);

  return (
    <div className='login'>
      {
        registerForm ? <RegisterForm setRegisterForm={setRegisterForm} /> : <LoginForm setRegisterForm={setRegisterForm}/>
      }
    </div>
  );
};

export default Login;
