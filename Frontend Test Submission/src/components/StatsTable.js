import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import useUrlStore from "../state/urlStore";

function StatsTable() {
  const urls = useUrlStore(state => state.urls);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Shortcode</TableCell>
          <TableCell>Original URL</TableCell>
          <TableCell>Clicks</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {urls.map((u, i) => (
          <TableRow key={i}>
            <TableCell>{u.short}</TableCell>
            <TableCell>{u.original}</TableCell>
            <TableCell>{u.clicks || 0}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default StatsTable;
