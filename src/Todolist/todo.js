import React, { useState } from "react";

function TodoList() {
  const storageJobs = JSON.parse(localStorage.getItem('jobs'))
  
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(storageJobs ?? []);
  const handleSubmit = () => {
    setJobs((pre) => {
      const newJobs = [...pre, job];
      const jsonJobs = JSON.stringify(newJobs);
      //luu vao local
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };
  return (
    <div style={{ padding: 32 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
