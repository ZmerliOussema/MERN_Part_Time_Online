import React from 'react';
import { useState, useEffect } from 'react';
import io from 'socket.io-client'
import net from 'net'

const Chat = (props) => {
    // const [socket] = useState(() => io(':8000'));
    const [input, setInput] = useState('')

    const client = net.createConnection({ port: 8001 }, () => { 
        console.log('CLIENT: I connected to the server.'); 
        }); 

    // useEffect(() => {
    //     console.log('Is this running?');
        
    //     client.on('data', data => 
    //     console.log(data));

    //     // return () => socket.disconnect(true);
    // }, []);

    // const handleSend = e => {
    //     e.preventDefault()

    //     client.write('data', input)

    //     setInput('')
    // }
    
    return (
        <div>
            {/* <h1>Socket Test</h1>
            <input type="text" onChange={e => setInput(e.target.value)}/>
            <input type="submit" value='send' onClick={handleSend} /> */}
        </div>
    );
}

export default Chat;
