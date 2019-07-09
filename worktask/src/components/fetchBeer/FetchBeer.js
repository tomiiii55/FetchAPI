import React from "react";
import "./FetchBeerStyle.css";

export default class FetchBeer extends React.Component {

        constructor(props) {
          super(props);
          this.state = {
            beers: [],
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
          <div>
            <button onClick={this.handleClick}>Get All Beers</button>
           {this.state.beers.map((beer) => {
             return <div key={beer.id}>
               <h1 className="h1" >NAME : {beer.name}</h1>
               <img src= {beer.image_url}/>
               <h2>TAGLINE : {beer.tagline}</h2>
               <p>FIRST BREWED : {beer.first_brewed}</p>
               <p> DESCRIPTION : <br></br>{beer.description}</p>
               <p> FOOD PAIRING : <br></br>{beer.food_pairing}</p>
               <p> ALCOHOL BY VOLUME(%) : {beer.abv}</p>
               <p> pH : {beer.ph}</p>
               
               
               </div>
            
           })}
          </div>
        );
        }
      }
    
    