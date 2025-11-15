import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./pages/portfolioPage";

function App() {

  const pathname = useLocation().pathname;
  const NoNavbarRoute = ['/'];
  return (
    <>
      {!NoNavbarRoute.includes(pathname) && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    </>
  )
}

export default App
