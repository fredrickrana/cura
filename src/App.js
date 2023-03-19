import React from 'react';
import parseRoute from './parse-route';
import Header from './components/header';
import Home from './components/home'
import Coin from './components/coin'
import Dataverse from './components/dataverse'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      const location = parseRoute(window.location.hash);
      this.setState({ route: location });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return (
      <>
      <Header />
      <Dataverse />
      <Home />
      <Coin />
      </>
      )
    } else {
      return (
        <>
          <Header />
          <Dataverse />
          <Home />
          <Coin />
        </>
      )
    }
  }

  render() {
    return (
      <div className='bg-gradient-to-l from-[#BCECB5] overflow-x-hidden h-screen'>
        {this.renderPage()}
      </div>
    );
  }
}
