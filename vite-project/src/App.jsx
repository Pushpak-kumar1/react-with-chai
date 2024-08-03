
import Chai from './chai'

function App() {
  const username = "chai with anchal"

  return (
    <>   // Fragmentaion cause ek he element return ker skte hai hum -- div empty bhi rakh skte hai
    <Chai/>
    <h1> React with pushpak {username}</h1>  // curley braces mai sb kuch var. ki tarah treat hoga
    <p>test para</p>       // ^ ye evaluation outcome hai means final outcome, if uff nhi lga skte yha
    </>
  )
}

export default App
