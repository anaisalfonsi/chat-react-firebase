import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import { useState } from 'react';


function App() {
  const [pseudo, setPseudo] = useState("");


  return (
    <BrowserRouter>
      <div className="container">
        <article>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Accueil</Link>
                </li>
                <li>
                  <Link to="/chat">Chat</Link>
                </li>
              </ul>
            </nav>
            <h1>React Chat 🐱</h1>
          </header>
        </article>

        <Routes>
          <Route
            path="/"
            element={<Home pseudo={pseudo} onChange={setPseudo} />}
          ></Route>
          <Route path="/chat" element={<Chat pseudo={pseudo} />}></Route>
          <Route></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
