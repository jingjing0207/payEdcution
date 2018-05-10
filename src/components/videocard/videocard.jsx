import React,{Component} from 'react'
import './videocard.css'

class Videocard  extends Component{
    constructor(props){
        super(props)
    }
    govideodetil(key){
        //this.props.history.push(this.props.gopath+"/"+key)
        const w=window.open('about:blank');
        w.location.href=this.props.gopath+"/"+key
    }
    render(){
        const videoAllList=this.props.videoAllList
        return (
                <ul className="videocard-c">
                    {
                        videoAllList.map((item)=>{
                            return(
                                <li key={item.key} onClick={this.govideodetil.bind(this,item.key)}>
                                    <img className="video-list-img" src={item.imgsrc} alt=""/>
                                    <div className="videoimage-bar">
                                        <div className="firsttitle-c">
                                            {item.title}
                                        </div>
                                        <div className="vodeo-description-c"> {item.description}</div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
        )
    }
}
export default Videocard