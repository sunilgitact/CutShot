import {BrowserRouter, Route, Routes} from "react-router-dom"
import FirstPage from "./Components/FirstPage/FirstPage";
import LastPage from "./Components/LastPage/LastPage";
import Navbar from "./Components/NavBar.js/Navbar2";
import SecoundPage from "./Components/SecoundPage/SecoundPage";
import ThirdPage from "./Components/ThirdPage/ThirdPage";

function App() {
  return (
    <>
    
    <BrowserRouter>
    
    <Navbar/>
      <Routes>
        <Route path="/FirstPage" element={<FirstPage/>}/>
        <Route path="SecoundPage" element={<SecoundPage/>}/>
        <Route path="ThirdPage" element={<ThirdPage/>}/> 
        <Route path="LastPage" element={<LastPage/>}/> 
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;










// import { BrowserRouter, Route, Routes} from "react-router-dom"
// import Navbar2 from "./Components/NavBar.js/Navbar2";
// import FirstPage from '/Components'
// import SecoundPage from '/Components'


// function App() {
//   return (
//     <>    
//     <BrowserRouter> 
//     <Navbar2/>
//       <Routes>
//         <Route path="/FirstPage" element={<FirstPage/>}/>
//         <Route path="SecoundPage" element={<SecoundPage/>}/>
//       </Routes>
//     </BrowserRouter>
//     </>
  
//   );
// }

// export default App;
