import { useState } from "react";

function App() {
  const [color, setColor] = useState("lightblue"); // initial background color

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-yellow px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>

          <button
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            green
          </button>

          <button
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            blue
          </button>

          <button
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
