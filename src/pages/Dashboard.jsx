import { useState, useEffect } from "react";
import React from "react";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";

const Dashboard = () => {
  const [values, setValues] = useState({ company: "", position: "" });
  console.log(values);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { company, position } = values;
    if (company && position) {
      setValues({ company: "", position: "" });
    }
  };

  let isLoading = true;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ display: "flex", m: "10px" }}
    >
      <TextField
        margin="normal"
        id="company"
        label="company address"
        name="company"
        autoFocus
        value={values.company}
        onChange={handleChange}
        rows={6}
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
        {!isLoading ? "Adding New Job..." : "Add Job"}
      </Button>
    </Box>
  );
};

export default Dashboard;
