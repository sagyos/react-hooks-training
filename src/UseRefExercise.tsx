import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

type Config = {
  skipCheck: boolean;
};

function getConfig(): Config {
  console.log("get config");

  return {
    skipCheck: true,
  };
}

function UseEffectExercise() {
  const [config, setConfig] = useState<Config>({ skipCheck: false });

  useEffect(() => {
    function fetchConfig() {
      setTimeout(() => {
        const config = getConfig();
        setConfig(config);
      }, 1000);
    }

    fetchConfig();
  }, []);

  const handleSubmit = () => {
    if (config.skipCheck) {
      console.log("submitting form");
      return;
    }

    console.log("validating form");
  };

  return (
    <>
      <div>
        <a>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">config is {JSON.stringify(config)}</div>
      <div className="card">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

// function UseEffectExercise() {
//   const config = useRef<Config>(getConfig());
//   const [count, setCount] = useState(0);

//   const handleSubmit = () => {
//     if (config.current.skipCheck) {
//       console.log("submitting form");
//       return;
//     }

//     console.log("validating form");
//   };

//   return (
//     <>
//       <div>
//         <a>
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a>
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <div className="card">config is {JSON.stringify(config.current)}</div>

//       <div className="row">
//         <div className="card">
//           <button onClick={() => setCount((count) => count + 1)}>
//             count is {count}
//           </button>
//         </div>
//         <div className="card">
//           <button onClick={handleSubmit}>Submit</button>
//         </div>
//       </div>
//     </>
//   );
// }
export default UseEffectExercise;
