import React, { useEffect, useState } from 'react';

const League = () => {
    const [leagues,setLeagues] = useState([]);
    useEffect(()=>{
        fetch("https://www.thesportsdb.com/api/v1/json/2/all_leagues.php")
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    },[])
    return (
        <div>
            <h1>Hello</h1>
            {
                leagues.map(league => console.log(league))
            }
        </div>
    );
};

export default League;