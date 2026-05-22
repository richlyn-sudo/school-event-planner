"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../style.css";

export default function Home() {

  const pathname = usePathname();

  return (
    <div className="container">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div>

          <div className="logo-section">

            <div className="logo-circle">
              ⚡
            </div>

            <div>
              <h2>EventSync</h2>
              <p>School Planner</p>
            </div>

          </div>

          <div className="school-card">

            <span>INSTITUTION</span>

            <h3>
              Pamantasan ng Lungsod ng San Pablo
            </h3>

          </div>

          <nav className="menu">

            <Link
              href="/dashboard"
              className={`menu-item ${
                pathname === "/dashboard" ? "active" : ""
              }`}
            >
              <span>🏠</span>
              Dashboard
            </Link>

            <Link
              href="/tasks"
              className={`menu-item ${
                pathname === "/tasks" ? "active" : ""
              }`}
            >
              <span>☑</span>
              Tasks
            </Link>

            <Link
              href="/schedule"
              className={`menu-item ${
                pathname === "/schedule" ? "active" : ""
              }`}
            >
              <span>📅</span>
              Schedule
            </Link>

            <Link
              href="/budget"
              className={`menu-item ${
                pathname === "/budget" ? "active" : ""
              }`}
            >
              <span>💰</span>
              Budget
            </Link>

            <Link
              href="/team"
              className={`menu-item ${
                pathname === "/team" ? "active" : ""
              }`}
            >
              <span>👥</span>
              Team
            </Link>

          </nav>

        </div>

        <div className="user-profile">

          <div className="avatar">
            ST
          </div>

          <div>
            <h4>Student</h4>
            <p>Student Org Member</p>
          </div>

        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* TOPBAR */}
        <header className="topbar">

          <div>
            <h1>Budget</h1>
            <p>A.Y. 2025-2026</p>
          </div>

          <button className="new-btn">
            + New Event
          </button>

        </header>

        {/* TOTAL BUDGET */}
        <div className="budget-top-card">

          <h3>Total Budget:</h3>

          <div className="budget-progress">

            <div className="budget-progress-fill"></div>

          </div>

        </div>

        {/* BUDGET GRID */}
        <div className="budget-grid">

          {/* LEFT */}
          <div className="budget-card">

            <h3>Budget by Event</h3>

            <div className="chart-placeholder"></div>

          </div>

          {/* RIGHT */}
          <div className="budget-card">

            <h3>Monthly Spend vs Budget</h3>

            <div className="chart-placeholder"></div>

          </div>

        </div>

        {/* TABLE */}
        <div className="budget-card">

          <h3>Budget Entries</h3>

          <div className="table-placeholder"></div>

        </div>

      </main>

    </div>
  );
}