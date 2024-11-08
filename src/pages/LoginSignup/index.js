import React, { useState } from 'react';
import { Container, Input, InputAdornment } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Person from '@mui/icons-material/Person';
import Password from '@mui/icons-material/Password';
import CommonButton from '../../components/form/CommonButton';
import { useLoginSignup } from "../../hooks/useLoginSignup";
import './LoginSignup.scss';

const LoginSignup = () => {
  const [loginButtonProps] = useState({
    variant: 'contained', bgColor: '#000000', btnText: 'Login', color: '#FFFFFF'
  })
  const [signupButtonProps] = useState({
    variant: 'contained', bgColor: '#000000', btnText: 'Signup', color: '#FFFFFF'
  })
  const [isLoginForm, setIsLoginForm] = useState(true)
  const loginFormConfig = [
    { name: 'email', type: 'text', placeholder: 'Enter your email address', required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, icon: <MailOutlineIcon />, className: 'input-email' },
    { name: 'password', type: 'password', placeholder: 'Enter your password', required: true, icon: <Password />, className: 'input-password' }
  ]
  const signupFormConfig = [
    { name: 'name', type: 'text', placeholder: 'Enter your name', required: true, icon: <Person />, className: 'input-name' },
    { name: 'email', type: 'text', placeholder: 'Enter your email address', required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, icon: <MailOutlineIcon />, className: 'input-email' },
    { name: 'password', type: 'password', placeholder: 'Enter your password', required: true, icon: <Password />, className: 'input-password' }
  ]
  const [loginFormValues, setLoginFormValues] = useState({});
  const mutation = useLoginSignup()

  const loginSignupSwitch = () => {
    setIsLoginForm(!isLoginForm)
  }

  const handleChange = (e, field) => {
    const { name, value } = e.target;
    setLoginFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    validateField(value, field);
  };

  const handleLoginButtonClick = () => {
    console.log(loginFormValues)
    mutation.mutateAsync(loginFormValues)
  }

  const validateField = (value, field) => {
    console.log(value, field)
  }

  return (
    <>
      <Container maxWidth='xl'>
        <div className='login-form-wrapper'>
          {isLoginForm
            ?
            <div className="auth-form login-form">
              {
                loginFormConfig.map(element => {
                  return (
                    <Input
                      name={element.name}
                      type={element.type}
                      value={loginFormValues[element.name] || ''}
                      placeholder={element.placeholder}
                      className={`form-input ${element.className}`}
                      onChange={(e) => handleChange(e, element)}
                      key={element.name}
                      disableUnderline
                      startAdornment={
                        <InputAdornment position='start'>
                          {element.icon}
                        </InputAdornment>
                      }
                    />
                  )
                })
              }
              <div className='login-button-wrapper'>
                <CommonButton {...loginButtonProps} onButtonClick={handleLoginButtonClick} />
              </div>
              <div className='auth-text'>
                Don't have an account?<span className='auth-link' onClick={loginSignupSwitch}>Signup now</span>
              </div>
            </div>
            :
            <div className="auth-form signup-form">
              {
                signupFormConfig.map(element => {
                  return (
                    <Input
                      placeholder={element.placeholder}
                      className={`form-input ${element.className}`}
                      key={element.name}
                      disableUnderline
                      startAdornment={
                        <InputAdornment position='start'>
                          {element.icon}
                        </InputAdornment>
                      }
                    />
                  )
                })
              }
              <div className='login-button-wrapper'>
                <CommonButton {...signupButtonProps} />
              </div>
              <div className='auth-text'>
                Already have an account?<span className='auth-link' onClick={loginSignupSwitch}>Login now</span>
              </div>
            </div>
          }
        </div>
      </Container>
    </>
  )
}

export default LoginSignup