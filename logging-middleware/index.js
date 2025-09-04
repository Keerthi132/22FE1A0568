const axios = require("axios");

let authToken = null;

function setAuthToken(token) {
  authToken = token;
}

/**
 * Log function
 * @param {string} stack - "frontend" | "backend"
 * @param {string} level - "debug" | "info" | "warn" | "error" | "fatal"
 * @param {string} pkg   - package name
 * @param {string} message - message to log
 */
async function Log(stack, level, pkg, message) {
  if (!authToken) {
    console.error("Auth token missing. Call setAuthToken(token).");
    return;
  }

  try {
    const res = await axios.post(
      "http://20.244.56.144/evaluation-service/logs",
      { stack, level, package: pkg, message },
      { headers: { Authorization: `Bearer ${authToken}` } }
    );
    console.log("Log created:", res.data);
  } catch (err) {
    console.error("Logging failed:", err.message);
  }
}

module.exports = { setAuthToken, Log };
