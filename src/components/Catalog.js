import React, { Component } from 'react';
import Movie from './Movie';
import { BrowserRouter as Router, Route , Routes,Link, Switch } from 'react-router-dom'

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rentSec:[]
        }
    }


    updateRentSection=(m)=>{
        var joined = this.state.rentSec.concat({m});
        this.setState({rentSec: joined})
        }

    
    printRentSEc(){
            return this.state.rentSec.length ? this.state.rentSec.map((m)=> <div> {m}</div>) : null
        }


    handleButton(m){
        let movieRnted= [...this.state.rentSec]
        let index = movieRnted.indexOf(m)
        movieRnted.splice(index,1)
        this.setState({rentSec: movieRnted})
        }
  
    render() { 
        let movies = this.props.movies
        let rentedMovies= this.state.rentSec
      
        return ( 
        <div>
            <div id="u-input">
            <input type="text" placeholder="Ask and you shall receive" />
            <div id="button" className='seek'>Seek</div>
            </div>
         
           <div>{movies.map(m => {return <Movie  m={m} updateRentSection={this.updateRentSection} updateRent={this.props.updateRent} key={m.id} />})}</div>


           {this.state.rentSec.length!=0? 
           <div>
               <h1>Rented </h1>
               {rentedMovies.map((m) => <div> <button onClick={()=> this.handleButton(m)}>un-rent</button> {m.m.title}</div> ) }
          </div> 
               : null}
            </div>) } 
}
           

      

    



            
export default Catalog;