import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Detail(props)
{
    const [detail, setDetail] = useState(true);

    useEffect(() => {
        axios
          .get('https://api.chucknorris.io/jokes/random?category='+props.match.params.cat)
          .then((response) => {
            setDetail(response.data);
          })
          .catch((error) => console.error(error.message));
      }, []);

    
      return(
          <div>
            <br/><br/><br/><br/><br/><br/><br/>
              <h1>კატეგორია:</h1>
              {detail.categories}
              <h2>ტექსტი:</h2>
              {detail.value}
          </div>
      )
}

export default Detail;