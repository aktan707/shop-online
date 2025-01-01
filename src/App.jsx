import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Moda from "./components/moda/Moda.jsx";
import Card from "./components/cards/Card.jsx";
import TopSelling from "./components/top-selling/TopSelling.jsx";
import NewArrivals from "./components/new-arrivals/NewArrivals.jsx";
import HomaPage from "./pages/HomePage/HomePage.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Header/>
      <HomaPage/>
    </div>
  )
}

export default App
