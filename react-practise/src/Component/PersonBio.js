import React, { Component } from 'react'

 class PersonBio extends Component {
    constructor(props){
        super(props);
        this.state = {
            persons:[
                {
                    name:"Zarak ",
                    happy : "I love to code"
                },
                {
                    name:"Zarak " ,
                    happy : "I love to code"
                },




            ],
        }
    }
  render() {
    return ( 
      <section>
        {this.state.persons.map((item,index)=>{
            return(
                <div>
            <h4>Name:{item.name}</h4>
            <p>{item.happy}</p>
        </div>
            )
        })}
        
      </section>
    )
  }
}
export default PersonBio;
