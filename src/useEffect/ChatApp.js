import React, {  useState } from "react";

const lessons = [
  {
    id: 1,
    names: "UseState",
  },
  {
    id: 2,
    names: "useReducer",
  },
  {
    id: 3,
    names: "useEffect",
  },
];
function ChatApp() {
  const [lessonId, setLessonId] = useState(1);
  
  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{
              color: lessonId === lesson.id ? "red" : "#333",
            }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lessons.names}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatApp;
