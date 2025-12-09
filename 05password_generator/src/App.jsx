import { useState, useCallback, useRef, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characters, setCharacters] = useState(true);
  const [specialCharacters, setSpecialCharacters] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);

  function passwordGenerator() {
    let pass = "";
    let str = "";
    // Add letters
    if (characters) {
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    }

    // Add numbers
    if (numberAllowed) {
      str += "0123456789";
    }

    // Add special characters
    if (specialCharacters) {
      str += "@#$%&*+_!~{}";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }

  const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characters, specialCharacters]);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-start pt-10 text-white">
        <div
          className="flex flex-wrap justify-center items-center
         w-96 h-12 p-2 mt-10 rounded-md text-white"
        >
          <h1
            className="flex justify-center items-center font-bold
           font-mono text-3xl mb-2"
          >
            Password Generator{" "}
          </h1>
        </div>

        <div
          className="flex  flex-wrap justify-center items-center
            w-[800px] h-[350px] p-2 bg-gray-800 mt-10 rounded-md gap-3"
        >
          <div className="flex w-[40rem] justify-items-center ml-14">
            <input
              type="text"
              value={password}
              placeholder="Password"
              className="w-[650px] max-w-sm p-4 rounded-md bg-black"
              readOnly
              ref={passwordRef}
            ></input>

            <button
              onClick={copyPassword}
              className={`w-[6rem] font-mono font-bold h-14 p-4 
                    rounded-md text-xl transition-all duration-200
                    ${
                      copied
                        ? "bg-green-800 "
                        : "bg-green-600 hover:bg-green-700"
                    }`}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="flex text-sm gap-x-2 w-full ml-14">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={50}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              ></input>
              <label
                className="font-mono text-lg font-bold 
                text-blue-600"
              >
                Length : {length}
              </label>
            </div>

            <div className="flex items-center gap-x-1 c ml-2.5">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              ></input>

              <label
                className="font-mono text-lg font-bold 
                text-blue-600 ml-2"
              >
                Numbers
              </label>
            </div>

            <div className="flex items-center gap-x-1 c ml-2.5">
              <input
                type="checkbox"
                defaultChecked={specialCharacters}
                id="specialCharactersInput"
                onChange={() => {
                  setSpecialCharacters((prev) => !prev);
                }}
              ></input>

              <label
                className="font-mono text-lg font-bold 
                text-blue-600 ml-2"
              >
                specialCharacters
              </label>
            </div>

            <div className="flex items-center gap-x-1 c ml-2.5">
              <input
                type="checkbox"
                defaultChecked={characters}
                id="characterInput"
                onChange={() => {
                  setCharacters((characters) => !characters);
                }}
              ></input>

              <label
                className="font-mono text-lg font-bold 
                text-blue-600 ml-2"
              >
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
