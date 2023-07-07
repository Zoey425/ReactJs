import { BrowserRouter, Route, Routes }  from "react-router-dom";

import Home from "pages/Home";
import Edit from "pages/Edit";
import Diary from "pages/Diary";
import New from "pages/New";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <h1>App.js</h1>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
