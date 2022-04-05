import React from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import "./login.component.css";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // return (
  //   <button type="button" >
  //     Go home
  //   </button>
  // );
  return (
    <div className="row loginForm">
      <div className="col-md-4 offset-2">
        <h4>Login</h4>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className="col-md-4">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            navigate(`/`);
          })}
        >
          <label htmlFor="email">Email </label>{" "}
          <input
            type="text"
            className="form-control"
            id="email"
            {...register("email", { required: "Email is required !" })}
          />
          <label htmlFor="password">Last Name </label>{" "}
          <input
            type="text"
            className="form-control"
            id="password"
            {...register("password", { required: "Password is required !" })}
          />
          <button className="btn btn-danger col-md-12 my-4"> Login </button>
        </form>
      </div>
    </div>
  );
}
