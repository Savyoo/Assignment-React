import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import InsertUser from "./components/insertUser";
import InsertCompany from "./components/insertCompany";
import ManageUser from "./components/manageUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Body} />
          <Route path="/insertUser" component={InsertUser} />
          <Route path="/insertCompany" component={InsertCompany} />
          <Route path="/manageUser" component={ManageUser} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
