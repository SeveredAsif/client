import React, { useState } from "react";
import axios from 'axios'

function Education({ skills, setSkills }) {
  const [newSkill, setnewSkill] = useState({
    id: "",
    skill: "",
  });
  const handleChange = (e) => {
    setnewSkill({
      id: Date.now(),
      skill: e.target.value,
    });
    console.log(newSkill);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSkills([newSkill,...skills]);
    axios.post('http://localhost:8888/skills',newSkill)
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
    setnewSkill({ id: "", skill: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Skill"
        value={newSkill.skill}
        placeholder="Add Skill"
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Education;
