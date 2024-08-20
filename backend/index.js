const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Ensure axios is required
const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "bb0b6768-a9f9-48ec-ac47-311e8f570517" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    // Handle ECONNRESET error specifically
    if (e.code === 'ECONNRESET') {
      console.error('Connection was reset:', e.message);
      return res.status(502).json({ message: "Bad Gateway: Connection was reset." });
    }

    // Handle other types of errors
    if (e.response) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      console.error('Unexpected error:', e.message);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
