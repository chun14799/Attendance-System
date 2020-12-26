import React, {useState} from 'react'
function ColorBox(props) {
    const [color, setColor] = useState('white');

    return (
        <div>
            {color}

            <button onClick={()=> setColor('Black')}>Change to black</button>
            <button onClick={()=> setColor('White')}>Change to white</button>        
        </div>
    );
}

export default ColorBox;