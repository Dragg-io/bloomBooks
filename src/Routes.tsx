import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Genres } from "./pages/Genres";
import { Books } from "./pages/Books";


export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/genero" element={<Genres />} />
        <Route path="/genero/:genreId" element={<Books />} />
      </Routes>
    </Router>
  )
}