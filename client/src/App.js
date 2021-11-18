import React from 'react';
import {DataProvider} from './GlobalState'
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/clientpages/Home/Home';
import About from './components/clientpages/About/About';
import Blog from './components/clientpages/Blog/Blog';
import Contact from './components/clientpages/Contact/Contact';
import Room from './components/clientpages/Room/Room';
import Services from './components/clientpages/Services/Services';
// import Header from './components/headers/Header';
import Footer from './components/clientpages/Footer/Footer';
import Navbar from './components/clientpages/Navbar/Navbar';
import MainPages from './components/mainpages/Pages'; 


function App() {
  return (
    <DataProvider>
      <Router>
      {/* <Header /> */}
        <div className="App">
          <Navbar />
          <MainPages />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/rooms" exact component={Room}/>
              <Route path="/services" exact component={Services}/>
              <Route path="/about" exact component={About}/>
              <Route path="/blog" exact component={Blog}/> 
              <Route path="/contact" component={Contact}/>
            </Switch>
            <Footer />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
