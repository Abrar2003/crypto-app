import { Routes, Route } from "react-router-dom"
import Tokenpage from "../pages/Tokenpage"
import Pairpage from "../pages/Pairpage"
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Tokenpage />} />
        <Route path="/pair" element={<Pairpage />} />
    </Routes>
  )
}

export default AllRoutes