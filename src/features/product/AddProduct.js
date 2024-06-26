import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { sighnUp } from './userApi';
// import { setCurrentUser } from './userSlice';
import '../user/signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { addProduct } from './productApi';

function AddProduct() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    let [emptyProduct, setEmptyProduct] = useState({ "name": "", "description": "", "imgUrl": "", "price": 0, "qty": 0 })
    const change = (e) => {
        setEmptyProduct({ ...emptyProduct, [e.target.name]: e.target.value })
    }

    const save = () => {
        addProduct(emptyProduct)
            .then((res) => {
                navigate("/list");
            })
            .catch((err) => {
                console.log('add failed', err.message);
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

                                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add New Product</p>
                                        <form class="mx-1 mx-md-4">
                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" class="form-control" name='name' onChange={change} />
                                                    <label class="form-label" for="form3Example1c">Name</label>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example3c" class="form-control" name='description' onChange={change} />
                                                    <label class="form-label" for="form3Example3c">Description</label>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example3c" class="form-control" name='imgUrl' onChange={change} />
                                                    <label class="form-label" for="form3Example3c">Image Url</label>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="number" id="form3Example3c" class="form-control" name='price' onChange={change} />
                                                    <label class="form-label" for="form3Example3c">Price</label>
                                                </div>
                                            </div>

                                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button onClick={save} type="button" class="btn btn-primary btn-lg">Add</button>
                                            </div>
                    
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


export default AddProduct;

