import React, { Component } from 'react'
import BDNProductList from './components/BDNProductList';
import BDNProductAdd from './components/BDNProductAdd';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      products :[
        {title:'Bùi Đức Nguyên',id:2210900051,status:1},
        {title:'garlic',id:2,status:0},
        {title:'apple',id:3,status:0},
        {title:'samsung',id:4,status:1},
      ]
    }
  }
  BDNHandldSumit=(param)=>{
    console.log("App:",param);
    let {products}=this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Bui Duc Nguyen -render data -event form</h1>
        <hr/>
        <BDNProductList renderProducts={this.state.products}/>
        <hr/>
        <BDNProductAdd onSummit={this.BDNHandldSumit}/>
      </div>
    )
  }
}