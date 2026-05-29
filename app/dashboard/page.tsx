"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabaseClient";

export default function Dashboard() {
  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [venue, setVenue] = useState("");
  const [eventDate, setEventDate] = useState("");

  const [events, setEvents] = useState<any[]>([]);

  // FETCH EVENTS
  const fetchEvents = async () => {
    const { data } = await supabase
      .from("events")
      .select("*")
      .order("id", { ascending: false });

    if (data) {
      setEvents(data);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // ADD EVENT
  const addEvent = async () => {
    const { error } = await supabase.from("events").insert([
      {
        title,
        description,
        venue,
        event_date: eventDate,
      },
    ]);

    if (error) {
      console.log(error);
      alert(error.message);
    } else {
      alert("Event Added!");

      setTitle("");
      setDescription("");
      setVenue("");
      setEventDate("");

      setShowForm(false);

      fetchEvents();
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-500 to-purple-600">

      {/* SIDEBAR */}
      <div className="w-[260px] bg-white/20 backdrop-blur-md shadow-xl p-6 border-r border-white/20">

        <h1 className="text-3xl font-bold text-white mb-2">
          EventSync
        </h1>

        <p className="text-white/80 mb-8">
          School Planner
        </p>

        {/* NAVIGATION */}
        <div className="space-y-4">

          <Link
            href="/dashboard"
            className="block p-3 rounded-xl bg-white text-blue-700 font-semibold"
          >
            🏠 Dashboard
          </Link>

          <Link
            href="/tasks"
            className="block p-3 rounded-xl hover:bg-white/20 text-white transition"
          >
            ☑ Tasks
          </Link>

          <Link
            href="/schedule"
            className="block p-3 rounded-xl hover:bg-white/20 text-white transition"
          >
            📅 Schedule
          </Link>

          <Link
            href="/budget"
            className="block p-3 rounded-xl hover:bg-white/20 text-white transition"
          >
            💰 Budget
          </Link>

          <Link
            href="/team"
            className="block p-3 rounded-xl hover:bg-white/20 text-white transition"
          >
            👥 Team
          </Link>

        </div>

        {/* PROFILE */}
        <div className="mt-10 bg-white/20 p-4 rounded-2xl">

          <h2 className="font-bold text-white">
            Student
          </h2>

          <p className="text-sm text-white/70">
            Student Org Member
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-10">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">

          <div>
            <h1 className="text-5xl font-bold text-white">
              Dashboard
            </h1>

            <p className="text-white/80 mt-2">
              A.Y. 2025-2026
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
          >
            + New Event
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-4 gap-5 mb-8">

          <div className="bg-white/90 p-6 rounded-3xl shadow-xl">
            <h2 className="text-4xl font-bold text-black">
              {events.length}
            </h2>

            <p className="text-gray-600 mt-2">
              Active Events
            </p>
          </div>

          <div className="bg-white/90 p-6 rounded-3xl shadow-xl">
            <h2 className="text-4xl font-bold text-black">
              1
            </h2>

            <p className="text-gray-600 mt-2">
              Tasks Pending
            </p>
          </div>

          <div className="bg-white/90 p-6 rounded-3xl shadow-xl">
            <h2 className="text-4xl font-bold text-black">
              ₱0
            </h2>

            <p className="text-gray-600 mt-2">
              Budget Spent
            </p>
          </div>

          <div className="bg-white/90 p-6 rounded-3xl shadow-xl">
            <h2 className="text-4xl font-bold text-black">
              1
            </h2>

            <p className="text-gray-600 mt-2">
              Team Members
            </p>
          </div>
        </div>

        {/* FORM */}
        {showForm && (
          <div className="bg-white/90 p-8 rounded-3xl shadow-xl mb-8 max-w-xl">

            <h2 className="text-3xl font-bold mb-6 text-black">
              Create Event
            </h2>

            <input
              className="w-full border p-3 mb-4 rounded-xl text-black"
              placeholder="Event Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="w-full border p-3 mb-4 rounded-xl text-black"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              className="w-full border p-3 mb-4 rounded-xl text-black"
              placeholder="Venue"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
            />

            <input
              type="date"
              className="w-full border p-3 mb-6 rounded-xl text-black"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />

            <button
              onClick={addEvent}
              className="bg-green-600 text-white px-6 py-3 rounded-2xl hover:scale-105 transition"
            >
              Save Event
            </button>
          </div>
        )}

        {/* EVENT LIST */}
        <div className="grid md:grid-cols-2 gap-6">

          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white/90 p-6 rounded-3xl shadow-xl"
            >
              <h2 className="text-3xl font-bold text-black">
                {event.title}
              </h2>

              <p className="mt-4 text-gray-700">
                {event.description}
              </p>

              <div className="mt-5 text-gray-600">
                <p>📍 {event.venue}</p>
                <p>📅 {event.event_date}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}