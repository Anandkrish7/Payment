import React, { useState, useContext, useEffect } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context";
import "../App.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("Naveen");
  const [email, setEmail] = useState("nav@gmail.com");
  const [password, setPassword] = useState("Test@123");
  // context
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    console.log(`*******`, state);
  }, [state]);

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
        <div className="Login-Container">
          <div className="Login-Box">
            <h4 className="">Let's Get Started</h4>
            <p className="">Sign up for free. No Credit card required.</p>

            <div className="">
              <Input
                label="Name"
                value={name}
                setValue={setName}
                placeholder={"Name"}
              />
              <Input
                label="Email"
                value={email}
                setValue={setEmail}
                type="Email"
                placeholder={"Email"}
              />
              <Input
                label="Password"
                value={password}
                setValue={setPassword}
                type="Password"
                placeholder={"Password"}
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
