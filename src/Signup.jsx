import "./Signup.css";

function Signup() {
  return (
    <div className="Signupcontainer">
      <h1>Sign Up</h1>

      <form>
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
          placeholder="Create a password"
        />

        <button type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;