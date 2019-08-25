import * as React from 'react'
import './videoList.css'

interface IState{
    videoList: any
}

interface IProps{
    mount:any
    play:any
}

export default class VideoList extends React.Component<IProps,IState>{
    public constructor(props:any){
        super(props);
        this.state = {
            videoList: []
        }
        this.updateList();
    }

    public deleteVideo = (id:any) => {
                //Using the provided scribrapi as I realised too late in the project my own API was not working
        fetch("https://scriberapi.azurewebsites.net/api/Videos/"+id,{
            method:'DELETE'
        }).then(() => {
            this.updateList()
        })
    }

    public playVideo = (videoUrl:string) => {
        this.props.play(videoUrl)
    }

    public updateList = () => {
                //Using the provided scribrapi as I realised too late in the project my own API was not working
        fetch('https://scriberapi.azurewebsites.net/api/Videos',{
            method:'GET'
        }).then((ret:any) => {
            return ret.json();
        }).then((result:any) => {
            const output:any[] = []
            result.forEach((video:any) => {
                const row = (<tr>
                    <div className="videoBox">
                    <td  onClick={() => this.playVideo(video.webUrl)} ><img src={video.thumbnailUrl} width="100px" alt="Thumbnail"/></td>
                    <td className="videoTitle" ><b>{video.videoTitle}</b></td>
                    <td ><button className="delete" onClick={() => this.deleteVideo(video.videoId)}>DELETE</button></td>
                    </div>
                </tr>)
                if(video.isFavourite){
                    output.unshift(row);
                }else{
                    output.push(row);
                }
            });
            this.setState({videoList:output})
        })
    }

    public handleLike = (video:any) => {
        const toSend = [{
            "from":"",
            "op":"replace",
        }]
        //Using the provided scribrapi as I realised too late in the project my own API was not working
        fetch("https://scriberapi.azurewebsites.net/api/Videos/update/"+video.videoId, {
            body:JSON.stringify(toSend),
            headers: {
              Accept: "text/plain",
              "Content-Type": "application/json-patch+json"
            },
            method: "PATCH"
          }).then(() => {
              this.updateList();
          })
    }
    
    public componentDidMount = () => {
        this.props.mount(this.updateList)
        this.updateList()
    }



    public render() {
        return (
            <div className="video-list">
                <h1>Playlist</h1>
                <table>
                    {this.state.videoList}
                </table>
            </div>
        )
    }
}