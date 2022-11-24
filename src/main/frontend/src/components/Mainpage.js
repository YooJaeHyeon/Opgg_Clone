import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "../containers/App.css"

function Mainpage() {
    const [hello, setHello] = useState('')
    
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <>
            <div>
                백엔드에서 가져온 데이터입니다 : {hello}
            </div>
            <div className="opgg_logo">
                OP.GG
            </div>
            <div className="search">
                <form onSubmit={event=>{
                    event.preventDefault();
                    const summoner = event.target.summoner.value;
                    console.log(summoner);
                }}>
                    <input type="text" name="summoner" placeholder='소환사명' />
                    <button type="submit">.GG</button>
                </form>
            </div>
        </>
    )
}

export default Mainpage;