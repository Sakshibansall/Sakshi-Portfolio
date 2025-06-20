import "./Style.css";
import call from "./Images/call.png"
import mail from "./Images/mail.png"
import address from "./Images/a.png"
import linked from './Images/linked.png'
function Connect() {
  return (
    <div className="connect" id="connect">
      <div className="connect-heading">
        <h1>GET IN TOUCH</h1>
        <span>Let's Work Together</span>
      </div>

      <div className="connect-item">

        <div className="connect-data">
         <img src={call} alt="" />
          <p>Phone</p>
          <p> <a style={{color:"grey",fontSize:"18px"}} href="tel:+91 12345 67890">+91 12345 67890</a> </p>
          {/* <p  style={{color:"grey"}}>+91 12345 67890</p> */}
        </div>

        <div className="connect-data">
          <img src={mail} alt="" />
          <p>Email</p>
           <p> <a style={{color:"grey"}} href="mailto:sakshibansal287@gmail.com">sakshibansal287@gmail.com</a> </p>
        </div>

        <div className="connect-data">
         <img src={address} alt="" />
          <p>Location</p>
          <p  style={{color:"grey"}}>Chandigarh, India</p>
        </div>

        <div className="connect-data">
         <img src={linked} alt="" />
          <p>LinkedIn</p>
          <p> <a style={{color:"grey"}} href="https://www.linkedin.com/in/sakshi-bansal-648346250">Sakshi-Bansal</a> </p>
        </div>

      </div>
    </div>
  );
}

export default Connect;
