import * as React from 'react';
import ReactPlayer from 'react-player';
import VideoLink from './videoLink'
import VideoList from './videoList';
import './body.css'



interface IState {
  updateVideoList: any,
  player: any,
  playingURL: string
  videoList: object
}

class Body extends React.Component<{}, IState>{
  public constructor(props: any) {
    super(props);
    this.state = {
      player: null,
      playingURL: "",
      updateVideoList: null,
      videoList: [],
    }
  }

  public setRef = (playerRef: any) => {
    this.setState({
      player: playerRef
    })
  }


  public addVideo = (url: string) => {
    const body = {"url": url}
    //Using the provided scribrapi as I realised too late in the project my own API was not working
    fetch("https://scriberapi.azurewebsites.net/api/Videos", {
      body: JSON.stringify(body),
      headers: {
        Accept: "text/plain",
        "Content-Type": "application/json"
      },
      method: "POST"
    }).then(() => {
      this.state.updateVideoList();
    })
  }

  public updateURL = (url: string) => {
    if(this.state.playingURL === url){
      this.setState({playingURL : ""},() => this.setState({playingURL: url}))
    }else{
      this.setState({playingURL:url})
    }
  }

  public listMounted = (callbacks: any) => {
    this.setState({ updateVideoList: callbacks })
  }

  public render() {
    return (<div className="body">
        <div className="videoPlayer">
            <ReactPlayer
              className="video"
              ref={this.setRef}
              controls={false}
              url={this.state.playingURL}
              width="100%"
              height="400px"
              playing={true}
              config={{
                youtube: {
                  playerVars: { showinfo: 1 },
                  preload: true
                }
              }
              }
            />
          <VideoLink addVideo={this.addVideo} />
          </div>
          <div className="playlist">
            <VideoList play={this.updateURL} mount={this.listMounted} />
            <div className="space" />
          </div>
    </div>
    )}
}

export default Body;