const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const dotenv = require("dotenv");

dotenv.config();
const router = express.Router();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URL = "http://127.0.0.1:3000/oauth";

if (!CLIENT_ID || !CLIENT_SECRET) {
  throw new Error("Missing CLIENT_ID or CLIENT_SECRET in .env file");
}

const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
const authorizeUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline",
  scope: "https://www.googleapis.comm/auth.userinfo.profile openid",
  prompt: "consent",
});
router.post("/", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Referrer-Policy", "no-referrer-when-downgrade");

    res.json({ url: authorizeUrl });
    const { code } = req.body;
    if (!code) {
      return res.status(400).json({ error: "Authorization code is required" });
    }

    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    res.json({ tokens });
  } catch (error) {
    console.error("OAuth error:", error);
    res.status(500).json({ error: "OAuth authentication failed" });
  }
});

module.exports = router;
