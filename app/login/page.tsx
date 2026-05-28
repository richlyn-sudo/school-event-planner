"use client";

import "../style.css";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    router.push("/dashboard");
  };

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

          <h1>Login</h1>

          <p>
            Enter your email address & password to sign in
          </p>

          <form
            className="login-form"
            onSubmit={handleLogin}
          >

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
              Sign In
            </button>

          </form>

          <div className="login-links">

            <p>
              Not registered?
              <span> Click here to register</span>
            </p>

            <a href="#">
              Forgot Password?
            </a>

          </div>

        </div>

      </div>

    </div>

  );
}