import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

export default function Fruit() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch("https://example.com/api/fruits") 
      .then((res) => res.json())
      .then((data) => setFruits(data))
      .catch((err) => console.error("خطأ في جلب البيانات:", err));
  }, []);

  return (
    <div>
      <h2>Some Fruit</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <Apples fruits={fruits} />
      <Pears fruits={fruits} />
    </div>
  );
}

function Apples({ fruits }) {
  const apples = fruits.filter((f) => f.toLowerCase().includes("apple"));
  return (
    <div>
      <h3>Apples</h3>
      <ul>
        {apples.map((apple, i) => (
          <li key={i}>{apple}</li>
        ))}
      </ul>
    </div>
  );
}

function Pears({ fruits }) {
  const pears = fruits.filter((f) => f.toLowerCase().includes("pear"));
  return (
    <div>
      <h3>Pears</h3>
      <ul>
        {pears.map((pear, i) => (
          <li key={i}>{pear}</li>
        ))}
      </ul>
    </div>
  );
}

/*const root = createRoot(document.getElementById("root"));
root.render(<Fruit />);
*/
