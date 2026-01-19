import React from 'react'
import { useForm } from 'react-hook-form'
import "./App.css";

function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));

    if (userData) {
      if (userData.password === data.password) {
        console.log(userData.name + " You are successfully logged in.");
      } else {
        console.log("Email or Password not matching.");
      }
    } else {
      console.log("User not found.");
    }
  };

  return (
    <div>
      <h1>Login Form</h1>

      <form className="App" onSubmit={handleSubmit(onSubmit)}>

        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.email && (
          <span style={{ color: 'red' }}>*Email is mandatory</span>
        )}

        <br /><br />

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Enter password"
        />
        {errors.password && (
          <span style={{ color: 'red' }}>*Password is mandatory</span>
        )}

        <br /><br />

        <input
          type="submit"
          style={{ backgroundColor: '#a1eafb' }}
        />

      </form>
    </div>
  );
}

export default Login;
