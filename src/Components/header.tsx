import * as React from 'react'
import './header.css'
import { Button} from 'react-bootstrap';



export default function header() {
    return (
        <div className="header">
            <div className='banner'>
            <img src = '/logo.png' className='logo' alt='soundbyte_logo' />
            <b>SOUNDBYTE.FM</b> 
            </div>
            <div className='options'>
            <Button className='login' variant="primary"> <b>Login</b> </Button>
            <Button className='settings' variant="primary"> <b>Settings</b> </Button>
            <Button className='share' variant="primary"> <b>Share</b> </Button>
            </div>

        </div>
    )
}


