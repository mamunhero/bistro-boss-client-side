import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {
  const [disabledLogin, setDisabledLogin] = useState(true);
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log("loacation needed add to cart", location.state);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const formElement = event.target;
    const email = formElement.email.value;
    const password = formElement.password.value;
    const captcha = formElement.captcha.value;

    signInUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabledLogin(false);
    } else {
      setDisabledLogin(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="flex min-h-screen bg-base-200">
        <div className="w-1/2">
          <h1>hello world</h1>
        </div>
        <div className="w-1/2 mx-auto">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name='email' className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name='password' className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input type="text" onBlur={handleValidateCaptcha} placeholder="type the text above" name='captcha' className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <input type="submit" disabled={disabledLogin} className="btn btn-primary" value="Login" />
            </div>
          </form>
          <p className='text-center mb-5 text-[#D1A054] font-bold text-2xl'><small>New Here <Link to="/signup">Create a New Account</Link></small></p>
        </div>
      </div>
    </>
  );
};

export default Login;
