import { Home } from './Pages/Home'
import Slider from './components/Slider'
// import './css/normalize.css'
import './main.css'
import { Navbar2 } from './components/Navbar'
import { Login } from './components/AccountForm'
import Footer from './components/Footer/Footer'
import Accordian from './components/Accordian'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { SingleProduct } from './Pages/SingleProduct'
import { Products } from './Pages/Products'

import SubCategory from './Pages/SubCategory'
// import './App.scss'
function App() {
  return (
    <Router>
      <Navbar2 />

      <Switch>
        {/* <Route exact path='/help'> */}
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/help'>
          <Accordian />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>

    // <Slider />
    // <SubCategory />
    // <Products />
    // <SingleProduct />
    // <div>
    //   <Home />
    // </div>
  )
}

export default App
