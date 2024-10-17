import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    console.log(name);
    console.log(email);
    console.log(password);
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
