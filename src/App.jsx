import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="w-full h-auto bg-slate-950 min-h-screen">
          <Header />
        </div>
      </Router>
    </>
  );
}

export default App;
