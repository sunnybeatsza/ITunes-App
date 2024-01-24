import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./Loginpage.css";

export const Loginpage = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      passWord: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch("http://localhost:8080/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          const data = await response.json();
          alert("Login successful!");
          console.log("Token:", data.token);
          sessionStorage.setItem("token", data.token);
          navigate("/Home");
        } else {
          alert("Incorrect login!");
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred during login");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="userName">Username</label>
      <input
        id="userName"
        name="userName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.userName}
      />

      <label htmlFor="passWord">Password</label>
      <input
        id="passWord"
        name="passWord"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.passWord}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
