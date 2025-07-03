import goDaddyLogo from '/goDaddy.svg'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import RepoDetails from './pages/Details/Details'
import './App.css'

const App = () => {

  return (
    <>
      <div>
        <a href="https://www.godaddy.com/" target="_blank">
          <img src={goDaddyLogo} className="logo" alt="Go Daddy logo" />
        </a>
      </div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repo/:name" element={<RepoDetails />} />
     </Routes>
    </>
  )
}

export default App
