import React from 'react';
import { Link} from 'react-router-dom';
const Base_Url = "https://api.chucknorris.io/jokes/categories"


class Categories extends React.Component {
    constructor (){
        super();
        this.state = {
        isLoading : false,
        error : null,
        data : []
        }
    }
   

    componentDidMount(){
        this.setState({ isLoading: true })
        fetch (Base_Url)
            .then (res => {
                if (res.ok) {
                return res.json()
                } else {
                    throw Error("There was an Error, while fetching the data")
                }
            })
            .then (data => {
                this.setState({data, isLoading: false});
            }) .catch(error => this.setState({
                error
            }))
    }
    
    render(){

        const { error, isLoading, data } = this.state;

        if (error){
        return <p style ={{ collor: 'red'}}>{error.message}</p>
        }
        if (isLoading) {
            return (
                <p>DATA IS FETCHING!...</p>
            );
        }
        return(
            <div>
                {data.map(data => ( 
                    <>
                       <Link to={`/Detail/${data}`}><h2>{data}</h2></Link> 
                    </>
                        
                        
                
                ))}
            </div>
        );
    }
}
export default Categories;
