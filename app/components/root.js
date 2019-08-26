import React from 'react'
import CandyList from './CandyList'
import { getPets } from '../store'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

const Root = () => {
  return (
    <Router>
    <div>
      <nav>
        Goodie Bag
        <Link to="/candies">All Candies</Link>
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
          <div>
            <CandyList />
          </div>
      </main>
    </div>
    </Router>
  )
}




export default Root
