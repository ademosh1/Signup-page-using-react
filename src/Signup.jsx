import "./Signup.css";

function Signup() {
  return (
    <div className="Signupcontainer">
      <h1>Sign Up</h1>

      <input
        type="text"
        placeholder="Enter your name"
      />

      <input
        type="email"
        placeholder="Enter your email"
      />

      <input
        type="password"
        placeholder="Create your password"
      />

      <button>Sign Up</button>

      <p>
        Already have an account?
        <a href="#"> Login</a>
      </p>
    </div>
  );
}

export default Signup;