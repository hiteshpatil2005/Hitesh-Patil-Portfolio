import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Navbar } from "./components/Navbar";

function App() {

  const pathname = useLocation().pathname;
  const NoNavbarRoute = ['/'];
  return (
    <>
      {!NoNavbarRoute.includes(pathname) && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App
