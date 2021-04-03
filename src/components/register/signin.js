import React, { useState } from 'react'
import Navbar from '../home/Navbar';

function Signin(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = (e) => {
    const user = {
      email,
      password,
    };
    userLogin(user);
  };
  return (

    <>
      <Navbar />
      <style>{'body { background-color: #d4d0c7; }'}</style>
      <div className="container mt-5">
        <div className="row m-auto">
          <div className="col-lg-6 col-md-6 col-sm-8 m-auto">
            <div className="card shadow">
              <div className="card-body">
                {/* HEADER */}
                <div className="row">
                  <div className="col">
                    <h3 className="text-center" style={{ fontWeight: 'bold', color: '#666' }}>
                      SignIn
                    </h3>
                  </div>
                </div>
                <form onSubmit={userLogin}>
                  <div className="row mt-2">
                    <div className="col-lg-8 col-md-8 col-sm-9 m-auto">
                      {/* User Id */}

                      <div className="input-group mb-3">
                        <div className="input-group-prepend mr-3 mb-0">
                          <span className="input-group-text mb-0 pb-0">
                            <i className="fa fa-envelope"></i>
                          </span>
                        </div>
                        <input
                          type="user"
                          className="form-control"
                          placeholder="Email"
                          aria-label="email"
                          aria-describedby="basic-addon1"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      {/* PASSWORD */}
                      <div className="input-group mb-3">
                        <div className="input-group-prepend mr-3 mb-0">
                          <span className="input-group-text mb-0 pb-0">
                            <i className="fa fa-key"></i>
                          </span>
                        </div>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          aria-label="Password"
                          aria-describedby="basic-addon1"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      {/* LOGIN BUTTON */}
                      <center>
                        <a href="/fpassword">forgot password? </a>
                        <button style={{ background: '#0ac4c4' }} className="btn btn-light pb-2 px-4">
                          Sign In <i className="fa fa-sign-in-alt ml-2"></i>
                        </button>
                        <p
                          className="mt-2 mb-1"
                          style={{ color: txtColor.light }}
                        >
                          New candidate for registration? <a href="/RegPg1">Register</a>{" "}
                          now!
                        </p>
                      </center>
                      {/*  */}
                    </div>
                  </div>
                  {/*  */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin

const txtColor = {
  color: "#777777",
  light: "#aaaaaa",
};