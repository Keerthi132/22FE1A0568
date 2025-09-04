// src/components/UrlList.js
import React from "react";
import { List, ListItem, ListItemText, Link } from "@mui/material";

const UrlList = ({ urls }) => {
  if (!urls || urls.length === 0) {
    return <p>No URLs shortened yet.</p>;
  }

  return (
    <List>
      {urls.map((item, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={
              <Link
                href={item.longUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.shortCode} {}
              </Link>
            }
            secondary={item.longUrl}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default UrlList;
