import { useForm } from "react-hook-form";
import { login } from "./userApi";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./userSlice";
import './login.css'
import { useState } from "react";
//npm install styled-components

const Login = () => {
  let { register, handleSubmit } = useForm();
  let dispatch = useDispatch();
  const [click, setClick] = useState(false);

  const save = (data) => {
    login(data)
      .then((res) => {
        alert("Logged in ");
        dispatch(setCurrentUser(res.data));
      })
      .catch((err) => {
        alert("שגיאה", err.response);
        console.log(err.response);
      });
  };
  
  const handleClick = () => setClick(!click);

  return ( <>
    

    <form onSubmit={handleSubmit(save)} className={`form ${click ? "clicked" : ""}`}>
      <label>שם</label>
      <input {...register("name")} type="text" />
      <label>סיסמא</label>
      <input {...register("password")} type="password" />
      <button type="submit">Submit</button>
    </form>
  </>
  );
};

export default Login;



// Building a Secure Authentication System
// A secure authentication system is crucial for any eCommerce website. It allows users to create accounts, log in, and make purchases securely. In a React eCommerce application, you can use libraries like react-router to manage routes and Firebase for authentication.

// Here is an example of what a Login component might look like:

//      // Importing necessary libraries and components
//     import React, { useState } from 'react';
//     import { useHistory } from 'react-router-dom';
//     import firebase from 'firebase/app';
//     import 'firebase/auth';
    
//     // Defining the Login component
//     function Login() {
//       const [email, setEmail] = useState('');
//       const [password, setPassword] = useState('');
//       const history = useHistory();
    
//       // Function to handle form submission
//       function handleSubmit(event) {
//         event.preventDefault();
    
//         // Authenticate the user with Firebase
//         firebase.auth().signInWithEmailAndPassword(email, password)
//           .then(() => {
//             // Redirect to the home page after successful login
//             history.push('/');
//           })
//           .catch(error => {
//             console.error('Error signing in', error);
//           });
//       }
    
//       return (
//         <div className="login">
//           <form onSubmit={handleSubmit}>
//             <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
//             <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
//             <button type="submit">Log in</button>
//           </form>
//         </div>
//       );
//     }
    
//     export default Login;
     