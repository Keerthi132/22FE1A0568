# Logging Middleware

Reusable logging package for frontend/backend apps.  
Usage:

const { setAuthToken, Log } = require("logging-middleware");
setAuthToken("<JWT>");
Log("frontend", "info", "component", "Button clicked");
