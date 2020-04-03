import React from 'react';
import axios from 'axios';
import './App.css';

export default class App extends React.Component{

  componentDidMount(){
    axios.get('/api/get_students').then(res =>{
      console.log(res.data)
    })
  }

  render(){
    return <div> Hello World</div>
  }
}
