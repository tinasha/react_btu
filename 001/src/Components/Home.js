import React from 'react';
import ReactDom  from 'react-dom'

const Base_Url = "----------"

class Home extends React.Component() {
    
    state {
        isLoading : false,
        error : null,
        data : []
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
                        <h2>{data.//mokled aq chasvi is risi values amogebac ginda da egaaa }</h2>
                        
                    </>
                ))}
            </div>
        );
    }
}

export default Home;