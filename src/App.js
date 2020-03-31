import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./corona_israel.json"
import Table from "./Table"

class App extends React.Component {
    render() {
      return <Table data={data} />
    }
}

export default App;
