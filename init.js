import app from "./app";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅Listening on http://localhost:${PORT}`); // this is not "" but backslash

app.listen(PORT, handleListening);
