import React from "react";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import Search from "./Search";
import Candidate from "../pages/CandidateList";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={12}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}