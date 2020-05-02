import React from 'react' ;

 export default class John_Hop extends React.Component {
   constructor() {
     super();
     this.state = {
       data: false 
     }
   }

   componentDidMount () {
     let url = "https://corona.lmao.ninja/v2/jhucsse";
     fetch(url, {
       method: 'GET',
       headers: {
         'Accept': 'applicaation/json',
         'Content-TYpe': 'application/json',
       }
     }).then((result) => {
        result.json().then((resp) =>{
          this.setState({data : resp})
        })
     })
   }

   render () {
    const data= this.state.data ;
     return (
      <div>
        {
          data ?
          <div>
            <h1>Country: {data.country} province: {data.province} updatedAt: {data.updatedAt}</h1>
          </div>
          :<p>wait...</p>
        }
        
      </div>
     )
   }
 }
