import React, { useState } from "react";

function Todo() {
  const courses = [
    {
      id: 1,
      name: "html,css",
    },
    {
      id: 2,
      name: "java",
    },
    {
      id: 3,
      name: "react",
    },
  ];
  const handleSubmit = () => {
    console.log({ id: checked });
  };
  const handleCheck = (id) => {
    setChecked(pre => {
      const isChecked = checked.includes(id)
      if (isChecked){
        return checked.filter(item => item !== id)
      } else {
        return [...pre,id]
      }
    })
  }
  const [checked, setChecked] = useState([]);
  console.log(checked);
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Đăng kí</button>
    </div>
  );
}

export default Todo;
