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
            <div className="search">
                <input type="text" placeholder='소환사명' id='search' />
                <button type="submit">.GG</button>
            </div>
        </>
    )
}

export default Mainpage;