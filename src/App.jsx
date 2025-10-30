import React from "react";
import Navbar from "./components/nav_bar.jsx";
import FitnessFemale from "./assets/Fitness-Female.png";

function App() {
  return (
    <div>
      {/* parent wrapper 01 */}
      <div className="h-screen w-full border-2 pt-5 border-red-500 bg-[#DBDCE0]">
        {/* parent wrapper 02 */}
        <div className="w-[80vw] mx-auto border-4 border-blue-500 h-full flex flex-col relative">
          {/* navigation bar 03 */}
          <nav className="absolute top-0 left-0 z-40 w-full border-2 p-2">
            <Navbar />
          </nav>
          {/* introduction and landing page image */}
          <div className="flex flex-1 border-3 border-orange-500">
            {/* left */}
            <div className="flex-3 text-[#363636] border-4 border-green-500">
              <div className="flex flex-col justify-center h-full px-8 ">
                <h1 className="text-5xl font-extrabold mb-2 xl:text-7xl">
                  Simplicity
                </h1>
                <h2 className="text-5xl font-extrabold mb-4 xl:text-7xl">
                  All you need to
                  <br />
                  Gain muscles
                </h2>
                <p className="text-lg  mb-2">
                  our wisdom is to gain muscle is simplicity
                  <br />
                  and there no need to complex anything
                  <br />
                  just do what need it not rocket science be fit
                </p>
                <div>
                  <button className="px-7 py-2 mt-5 bg-white rounded-full shadow font-semibold cursor-pointer">
                    Dashboard
                  </button>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="flex-2 border-4 border-purple-500 ">
              <div
                className="bg-cover bg-position-[top_30%] w-auto h-full"
                style={{ backgroundImage: `url(${FitnessFemale})` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
