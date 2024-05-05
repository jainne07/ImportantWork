import React, { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState();
  const accordion = [
    {
      title: "React",
      content: "this is test react",
    },
    { title: "Javascript", content: "this is javascript" },
  ];

  return (
    <>
      <div>
        <h1>Tab</h1>
        <ul className="tab">
          {accordion.map((item) => (
            <li
              key={item.title}
              style={{ cursor: "pointer" }}
              onClick={() =>
                setIsActive({ title: item.title, content: item.content })
              }
            >
              {item.title}
            </li>
          ))}
        </ul>
        {isActive && <p>{isActive.content}</p>}
      </div>
      <div>
        <h1>Accordion</h1>
        <ul>
          {accordion.map((item) => (
            <li
              key={item.title}
              style={{ cursor: "pointer" }}
              onClick={() => setIsActive(item.title)}
            >
              <h1>{item.title}</h1>
              {isActive === item.title && <p>{item.content}</p>}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
