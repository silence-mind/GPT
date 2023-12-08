import ParticleBackground from "../../../Particle/ParticleBackground";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="Sign_in-container">
      <form className="form_sign-in">
        <h1>Log In</h1>
        <div className="input_email">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="input_password">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button className="bn13" type="submit">
          Login
        </button>
        <div className="forget_password">
          <p>Forget Password ? </p>
          <span>CLICK !!</span>
        </div>
      </form>
      <ParticleBackground />
    </div>
  );
};

export default SignIn;
