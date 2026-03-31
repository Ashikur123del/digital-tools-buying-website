import { useState } from "react"

import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Rating from "./Components/Rating"
import OurExplore from "./Components/OurExplore"
import GetStarted from "./Components/GetStarted"
import CartPricing from "./Components/CartPricing"
import ReadyToStart from "./Components/ReadyToStart"
import Footer from "./Components/Footer"


const cardData = async () => {
  const res = await fetch('/CardData.json')
  return res.json()
}
  
const cardDataPromise = cardData()

function App() {

const [carts, setCarts] = useState([])


  return (
    <>
      <Navbar  carts={carts} setCarts={setCarts} />
      <Hero />
      <Rating />
      <OurExplore carts={carts} setCarts={setCarts} cardDataPromise={cardDataPromise} />
      <GetStarted />
      <CartPricing />
      <ReadyToStart />
      <Footer />
  
    </>
  )
}

export default App
