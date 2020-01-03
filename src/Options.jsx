import React from 'react'
import slugify from 'slugify'
import {USCurrencyFormat} from './App'

 export default class Total extends React.Component {
render() {
 const total = Object.keys(this.props.selected).reduce(
    (acc, curr) => acc + this.props.selected[curr].cost,
    0
  );
  let total1 = USCurrencyFormat.format(total);
return (
 <div>{total1}</div> 
)
  }
}
  