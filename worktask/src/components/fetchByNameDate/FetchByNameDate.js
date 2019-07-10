import React from "react";
import "./FetchByNameDateStyle.css";

export default class FetchByNameDate extends React.Component {

       state = {
           beers: [],
           month: '',
           naziv: '',
         }
         handleChange = event => {
           this.setState({ [event.target.name]: event.target.value });

         };

       handleClick = () => {
         console.log(this.state.month.slice(5, 7) +'-'+this.state.month.slice(0, 4))
         fetch('https://api.punkapi.com/v2/beers?brewed_before='+this.state.month.slice(5, 7) +'-'+this.state.month.slice(0, 4)+'&beer_name='+this.state.naziv)
         .then(res => {
           if (!res.ok) {
             throw new Error('There has been an error');
           }
           return res.json();
         })
         .then(data => {this.setState({ beers: data})
       console.log(data)})

       }


       render(){
         const beers = this.state.beers;
         const allBeers = beers.map((beer) => {
           return <div className="containerafter1" key={beer.id}>
             <h1 className="nameall" >NAME : {beer.name}</h1>
               <img className="imgdiv" src= {beer.image_url}/>
               <h2 className="secondheader">TAGLINE : {beer.tagline}</h2>
               <p className="text">FIRST BREWED : {beer.first_brewed}</p>
               <p className="text1"> DESCRIPTION : <br></br>{beer.description}</p>
               <p className="text1"> FOOD PAIRING : <br></br>{beer.food_pairing}</p>
               <p className="text1"> ALCOHOL BY VOLUME(%) : {beer.abv}</p>
               <p className="text1"> pH : {beer.ph}</p>
             </div>
             })
       return (
         <div className="container2">
         <input type='month' name='month' onChange={this.handleChange}></input>
         <input type='text' name='naziv' onChange={this.handleChange}></input>
         <button className="buttonfetch1" onClick={this.handleClick}>Get beers</button>
         {beers[0] && allBeers}
         </div>
       );
       }
     }