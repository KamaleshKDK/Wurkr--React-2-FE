import "./style.css";
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import fbPic from '../assets/fb.png';
import insta from "../assets/insta.jpg"
import twitter from "../assets/twitter.png"
import google from "../assets/google.png"
import linkedin from "../assets/linkedin.png"
import wurkr from "../assets/wurkr.jpeg"

const Signup = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""

    })
    const [error, setError] = useState("")

    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate()

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "https://wurkr-react2.herokuapp.com/api/users";
            const { data: res } = await axios.post(url, data);
            navigate("/login")
            console.log(res.message)
        } catch (error) {
            if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500) {
                setError(error.response.data.message)
            }
        }
    }
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    return (
        <>
            <section class="h-100">
                <div class="container h-100">
                    <div class="row justify-content-sm-center h-100">
                        <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                            <div class="text-center my-5">
                            </div>
                            <div>
                                <div class="card-body p-1">
                                    <img className="justify-content-center logo-img" style={{ height: "20px", width: "20px" }} src={wurkr} />

                                    <h1 style={{ textAlign: "center" }} class="login-heading">Welcome to Wurkr !</h1>
                                    <div class="text-center  py-1">
                                        <p className="font-style my-1">Sign in to access your account.</p>
                                        <p className="font-style">Already Have an account ? <Link to={"/login"}>Login</Link></p>

                                    </div>
                                    <div className="">
                                        <button type="button" className="google-btn mx-2"><img style={{ height: "21px", width: "20px" }} src={google} className="mx-1 my-1" />Sign Up with Google</button>
                                        <button type="button" className="linkedin-btn"><img style={{ height: "21px", width: "20px" }} src={linkedin} className="mx-2 my-1" />Sign Up with LinkedIn</button>
                                    </div>
                                    <p className="line my-4"><span >Or</span></p>
                                    <form className="mt-2" onSubmit={handleSubmit}>

                                        <div class="form-outline mb-4">


                                            <input

                                              
                                                placeholder="First Name"
                                                class="form-control"
                                                type="text"
                                                name="firstName"
                                                onChange={handleChange}
                                                value={data.firstName}
                                                required

                                            />
                                            <div class="invalid-feedback">
                                                Name is required
                                            </div>
                                        </div>
                                        <div class="form-outline mb-4">

                                            <input

                                                
                                                placeholder="Last Name"
                                                class="form-control"
                                                type="text"
                                                name="lastName"
                                                onChange={handleChange}
                                                value={data.lastName}
                                                required

                                            />
                                            <div class="invalid-feedback">
                                                Name is required
                                            </div>
                                        </div>
                                        <div class="form-outline mb-4">
                                            <input

                                                id="form2Example1"
                                                placeholder="Email Address"
                                                class="form-control"
                                                type="email"
                                                name="email"
                                                onChange={handleChange}
                                                value={data.email}
                                                required

                                            />
                                            <div class="invalid-feedback">
                                                Email is invalid
                                            </div>
                                        </div>


                                        <div class="form-outline my-2">
                                            <input
                                                type="password"
                                                id="form2Example2"
                                                placeholder="Password"
                                                class="form-control"
                                                name="password"
                                                onChange={handleChange}
                                                value={data.password}
                                                required

                                            />
                                            <div class="invalid-feedback">
                                                Password is required
                                            </div>
                                        </div>


                                        <div class="row mb-4">
                                            <div class="col d-flex justify-content-center">

                                            </div>

                                        </div>
                                        {
                                            error && <div className="error_msg">{error}</div>
                                        }
                                        <button type="submit" class="button-style  my-2">Sign Up</button>
                                        <div class="text-center">
                                            <p className="my-2">SHOW US SOME LOVE</p>
                                            <button type="button" class="btn btn-link btn-floating mx-1">
                                                <img src={fbPic} style={{ height: "20px", width: "20px" }} />
                                            </button>
                                            <button type="button" class="btn btn-link btn-floating mx-1">
                                                <img src={insta} style={{ height: "20px", width: "20px" }} />
                                            </button>
                                            <button type="button" class="btn btn-link btn-floating mx-1">
                                                <img src={twitter} style={{ height: "20px", width: "20px" }} />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    <div class="text-center privac py-1">
                                        <span className="privacy">Privacy Policy</span>
                                        <span className="privacy">Terms and Conditions</span>
                                        <span className="privacy">Help Center</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Signup;