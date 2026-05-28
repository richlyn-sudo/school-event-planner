"use client";

import "../style.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function RegisterPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    const { data, error } =
      await supabase.auth.signUp({
        email,
        password,
      });

    if (error) {

      alert(error.message);

    } else {

      console.log("Registered:", data);

      alert("Registration successful!");

      router.push("/login");
    }
  };

  return (

    <div className="login-page">

      <div className="login-container">

        {/* LEFT */}
        <div className="login-left">

          <h1>
            Create
            <br />
            Your
            <br />
            Account.
          </h1>

          <p>
            Register to manage school events,
            schedules, and tasks.
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

          <form
            className="login-form"
            onSubmit={handleRegister}
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
              Register
            </button>

          </form>

        </div>

      </div>

    </div>

  );
}