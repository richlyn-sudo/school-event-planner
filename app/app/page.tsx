export default function Home() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>🎓 School Event Planner</h1>
      <p>Welcome to your system</p>

      <div style={{ marginTop: "20px" }}>
        <a href="/login">Login</a> |{" "}
        <a href="/register">Register</a>
      </div>
    </main>
  );
}