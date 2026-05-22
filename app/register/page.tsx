import "../style.css";

export default function RegisterPage() {

  return (

    <div className="login-page">

      <div className="login-container">

        {/* LEFT */}
        <div className="login-left">

          <h1>
            Plan Better.
            <br />
            Collaborate
            <br />
            Smarter.
          </h1>

          <p>
            A platform designed to help student organizations
            and teachers plan school events.
          </p>

          <div className="feature-list">

            <div className="feature-item">
              ✔ Manage Event Tasks
            </div>

            <div className="feature-item">
              ✔ Organize Schedules
            </div>

            <div className="feature-item">
              ✔ Track Budgets
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="login-right">

          <h1>Register</h1>

          <p>
            Create your account
          </p>

          <form className="login-form">

  <div className="input-box">
    <span>👤</span>

    <input
      type="text"
      placeholder="Full Name"
    />
  </div>

  <div className="input-box">
  <span>📧</span>

  <input
    type="email"
    placeholder="Email"
  />
</div>

  <div className="input-box">
    <span>🔒</span>

    <input
      type="password"
      placeholder="Password"
    />
  </div>

  <button type="submit">
    Register
  </button>

</form>
          <div className="login-links">

            <p>
              Already have an account?
              <span> Login</span>
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}