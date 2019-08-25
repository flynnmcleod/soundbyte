import { Button} from 'react-bootstrap';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField'
import * as React from 'react';
import './videoLink.css'

interface IProps{
    addVideo:any,
}

interface IState{
    input:string
}
export default class VideoLink extends React.Component<IProps,IState> {
    public constructor(props:any){
        super(props);
        this.state = {
            input:""
        }
    }

    public addVideo = () =>{            
        this.props.addVideo(this.state.input)
    }

    public render() {
        return (
                <div>
                    <div>
                        <div>
                            <TextField
                            id= "videoLink"
                            className = "videoLink"
                            placeholder="Add Song Url"
                            margin="normal"
                            variant="outlined"
                            onChange = { (event: any ) => this.setState({input:event.target.value})}
                            value = {this.state.input}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <Button className="addVideo" onClick={this.addVideo}>
                                        <b>Add Video</b>
                                    </Button>
                                </InputAdornment>,
                            }}
                            />
                        </div>
                    </div>
                </div>
        )
    }
}