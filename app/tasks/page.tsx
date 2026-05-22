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

            <a href="#" className="menu-item">
              <span>👥</span>
              Team
            </a>

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

        {/* TOP */}
        <header className="topbar">

          <div>
            <h1>Tasks</h1>
            <p>A.Y. 2025-2026</p>
          </div>

          <div className="top-buttons">

            <button className="filter-btn">
              All Events
            </button>

            <button className="new-btn">
              + Add Task
            </button>

          </div>

        </header>

        {/* TASK COLUMNS */}
        <section className="task-columns">

          {/* TODO */}
          <div className="task-column">

            <div className="column-header">
              <h3>To Do</h3>
              <span>4</span>
            </div>

            <div className="task-card">
              <h4>Sample Task</h4>
              <p>Task details here</p>
            </div>

            <div className="task-card">
              <h4>Sample Task</h4>
              <p>Task details here</p>
            </div>

            <div className="task-card">
              <h4>Sample Task</h4>
              <p>Task details here</p>
            </div>

          </div>

          {/* IN PROGRESS */}
          <div className="task-column">

            <div className="column-header">
              <h3>In Progress</h3>
              <span>3</span>
            </div>

            <div className="task-card">
              <h4>Sample Task</h4>
              <p>Task details here</p>
            </div>

            <div className="task-card">
              <h4>Sample Task</h4>
              <p>Task details here</p>
            </div>

            <div className="task-card">
              <h4>Sample Task</h4>
              <p>Task details here</p>
            </div>

          </div>

          {/* DONE */}
          <div className="task-column">

            <div className="column-header">
              <h3>Done</h3>
              <span>3</span>
            </div>

            <div className="task-card">
              <h4>Sample Task</h4>
              <p>Task details here</p>
            </div>

            <div className="task-card">
              <h4>Sample Task</h4>
              <p>Task details here</p>
            </div>

            <div className="task-card">
              <h4>Sample Task</h4>
              <p>Task details here</p>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}