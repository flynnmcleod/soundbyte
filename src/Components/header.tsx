import * as React from 'react'
import './header.css'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function header() {
    return (
        <div className="header">
            <img src = '/logo.png' className='logo' alt='soundbyte_logo' />
            <h1 className='headerText'>soundbyte.FM </h1>
        </div>
    )
}