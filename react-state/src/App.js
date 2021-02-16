import React, { Component } from "react";
import './App.css';

class App extends Component {
  state = {
    Person: {
      fullName: "kais",
      bio: "im bio",
      img: "https://picsum.photos/id/350/200/300",
      profession: "working",
    },
    show: false,
    Time: 0,
  };
  ShowInfo = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ Time: this.state.Time + 1 });
    }, 1000);
  }

  render() {
    var minutes = Math.floor(this.state.Time / 60);
    var seconds = this.state.Time % 60;

    minutes = String(minutes).padStart(2, "0")
    seconds = String(seconds).padStart(2, "0");
    return (
      <>
        {this.state.show ? 
          (<div className= 'info'>
            <h1>fullName:{this.state.Person.fullName}</h1>
            <h1>bio:{this.state.Person.bio}</h1>
            <img src={this.state.Person.img} />
            <h1>profession:{this.state.Person.profession}</h1>
            <p className="btnTime">Time={this.state.Time}</p>
          </div>)
        
      : null}

          <div className="btnTime">
            <button className="btn" onClick={this.ShowInfo}>Click me plz</button>
            <p className="time"><b> Time: </b> {`minutes: ${minutes} seconds: ${seconds}`}</p>
          </div>
      </>
    );
  }
}
export default App;
