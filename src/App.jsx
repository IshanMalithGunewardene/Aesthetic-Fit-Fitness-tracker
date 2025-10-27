import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://vite.dev"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <img src={viteLogo} className="h-20 w-20" alt="Vite logo" />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <img
              src={reactLogo}
              className="h-20 w-20 animate-spin-slow"
              alt="React logo"
            />
          </a>
        </div>

        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
          Vite + React + Tailwind
        </h1>

        <div className="space-y-4">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Count is {count}
          </button>

          <p className="text-gray-600 text-center">
            Edit{" "}
            <code className="bg-gray-100 px-2 py-1 rounded text-sm text-purple-600">
              src/App.jsx
            </code>{" "}
            and save to test HMR
          </p>
        </div>

        <p className="text-gray-500 text-sm text-center mt-6">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
