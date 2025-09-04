import React from "react";
import { Container, Typography } from "@mui/material";
import StatsTable from "../components/StatsTable";

function Stats() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        URL Statistics
      </Typography>
      <StatsTable />
    </Container>
  );
}

export default Stats;
