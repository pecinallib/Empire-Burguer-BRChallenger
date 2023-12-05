import './index.css'
import { Menu } from './components/menu'
import { Home } from './components/home'
import { Box } from './components/box'
import { Services } from './pages/services'
import { Footer } from './pages/footer'
import { Cardapio } from './pages/cardapio'
import { Delivery } from './pages/delivery'
import { FeedBacks } from './components/feedbacks'
import { Instagram } from './components/instagram'


function App() {
  return (
    <>
    <Menu/>
    <Home/>
    <Box/>
    <Services/>
    <Cardapio/>
    <FeedBacks/>
    <Instagram/>
    <Delivery/>
    <Footer/>
    </>
  )
}

export default App
