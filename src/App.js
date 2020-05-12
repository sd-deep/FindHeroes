import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import GalleryCardContainer from './components/GalleryCardContainer';
import Home from './components/Home';
import SignUp from './components/SignUp';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';



class App extends React.Component {
  state = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    redirect : null
  }
  


  handleLoginEvent = () => {
    localStorage.setItem('isLoggedIn', !this.state.isLoggedIn)
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn
    }))
  }

  notify = () => {
    toast("SignUp Successful")
  };

  handleSignUpEvent = () => {
    localStorage.setItem('isLoggedIn', true);
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn,
      redirect : "/about"      
    }));
    this.notify();
  }



  render() {
  
    return (
      <Router>
        {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}
        <div className="App">
          <Nav isLoggedIn={this.state} handleLogin={this.handleLoginEvent} />
          <Switch>
            <Route path="/" exact strict component={Home} />
            <Route path="/about" exact strict component={About} />
            <Route path="/gallery" exact strict component={GalleryCardContainer} />
            <Route path="/signup" exact strict
              render={() => <SignUp handleSignUp={this.handleSignUpEvent} />} />
          </Switch>
          <ToastContainer />
        </div>
      </Router >
    )
  }

}



export default App;
