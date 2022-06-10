import { useState, useEffect } from "react";
import React from "react";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { useGlobalContext } from "../context/appContext";
import Jobs from "../components/Jobs";

const Dashboard = () => {
  const [values, setValues] = useState({ company: "", position: "" });
  const { createJob, fetchJobs } = useGlobalContext();
  const isLoading = false;

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { company, position } = values;
    if (company && position) {
      createJob(values);
      setValues({ company: "", position: "" });
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          m: "10px",
        }}
      >
        <TextField
          margin="normal"
          id="company"
          label="company address"
          name="company"
          autoFocus
          value={values.company}
          onChange={handleChange}
          rows={3}
        />
        <TextField
          margin="normal"
          name="position"
          label="position"
          type="position"
          id="position"
          value={values.position}
          onChange={handleChange}
          rows={6}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={!values.position}
        >
          {isLoading ? "Adding New Job..." : "Add Job"}
        </Button>
      </Box>
      <Jobs />
    </>
  );
};

export default Dashboard;
