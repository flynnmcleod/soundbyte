import * as React from 'react'
import './body.css'
import { Button} from 'react-bootstrap';



export default function body() {
    return (
        <div className="body">
            <div className='videoPlayer'>
            <Button className='usersOnline'>USERS ONLINE:</Button> 
            <iframe className='video' title='video' allow='autoplay' width="420" height="315"
                src="https://www.youtube.com/embed/hHW1oY26kxQ?autoplay=1&showinfo=0&controls=0">
            </iframe>
            <b>Insert the desired song's link:</b>
            <input type = "text" className = "myText" />
            <Button className='addVideo' variant="primary"> <b>Add</b> </Button>
            </ div>
            <div className='playlist'>
                hello
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>

        </div>
    )
}