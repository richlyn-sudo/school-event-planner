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
            <div className="logo-circle">⚡</div>

            <div>
              <h2>EventSync</h2>
              <p>School Planner</p>
            </div>
          </div>

          <div className="school-card">
            <span>INSTITUTION</span>
            <h3>Pamantasan ng Lungsod ng San Pablo</h3>
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

          <div className="avatar">ST</div>

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
            <h1>Schedule</h1>
            <p>A.Y. 2025-2026</p>
          </div>

          <button className="new-btn">
            + New Event
          </button>

        </header>

        {/* EMPTY CONTENT */}
        <section className="dashboard-grid">

          <div className="left-panel card">

            <div className="section-title">
              <h3>Schedule</h3>
            </div>

            <div className="empty-box"></div>

          </div>

          <div className="right-panel">

            <div className="card side-card">
              <h3>Upcoming Schedule</h3>

              <div className="empty-small"></div>
              <div className="empty-small"></div>
              <div className="empty-small"></div>
            </div>

            <div className="card side-card">
              <h3>Recent Updates</h3>

              <div className="empty-small"></div>
              <div className="empty-small"></div>
              <div className="empty-small"></div>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}