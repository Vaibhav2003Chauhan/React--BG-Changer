import React from 'react'
import Header from './Header'
import Button from './Button'
import { useState } from 'react'
export default function Home() {

    const [color, setColor] = useState('red');
    const updateColor = (colorName) => {
        setColor(colorName);
    }
    return (
      
        <div className="App" style={{backgroundColor:color}}>
            <Header />
            <div className='buttons'>
                <Button updateColor={updateColor} colorName={'orange'} />
                <Button updateColor={updateColor} colorName={'yellow'} />
                <Button updateColor={updateColor} colorName={'grey'} />
                <Button updateColor={updateColor} colorName={'green'} />
                <Button updateColor={updateColor} colorName={'Olive'} />
                <Button updateColor={updateColor} colorName={'pink'} />
                <Button updateColor={updateColor} colorName={'cyan'} />

            </div>
            </div>

       
    )
}
