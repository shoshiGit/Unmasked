import { useEffect, useState } from "react";
import { getAllProductsFromServer } from "./productApi";
import OneProduct from "./OneProduct";
import { Outlet, useNavigate } from "react-router-dom";
import './productA.css';
import { useSelector } from "react-redux";

const ProductList = () => {
  const navigate = useNavigate();
  let [arr, setArr] = useState([]);
  let user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    getAllProductsFromServer()
      .then((res) => {
        setArr(res.data);
      })
      .catch((err) => {
        alert("Failed to bring data from server");
        console.log(err);
      });
  }, []);
  const handleOnDelete = () => {
    getAllProductsFromServer().then((res) => {
      setArr(res.data);
    })
    .catch((err) => {
      alert("Failed to update product list");
      console.log(err);
    });
  }

  return (
    <>

      <section className="ProductPage">
        <h1>Products</h1>
        <div className="container">
          {arr.map((item) => (
            <OneProduct className={item} onDelete={handleOnDelete} key={item.id} one={item} />
          ))}
          <Outlet />
        </div>
        {user && user.role == "ADMIN" ? (
          <button onClick={()=>navigate("/addProduct")} >Add Product</button>
        ):<div></div>}
      </section>
    </>
  );
};

export default ProductList;
