import "./App.css";
import Navi from "./layouts/Navi";
import { Route } from "react-router";
import Search from "./layouts/Search";
import Candidate from "./pages/CandidateList";
import Employer from "./pages/EmployerList";
import Job from "./pages/JobList";

function App() {
  return (
    // <div className="App">
    //   <Navi></Navi>
    //   <main className="App">
    //     <Switch>
    //     <Route path="/" component={Search} />
    //     <Route exact path="/candidates" component={Candidate} />
    //     </Switch>
    //   </main>
    // </div>
<div className="App">
    <div className="Navi">
      <Navi />
      <Route exact path="/" component={Search} />
      
    </div>
     <div className="Main">
     <Route path="/candidates" component={Candidate} />
     <Route path="/employers" component={Employer} />
     <Route path="/jobs" component={Job} />

   </div>
  </div>
  );
}

export default App;
