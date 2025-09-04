// src/logging-middleware/index.js

// Simple browser logger (no axios, no backend)
let logs = JSON.parse(localStorage.getItem("logs")) || [];

/**
 * Log an event
 * @param {string} event - Event name (e.g., "SHORTEN_URL")
 * @param {object} details - Extra details about the event
 */
function logEvent(event, details = {}) {
  const logEntry = {
    event,
    details,
    timestamp: new Date().toISOString(),
  };

  logs.push(logEntry);
  localStorage.setItem("logs", JSON.stringify(logs));

  console.log("[LOG EVENT]", logEntry);
}

/**
 * Get all stored logs
 */
function getLogs() {
  return logs;
}

/**
 * Clear logs
 */
function clearLogs() {
  logs = [];
  localStorage.removeItem("logs");
  console.log("All logs cleared.");
}

// ✅ CommonJS export (works with your setup)
module.exports = { logEvent, getLogs, clearLogs };
