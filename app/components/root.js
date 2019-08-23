import React from 'react'
import CandyList from './CandyList'
import { getPets } from '../store'
import { connect } from 'react-redux'

const Root = () => {
  return (
    <div>
      <nav>
        Goodie Bag
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
          <div>
            <CandyList />
          </div>
      </main>
    </div>
  )
}




export default Root
