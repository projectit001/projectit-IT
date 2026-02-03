import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ message: "API ใช้งานได้แล้ว 🎉" });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "user@test.com" && password === "123456") {
    res.json({ token: "abc123xyz" });
  } else {
    res.status(401).json({ message: "Login failed" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
