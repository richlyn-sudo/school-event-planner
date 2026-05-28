"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../style.css";

export default function DashboardPage() {

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
                pathname === "/dashboard"
                  ? "active"
                  : ""
              }`}
            >
              <span>🏠</span>
              Dashboard
            </Link>

            <Link
              href="/tasks"
              className={`menu-item ${
                pathname === "/tasks"
                  ? "active"
                  : ""
              }`}
            >
              <span>☑</span>
              Tasks
            </Link>

            <Link
              href="/schedule"
              className={`menu-item ${
                pathname === "/schedule"
                  ? "active"
                  : ""
              }`}
            >
              <span>📅</span>
              Schedule
            </Link>

            <Link
              href="/budget"
              className={`menu-item ${
                pathname === "/budget"
                  ? "active"
                  : ""
              }`}
            >
              <span>💰</span>
              Budget
            </Link>

            <a
              href="#"
              className="menu-item"
            >
              <span>👥</span>
              Team
            </a>

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

      <main className="main-content">

        <header className="topbar">

          <div>
            <h1>Dashboard</h1>
            <p>A.Y. 2025-2026</p>
          </div>

          <button className="new-btn">
            + New Event
          </button>

        </header>

        <section className="stats">

          <div className="card stat-card">
            <h2>0</h2>
            <p>Active Events</p>
          </div>

          <div className="card stat-card">
            <h2>0</h2>
            <p>Tasks Pending</p>
          </div>

          <div className="card stat-card">
            <h2>₱0</h2>
            <p>Budget Spent</p>
          </div>

          <div className="card stat-card">
            <h2>0</h2>
            <p>Team Members</p>
          </div>

        </section>

        <section className="dashboard-grid">

          <div className="left-panel card">

            <div className="section-title">
              <h3>Events</h3>
            </div>

            <div className="empty-box"></div>

          </div>

          <div className="right-panel">

            <div className="card side-card">

              <h3>
                Upcoming Deadlines
              </h3>

              <div className="empty-small"></div>
              <div className="empty-small"></div>
              <div className="empty-small"></div>

            </div>

            <div className="card side-card">

              <h3>
                Recent Activity
              </h3>

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