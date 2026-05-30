"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import "../style.css";
export default function Home() {

  const pathname = usePathname();

  const [selectedEvent, setSelectedEvent] = useState("all");

  const [events, setEvents] = useState<any[]>([]);
  const [tasks, setTasks] = useState<any[]>([]);

  const [showTaskForm, setShowTaskForm] = useState(false);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("todo");
  const [taskEvent, setTaskEvent] = useState("");
  const fetchEvents = async () => {

  const { data } = await supabase
    .from("events")
    .select("*");

  if (data) {
    setEvents(data);
  }
};

const fetchTasks = async () => {

  let query =
    supabase.from("tasks").select("*");

  if (selectedEvent !== "all") {
    query = query.eq(
      "event_id",
      selectedEvent
    );
  }

  const { data } = await query;

  if (data) {
    setTasks(data);
  }
};

const addTask = async () => {

  const { error } =
    await supabase.from("tasks").insert([
      {
        title: taskTitle,
        description: taskDescription,
        status: taskStatus,
        event_id: taskEvent,
      },
    ]);

  if (error) {
    alert(error.message);
    return;
  }

  fetchTasks();

  setTaskTitle("");
  setTaskDescription("");
  setTaskStatus("todo");
  setTaskEvent("");

  setShowTaskForm(false);
};

useEffect(() => {
  fetchEvents();
  fetchTasks();
}, [selectedEvent]);

const todoTasks =
  tasks.filter(
    (task) => task.status === "todo"
  );

const progressTasks =
  tasks.filter(
    (task) => task.status === "progress"
  );

const doneTasks =
  tasks.filter(
    (task) => task.status === "done"
  );

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

  <select
    className="filter-btn"
    value={selectedEvent}
    onChange={(e) =>
      setSelectedEvent(e.target.value)
    }
  >
    <option value="all">
      All Events
    </option>

    {events.map((event) => (
      <option
        key={event.id}
        value={event.id}
      >
        {event.title}
      </option>
    ))}
  </select>

  <button
    className="new-btn"
    onClick={() =>
      setShowTaskForm(true)
    }
  >
    + Add Task
  </button>

</div>

        </header>

{showTaskForm && (

<div className="card stat-card">

  <h2>Create Task</h2>

  <br />

  <input
    className="w-full border p-3 rounded-xl mb-3"
    placeholder="Task Title"
    value={taskTitle}
    onChange={(e) =>
      setTaskTitle(e.target.value)
    }
  />

  <textarea
    className="w-full border p-3 rounded-xl mb-3"
    placeholder="Description"
    value={taskDescription}
    onChange={(e) =>
      setTaskDescription(e.target.value)
    }
  />

  <select
    className="w-full border p-3 rounded-xl mb-3"
    value={taskStatus}
    onChange={(e) =>
      setTaskStatus(e.target.value)
    }
  >
    <option value="todo">
      To Do
    </option>

    <option value="progress">
      In Progress
    </option>

    <option value="done">
      Done
    </option>
  </select>

  <select
    className="w-full border p-3 rounded-xl mb-3"
    value={taskEvent}
    onChange={(e) =>
      setTaskEvent(e.target.value)
    }
  >
    <option value="">
      Select Event
    </option>

    {events.map((event) => (
      <option
        key={event.id}
        value={event.id}
      >
        {event.title}
      </option>
    ))}
  </select>

  <button
    className="new-btn"
    onClick={addTask}
  >
    Save Task
  </button>

</div>

)}

        {/* TASK COLUMNS */}
        <section className="task-columns">

          {/* TODO */}
          <div className="task-column">

            {todoTasks.map((task) => (

<div
  key={task.id}
  className="task-card"
>
  <h4>{task.title}</h4>
  <p>{task.description}</p>
</div>

))}
          </div>

          {/* IN PROGRESS */}
          <div className="task-column">

            {progressTasks.map((task) => (

<div
  key={task.id}
  className="task-card"
>
  <h4>{task.title}</h4>
  <p>{task.description}</p>
</div>

))}

          </div>

          {/* DONE */}
          <div className="task-column">

            {doneTasks.map((task) => (

<div
  key={task.id}
  className="task-card"
>
  <h4>{task.title}</h4>
  <p>{task.description}</p>
</div>

))}
          </div>

        </section>

      </main>

    </div>
  );
}