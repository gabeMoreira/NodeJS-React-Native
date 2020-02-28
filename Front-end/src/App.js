import React, { Component } from 'react';
import Header from './components/Header/index'
import "./styles.css"  
import Main from './pages/main/index'
import Routes from './routes'

const App = () => (
    <div className="App">
       <Header />
       <Main />
    </div>
)

export default App;
