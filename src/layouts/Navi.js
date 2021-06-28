import React, {  useState, useEffect  } from "react";
import { useHistory } from "react-router";
import { Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { Link } from "react-router-dom";
import CandicateService from "../services/candidateService";

export default function Navi() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candicateService = new CandicateService();
    candicateService
      .getCandicates()
      .then((result) => setCandidates(result.data.data));
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();
  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  const [navLinkOpen, navLinkToggle] = useState(false);
  const handleNavLinksToggle = () => {
    navLinkToggle(!navLinkOpen);
  };

  const renderClasses = () => {
    let classes = "navlinks";
    if (navLinkOpen) {
      classes += " active";
    }
    return classes;
  };

  return (
    <nav>
      <div className="home">
        <div className="logo">
          <i className="fab fa-asymmetrik"></i>
          <h4>HMRS</h4>
        </div>
        <ul className={renderClasses()}>
          <li className="link">
            <Link to={`/`}>Home</Link>
            </li>
          <li className="link" >
            <Link to={`/candidates`}>Candidates</Link>
          </li>
          <li className="link"><Link to={`/employers`}>Employers</Link></li>
          <li className="link"><Link to={`/jobs`}>Jobs</Link></li>
        </ul>

        <Menu.Menu position="right">
          {isAuthenticated ? (
            <SignedIn signOut={handleSignOut} />
          ) : (
            <SignedOut signIn={handleSignIn} />
          )}
        </Menu.Menu>
      </div>
      <div onClick={handleNavLinksToggle} className="hamburger-toggle">
        <i className="fas fa-bars fa-lg"></i>
      </div>
    </nav>
  );
}
