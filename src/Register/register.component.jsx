import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./register.component.css";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  return (
    <div className="row registerForm">
      <div className="col-md-4 offset-2">
        <h4>Signup</h4>
        <p>We do not share your personal details with anyone</p>
      </div>
      <div className="col-md-4">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            navigate(`/`);
          })}
        >
          <label htmlFor="firstName">First Name </label>{" "}
          <input
            type="text"
            className="form-control"
            id="firstName"
            {...register("firstName", { required: "First Name is required !" })}
          />
          {errors.firstName && (
            <p style={{ color: "red" }}>{errors.firstName.message}</p>
          )}
          <label htmlFor="lastName">Last Name </label>{" "}
          <input
            type="text"
            className="form-control"
            id="lastName"
            {...register("lastName", { required: "Last Name is required !" })}
          />
          {errors.lastName && (
            <p style={{ color: "red" }}>{errors.lastName.message}</p>
          )}
          <label htmlFor="email">Email </label>{" "}
          <input
            type="email"
            className="form-control"
            id="email"
            {...register("email", { required: "Email is required !" })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
          <label htmlFor="password">Password </label>{" "}
          <input
            type="text"
            className="form-control"
            id="password"
            {...register("password", { required: "Password is required !" })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
          <label htmlFor="confirmPassword">Confirm Password </label>{" "}
          <input
            type="text"
            className="form-control"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Confirm password is required !",
            })}
          />
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
          )}
          <button className="btn btn-danger col-md-12 my-4"> Sign Up</button>
        </form>
      </div>
    </div>
  );
}
