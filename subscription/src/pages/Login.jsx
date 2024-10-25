import React, { useState, useContext, useEffect } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/index";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("nav@gmail.com");
  const [password, setPassword] = useState("Test@123");
  // context
  const [state, setState] = useContext(UserContext);

  useEffect(()=>{
    console.log("login",state)
  },[state])

  const handleClick = async (e) => {
    try {
      debugger
      e.preventDefault();
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        return toast.error(data.error);
      }
      // const { payment } = data;
      // if(payment?.active){
      //   console.log('data',data)
      //   sessionStorage.setItem('userId', data?.user?.email)
      //   sessionStorage.setItem('active', true)
      //   sessionStorage.setItem('plan', payment.plan)
      //   setState(data)
      //   setTimeout(() => {
      //     navigate("/");
      //   }, 0);
      // }else{
      //   setState(data)
      //   setTimeout(() => {
      //     navigate("/");
      //   }, 0);
      // }
      setState(data)
        sessionStorage.setItem('userId', data?.user?.email)
        sessionStorage.setItem('token', data.token)
      setTimeout(() => {
        navigate("/");
      }, 0);

    } catch (error) {
      console.error(error);
      toast.error(error);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center" style={{ height: "80vh" }}>
        <div className="container align-items-center d-flex">
          <div className="row col-md-6 offset-md-3 text-center">
            <h1 className="pt-5 fw-bold">Login</h1>
            <p className="lead pb-4">
              Access your subscription. Anytime, Anywhere
            </p>

            <div className="form-group">
              <Input
                label="Email"
                value={email}
                setValue={setEmail}
                type="Email"
              />
              <Input
                label="Password"
                value={password}
                setValue={setPassword}
                type="Password"
              />

              <div className="d-grid">
                <Button
                  handleClick={handleClick}
                  type="danger"
                  text="Login"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const isActive = () => {
  return sessionStorage.getItem('active') === 'true' ? true : false
}

const isPlan = () => {
  return sessionStorage.getItem('plan')
}

export {
  Login,
  isActive,
  isPlan
} ;
