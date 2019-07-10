import React from "react";
import "./FetchBeerStyle.css";

export default class FetchBeer extends React.Component {

        constructor(props) {
          super(props);
          this.state = {
            beers: [],
            on:false,
          }
        }
        
        handleClick = () => {
          fetch('https://api.punkapi.com/v2/beers')
          .then(res => {
            if (!res.ok) {
              throw new Error('There has been an error');
            }
            return res.json();
          })
          .then(data => {this.setState({ beers: data})
                        console.log(this.state.beers);
        })
          .catch(e => console.log(e))
        }
        
        
        render(){
        return (
          <div className="container1">
            <button className="buttonfetch1" onClick={this.handleClick}>Get All Beers</button>
           {this.state.beers.map((beer) => {
             return <div  className="containerafter" key={beer.id}>
               <h1 className="nameall" >NAME : {beer.name}</h1>
               <img className="imgdiv" src= {beer.image_url}/>
               <h2 className="secondheader">TAGLINE : {beer.tagline}</h2>
               <p className="text">FIRST BREWED : {beer.first_brewed}</p>
               <p className="text1"> DESCRIPTION : <br></br>{beer.description}</p>
               <p className="text1"> FOOD PAIRING : <br></br>{beer.food_pairing}</p>
               <p className="text1"> ALCOHOL BY VOLUME(%) : {beer.abv}</p>
               <p className="text1"> pH : {beer.ph}</p>
               
               
               </div>
            
           })}
          </div>
        );
        }
      }
    
    