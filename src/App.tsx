import React from 'react';
//import logo from './logo.png';
import './App.css';
import Header from './Components/header'



interface IState {
  result: string
  filelength: number
}

class App extends React.Component<{}, IState>{
  public constructor(props: any) {
    super(props)
    this.state = {
      result: "",
      filelength: 0,
    }
  }

  public render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
  public resultstate = (resultString: string, filelen: any) => {
    this.setState({ result: resultString, filelength: filelen })
  }
}

export default App;