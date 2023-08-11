import { useEffect, useState } from "react";
import "./App.css";

import axios from "axios";

function App() {
  useEffect(() => {
    (async () => {
      const data = await axios.get("http://localhost:5001/login");
      console.log(data.data);
    })();
  }, []);
  return <>Home</>;
}

export default App;
