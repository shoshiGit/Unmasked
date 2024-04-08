import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sighnUp } from './userApi';
import { setCurrentUser } from './userSlice';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';

function SingUp() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let [emptyUser, setEmptyUser] = useState({ id: 0, "name": "", "email": "", "password": "" })
  const change = (e) => {
    setEmptyUser({ ...emptyUser, [e.target.name]: e.target.value })
  }

  const save = () => {
    sighnUp(emptyUser)
      .then((res) => {
        dispatch(setCurrentUser(res.data))
        console.log(res.data);
        localStorage.setItem('user', JSON.stringify(res.data));
        navigate("/list");
      })
      .catch((err) => {
        console.log('signup failed', err.message);
        alert("add failed");
      })
  }

  return (<>
    <section class="vh-100" style={{ backgroundClip: "#eee" }}>
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style={{ borderRadius: "25px" }}>
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create your account</p>

                    <form class="mx-1 mx-md-4">

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" class="form-control" name='name' onChange={change} />
                          <label class="form-label" for="form3Example1c">Your Name</label>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="email" id="form3Example3c" class="form-control" name='email' onChange={change} />
                          <label class="form-label" for="form3Example3c">Your Email</label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4c" class="form-control" name="password" onChange={change} />
                          <label class="form-label" for="form3Example4c" >Password</label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4cd" class="form-control" />
                          <label class="form-label" for="form3Example4cd">Repeat your password</label>
                        </div>
                      </div>

                      <div class="form-check d-flex justify-content-center mb-5">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                        <label class="form-check-label" for="form2Example3">
                          I agree all statements in <Link>Terms of service</Link>
                        </label>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button onClick={save} type="button" class="btn btn-primary btn-lg">Register</button>
                      </div>
                      <p class="text-center text-muted mt-5 mb-0">Have already an account? <span
                        style={{ cursor: "pointer" }} class="fw-bold text-body cursor-pointer" onClick={() => navigate("/login")}><u>Login here</u></span></p>
                    </form>
                  </div>

                  {/* Left side of Navbar */}
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      class="img-fluid" alt="Sample image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </>
  );
}


export default SingUp;

