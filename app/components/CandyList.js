import React from 'react'
import Candy from './Candy';
import { getCandies } from '../store';
import { connect } from 'react-redux';



class CandyList extends React.Component {

    componentDidMount(){
        this.props.getCandies()
    }


    render(){
        const {candies} = this.props
        return (
            <div>
                {candies.map((candy) => {
                    return <Candy key={candy.id} {...candy} />
                })}
            </div>
        )
    }
}

const mapState = state => {
    return {
        candies: state.candies
    }
}

const mapDispatch = (dispatch) => {
    return {
      getCandies: () => dispatch(getCandies())
    }
  }

export default connect(
    mapState,
    mapDispatch
)(CandyList)
