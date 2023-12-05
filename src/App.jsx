
import Footer from './components/Footer'
import Home from './components/Home'
import Intro from './components/Intro';
import Navbar from './components/Navbar'

import { BrowserRouter as Router } from "react-router-dom";
import Story from './components/Story';
import More from './components/More';
import Conclude from './components/Conclude';

const App = () => {
  return (
    <Router>
    <div className="">
    <Navbar />

    <main>
    <div id='home'>
    <Home />
    </div>

    <div id='intro'>
    <Intro />
    </div>

    <div id='story'>
    <Story />
    </div>

    <div id='more'>
    <More />
    </div>

    <div id='conclude'>
    <Conclude />
    </div>

    </main>
    <Footer />
    </div>
    
    </Router>
    
  )
}

export default App