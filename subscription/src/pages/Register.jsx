import React, { useState, useContext, useEffect } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("Naveen");
  const [email, setEmail] = useState("nav@gmail.com");
  const [password, setPassword] = useState("Test@123");
  // context
  const [state, setState] = useContext(UserContext);

  useEffect(()=>{
    console.log(`*******`, state);
  },[state])

  const handleClick = async (e) => {
    try {
      e.preventDefault();
      debugger;
      const { data } = await axios.post("http://localhost:8000/api/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        return toast.error(data.error);
      }
      toast.success(
        `Hey ${data.rest.name}, You are part of team now. Congrats`
      );
      // Update the context state directly
      setState({
        token: data.token,
        user: data.rest,
      });

      // Store in localStorage as stringified data
      localStorage.setItem("auth", JSON.parse(JSON.stringify(data)));
      navigate("/login");
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
            <h1 className="pt-5 fw-bold">Let's Get Started</h1>
            <p className="lead pb-4">
              Sign up for free. No Credit card required.
            </p>

            <div className="form-group">
              <Input label="Name" value={name} setValue={setName} />
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
                  text="Register"
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

export default Register;
