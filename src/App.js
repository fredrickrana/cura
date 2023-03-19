import React from 'react';
import parseRoute from './parse-route';
import Header from './components/header';
import Home from './components/home'

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
      <Home />
      </>
      )
    }
    // if (route.path === 'newproject') {
    //   return <Project />;
    // }
    // if (route.path === 'myprojects') {
    //   return <MyProjects />;
    // }
    // if (route.path === 'projects') {
    //   const projectId = route.params.get('projectId');
    //   return <ProjectDetails projectId={projectId} />;
    // }
    if (route.path === 'home') {
      return <Home />;
    }
  }

  render() {
    return (
      <div className='bg-gradient-to-l from-[#93ECEE] overflow-x-hidden h-screen'>
        {this.renderPage()}
      </div>
    );
  }
}
