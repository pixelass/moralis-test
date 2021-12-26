import React from "react";
import { useMoralis } from "react-moralis";
function App() {
  const { authenticate, isAuthenticated, user } = useMoralis();

  return (
    <div>
      <h1>{isAuthenticated ? "Yes" : "no"}</h1>
      <button
        onClick={() => {
          void authenticate({ signingMessage: "Hello Moralis!" });
        }}
      >
        Authenticate
      </button>
    </div>
  );
}

export default App;
