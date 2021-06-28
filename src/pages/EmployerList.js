import React, { useState, useEffect } from "react";
import { Form, Card } from "semantic-ui-react";
import { Grid, Segment } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import EmployerService from "../services/employerService";

export default function Employer() {
  const [employers, setEmployers] = useState([]);
  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);
  return (
    <div className="employer" style={{ backgroundColor: "rgb(151, 135, 135)" }}>
      <Grid>
        <Grid.Row stretched>
          <Grid.Column width={4}>
            <Form>
              <Form.Group
                style={{ width: "100%", marginLeft: "50px", marginTop: "75px" }}
              >
                <div class="form-outline">
                  <input
                    type="search"
                    id="form1"
                    class="form-control"
                    placeholder="Search Employers"
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  type="submit"
                  style={{ width: "30px", height: "38px" }}
                >
                  <i class="fas fa-search"></i>
                </button>
              </Form.Group>

              <Form.Group style={{ marginLeft: "40px" }}>
                <Form.Field
                  placeholder="Location"
                  control="select"
                  style={{
                    width: "195%",
                    marginTop: "50px",
                    height: "50px",
                  }}
                >
                  <option value="male">Location</option>
                  <option value="male">Full Time</option>
                  <option value="female">Part Time</option>
                </Form.Field>
              </Form.Group>
              <Card
                style={{ marginLeft: "50px", marginTop: "50px", width: "60%" }}
              >
                <Form.Group grouped style={{ marginLeft: "50px" }}>
                  <label>Employer Category</label>
                  <Form.Field
                    label="Automotive Jobs"
                    control="input"
                    type="checkbox"
                  />
                  <Form.Field
                    label="Design & Multimedia"
                    control="input"
                    type="checkbox"
                  />
                  <Form.Field label="Finance" control="input" type="checkbox" />
                </Form.Group>
              </Card>
            </Form>
          </Grid.Column>
          <Grid.Column
            style={{ marginTop: "75px", height: "300px", width: "1100px" }}
          >
            {employers.map((employer) => (
              <Segment key={employer.id}>
                <Image
                  style={{
                    marginLeft: "70px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  size="small"
                  src="data:image/jpeg;base64,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"
                />
                <Card.Header
                  style={{ marginLeft: "300px", marginTop: "-90px" }}
                >
                  <Link to={`/employers/${employer.companyName}`}>
                    {employer.companyName}
                  </Link>
                </Card.Header>
                <Card.Description style={{ marginLeft: "300px" }}>
                  Web Designer
                </Card.Description>
                <Link
                  to={`/employers/${employer.companyName}`}
                  variant="body2"
                  style={{
                    border: "1px solid black",
                    fontSize: "16px",
                    marginLeft: "900px",
                  }}
                >
                  See Details{" "}
                </Link>
              </Segment>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
