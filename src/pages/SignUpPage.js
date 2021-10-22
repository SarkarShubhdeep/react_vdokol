
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/Button'
import Button from '../components/Button'
import personIcon from '../img/person_black_24dp.svg'
import logo from '../img/logo_vdokol.svg';
import './LandingPage.css';
import './SignUpPage.css';

const SignUpPage = () => {
  return (
    <>
      <div className="container-fluid h-100 landing-page-bg p-5">
        <div className="p-5 d-flex align-items-end justify-content-center">
          <img src={logo} alt="" height="150px" srcset="" />
        </div>

        <div className="row d-flex align-items-start justify-content-center">
          

          <div className="m-2 buttons-group background-normal">
            <div className="row mb-2">
              <div className="col h-25">
                <img src={personIcon} height="25px" alt="" />
                <span className="ps-2">Sign up for a new account</span>
              </div>
            </div>
            <div className="row">
              <div className="col">
              <input
                  type="text"
                  className="w-250px form-input border-1 unique-id-input"
                  name=""
                  id="username"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
              <input
                  type="text"
                  className="w-250px form-input border-1 unique-id-input"
                  name=""
                  id="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
              <input
                  type="password"
                  className="w-250px form-input border-1 unique-id-input"
                  name=""
                  id="password"
                  placeholder="Set password"
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <Button text="SUBMIT" class="btn btn-normal" />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <span className='ps-2'>
                  Already have an account?
                </span>
                <a className="ps-2" href="">
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default SignUpPage;
