import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Fill from './pages/Fill'
import My from './pages/My'

export default function App(){
  return (
    <BrowserRouter>
      <nav className="p-4 bg-blue-500 text-white flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/my">My Slam Books</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/fill/:id" element={<Fill/>}/>
        <Route path="/my" element={<My/>}/>
      </Routes>
    </BrowserRouter>
  )
}
