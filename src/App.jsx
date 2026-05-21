import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function AppLayout() {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  return (
    <>
      {!isHomePage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
