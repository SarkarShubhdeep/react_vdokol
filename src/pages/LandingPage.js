
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/Button'
import Button from '../components/Button'
import personIcon from '../img/person_black_24dp.svg'
import videocamIcon from '../img/videocam_black_24dp.svg'
import logo from '../img/logo_vdokol.svg';
import './LandingPage.css';

const LandingPage = () => {

  

  return (
    <>

      <div className="container-fluid h-100 landing-page-bg">
        <div className="top-row d-flex align-items-end justify-content-center">
          <img src={logo} alt="" height="150px" srcset="" />
        </div>

        <div className="row d-flex align-items-start justify-content-center">
          <div className="m-2 buttons-group background-red">
            <div className="row mb-2">
              <div className="col">
                <img src={videocamIcon} height="25px" alt="" />
                <span className="ps-2">Meeting</span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="col form-input border-1 unique-id-input"
                  name=""
                  id=""
                  placeholder="Enter meeting ID"
                />
                <Button text="JOIN" class="btn btn-red-light" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Button text="START MEETING" class="btn btn-red" />
              </div>
            </div>
          </div>

          <div className="m-2 buttons-group background-normal">
            <div className="row mb-2">
              <div className="col h-25">
                <img src={personIcon} height="25px" alt="" />
                <span className="ps-2">Users</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <Button text="LOGIN" class="btn btn-normal" />
                  <Button text="SIGNUP" class="btn btn-normal" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <a className="ps-2" href="">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
          
        </div>
        

      </div>

    </>

  );
};

export default LandingPage;
