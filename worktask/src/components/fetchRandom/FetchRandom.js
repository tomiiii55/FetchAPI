import React from "react";
import "./FetchRandomStyle.css";

export default class FetchRandom extends React.Component {
   state = {
           randomBeer: '',
         }


       handleClick = () => {
         fetch('https://api.punkapi.com/v2/beers/random')
         .then(res => {
           if (!res.ok) {
             throw new Error('There has been an error');
           }
           return res.json();
         })
         .then(data => {this.setState({ randomBeer: data})
                       console.log(this.state.randomBeer);
       })
         .catch(e => console.log(e))
       }


       render(){
         const beer = this.state.randomBeer[0]
       return (
         <>
         <button onClick={this.handleClick}>Get Random Beer</button>
         {beer &&
         (<div key={beer.id}>
              <h1 className="h1" >NAME : {beer.name}</h1>
              <img src= {beer.image_url} alt=""/>
              <h2>TAGLINE : {beer.tagline}</h2>
              <p>FIRST BREWED : {beer.first_brewed}</p>
              <p> DESCRIPTION : <br></br>{beer.description}</p>
              <p> FOOD PAIRING : <br></br>{beer.food_pairing}</p>
              <p> ALCOHOL BY VOLUME(%) : {beer.abv}</p>
              <p> pH : {beer.ph}</p>


              </div>)}
              </>
       );
       }
     }