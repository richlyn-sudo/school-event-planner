"use client";

import "../style.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    const { data, error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      alert(error.message);
    } else {

      console.log("Logged in:", data);

      router.push("/dashboard");
    }
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
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

            </div>

            <div className="input-box">

              <span>🔒</span>

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
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