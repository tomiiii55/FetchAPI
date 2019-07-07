import React from "react";

export default class FetchBeer extends React.Component {

        constructor(props) {
          super(props);
          this.state = {
            beers: [],
          }
        }
        
        componentDidMount() {
          fetch('https://api.punkapi.com/v2/beers')
          .then(res => res.json())
          .then(data => this.setState({ beers: data}))
           
        }
        
        
        render(){
        return (
          <div>
           {this.state.beers.map((beer) => {
             return <div key={beer.id}>
               <h1>{beer.name}</h1>
               <p>{beer.tagline}</p>
               <img src= {beer.image_url}/>
               </div>
            
           })}
          </div>
        );
        }
      }
    
    