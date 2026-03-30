import CardModels from "./Components/CardModels"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Rating from "./Components/Rating"


const cardData = async () => {
  const res = await fetch('/CardData.json')
  return res.json()
}
  
const cardDataPromise = cardData()

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Rating />
      <CardModels cardDataPromise={cardDataPromise} />
    </>
  )
}

export default App
