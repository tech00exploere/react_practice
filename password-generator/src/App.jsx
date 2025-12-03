import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength]=useState(9);
  const [password, setPassword] =useState("");
  const [includeUppercase, setIncludeUppercase]= useState(false);
  const [includeChar, setIncludeChar]=useState(false);
  const [numberAllowed, setNumberAllowed]=useState(false);

  const passwordGenerator = useCallback(()=>{
    let tempPassword = "";
    let characters = "abcdefghijklmnopqrstuvwxyz";

    if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) characters += "0123456789";
    if (includeChar) characters += "!@#$%^&*()_+~";

    for (let i =0; i <length;i++) {
      const randomIndex = Math.floor(Math.random()*characters.length);
      tempPassword+=characters[randomIndex];
    }

    setPassword(tempPassword);
  }, [length, includeUppercase, includeChar, numberAllowed]);

  useEffect(()=> {
    passwordGenerator();
  }, [passwordGenerator]);

  const copyToClipboard = ()=> {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="border">
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-5">
      <div className="bg-gray-800 p-6 rounded-2xl w-full max-w-xl shadow-xl border border-gray-700">


        
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-400">
           Password Generator
        </h1>
{/* password generat krene ke lye */}
        <div className="flex items-center mb-4">
          <input
            value={password}
            readOnly
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none"
          />
          <button
            className="ml-3 px-4 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
       {/* options ke lye */}
        <div className="space-y-4">
        {/* length sliger ke lye */}
          <div className="flex justify-between items-center">
            <label className="text-lg">Length: {length}</label>
            <input
              type="range"
              min="5"
              max="25"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-1/2"
            />
          </div>

         {/* uppercase ke lye */}
          <label className="flex items-center space-x-4">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
            <span>Include Uppercase Letters</span>
          </label>

         {/* num ke lye */}
          <label className="flex items-center space-x-4">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(!numberAllowed)}
            />
            <span>Include Numbers</span>
          </label>

          {/* special char ke lye */}
          <label className="flex items-center space-x-4">
            <input
              type="checkbox"
              checked={includeChar}
              onChange={() => setIncludeChar(!includeChar)}
            />
            <span>Include Special Characters</span>
          </label>
        </div>

        {/* Generate Button */}
        <button
          className="mt-6 w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-semibold text-lg"
          onClick={passwordGenerator}
        >
          Generate Password
        </button>
      </div>
    </div>
    </div>
  );
}

export default App;
