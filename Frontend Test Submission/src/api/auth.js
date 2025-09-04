import axios from "axios";
import { Log } from "logging-middleware";

const API_BASE = "http://20.244.56.144/evaluation-service";

export async function registerUser(data) {
  const res = await axios.post(`${API_BASE}/register`, data);
  return res.data;
}

export async function getAuthToken(data) {
  const res = await axios.post(`${API_BASE}/auth`, data);
  return res.data;
}


export async function fetchWithLog(url, config = {}) {
  try {
    const res = await axios.get(url, config);
    await Log("frontend", "info", "utils", `Fetched ${url}`);
    return res.data;
  } catch (err) {
    await Log("frontend", "error", "utils", `Failed to fetch ${url}`);
    throw err;
  }
}
