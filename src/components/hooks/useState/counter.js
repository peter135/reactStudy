import React, {useState }from 'react';

export const Counter = () => {
    const [count,setCount] = useState(0);

    function handleAlertClick() {
        setTimeout(()=>{
            alert('you clicked on:'+count)
        },3000)

    }

    return(
        <div style={{'display':'flex',
                     'flexDirection':"column",
                     'alignItems':'center'}}>
            <p>You clicked {count} times</p>
            <button style={{'marginTop':'10px' }} onClick={() => setCount(count+1)}>
                Click me
            </button>
            <button style={{'marginTop':'10px' }} onClick={handleAlertClick}>
                Show alert
            </button>
        </div>
    )

}