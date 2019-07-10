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
           <div className="container1">
         <>
         <button className="buttonfetch1" onClick={this.handleClick}>Get Random Beer</button>
         {beer &&
         (<div className="containerafter" key={beer.id}>
              <h1 className="nameall" >NAME : {beer.name}</h1>
               <img className="imgdiv" src= {beer.image_url}/>
               <h2 className="secondheader">TAGLINE : {beer.tagline}</h2>
               <p className="text">FIRST BREWED : {beer.first_brewed}</p>
               <p className="text1"> DESCRIPTION : <br></br>{beer.description}</p>
               <p className="text1"> FOOD PAIRING : <br></br>{beer.food_pairing}</p>
               <p className="text1"> ALCOHOL BY VOLUME(%) : {beer.abv}</p>
               <p className="text1"> pH : {beer.ph}</p>


              </div>)}
              </>
              </div>
       );
       }
     }