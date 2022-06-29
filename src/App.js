import Contributors from "./pages/Contributors/Contributors";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import SingleContributor from "./pages/SingleContributor/SingleContributor";
import Repositories from "./pages/Repositories/Repositories";
import RepoDetails from "./pages/RepoDetails/RepoDetails";

function App() {
  return (
  
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Contributors/>}/>
        <Route path='/details/:name' element={<SingleContributor/>}/>
        <Route path='/repos' element={<Repositories/>}/>
         <Route path='/repos/:name' element={<RepoDetails/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
