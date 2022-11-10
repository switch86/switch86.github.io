
import React from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Header from "./components/Header"
import './App.css'

function App() {
  return (
    <div className="App">
			<div id="wrapper">
          <Header />
					<Main />
          <Footer />
			</div>
    </div>
  )
}
  

export default App
