import { UserContext } from "../context";
import React, { useState, useContext, useEffect } from "react";
import Basic from "./Basic";
import Standard from "./Standard";
import Premium from "./Premium";
import { useNavigate, useLocation  } from "react-router-dom";

const Account = () => {
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    debugger
    const path = location.pathname.split('/')[1];
    
    // If the path is not 'account' or user is not authenticated, redirect to home
    if (!sessionStorage.token && !(state && state.token)) {
      navigate('/');
    }
  }, [state, location.pathname, navigate]);
  return (
    <>
    <div style={{margin: '5%'}}>
      <h1>Account Screen</h1>
      {state && state.plan === "BASIC" && <Basic />}
      {state && state.plan === "STANDARD" && <Standard />}
      {state && state.plan === "PREMIUM" && <Premium />}
    </div>
    </>
  );
};

export default Account;
