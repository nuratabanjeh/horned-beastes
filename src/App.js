import React from 'react';

import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     element: DataRow,
  //     show: false,
  //     obj: {}
  //   };
  // }

  // HornedCardShowing = (event) => {
  //   this.setState({
  //     show: true,
  //     obj: event
  //   });
  //   console.log(event);
  // }
  // dontShowCard = () => {
  //   this.setState({
  //     show: false,
  //   });
  // }
  render() {
    return (
      <div>
        <Header />
        <Main />

        <Footer />
      </div>
    );
  }
}

export default App;