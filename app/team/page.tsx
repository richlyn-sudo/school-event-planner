"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../style.css";

export default function Home() {

  const pathname = usePathname();

  return (
    <div className="container">

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

      {/* MAIN */}
      <main className="main-content">

        {/* TOPBAR */}
        <header className="topbar">

          <div>
            <h1>Team</h1>
          </div>

          <button className="new-btn">
            + New Event
          </button>

        </header>

        {/* TEAM GRID */}
        <div className="team-grid">

          <div className="team-card">

            <div className="team-profile">

              <div className="team-avatar">
                ST
              </div>

              <div>
                <h3>Student</h3>
                <p>Student Org Member</p>
              </div>

            </div>

            <div className="team-stats">

              <div className="team-stat-box">
                <h2>0</h2>
                <p>Events</p>
              </div>

              <div className="team-stat-box">
                <h2>0</h2>
                <p>Tasks</p>
              </div>

            </div>

          </div>

          <div className="team-card">

            <div className="team-profile">

              <div className="team-avatar purple">
                AR
              </div>

              <div>
                <h3>Member</h3>
                <p>Marketing Lead</p>
              </div>

            </div>

            <div className="team-stats">

              <div className="team-stat-box">
                <h2>0</h2>
                <p>Events</p>
              </div>

              <div className="team-stat-box">
                <h2>0</h2>
                <p>Tasks</p>
              </div>

            </div>

          </div>

        </div>

        {/* ASSIGNMENTS */}
        <div className="assignment-card">

          <h3>Event Assignments</h3>

          <div className="empty-box"></div>

        </div>

      </main>

    </div>
  );
}