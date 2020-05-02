import React from 'react' ;

 export default class States extends React.Component {
   constructor() {
     super();
     this.state = {
       data: false 
     }
   }

   componentDidMount () {
     let url = "https://corona.lmao.ninja/v2/states";
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
            <h1>state: {data.state} cases: {data.cases} deaths: {data.deaths}</h1>
          </div>
          :<p>wait...</p>
        }
        
      </div>
     )
   }
 }
