import React,{Component} from 'react'
import './clickplay.css'
import Top1 from './cliclplayimg/top1.png'
import Top2 from './cliclplayimg/top2.jpg'
import Top3 from './cliclplayimg/top3.jpg'
import Top4 from './cliclplayimg/top4.jpg'
import Top5 from './cliclplayimg/top5.jpg'

class Clickplay extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="clickplay-c">
                <div className="top1-c">
                    <img src={Top1} alt=""/>
                    <ul className="info-list">
                        <li className="title short-title">
                            <a href="#" title=""
                               target="video">java课程</a>
                        </li>
                        <li className="subtitle"><span>解密spring/springBoot框架开发</span></li>
                    </ul>
                </div>
                <div className="middle-c">
                    <div className="top2-c">
                        <img src={Top2} alt=""/>
                        <ul className="info-list">
                            <li className="title short-title">
                                <a href="#" title=""
                                   target="video">react精讲</a>
                            </li>
                            <li className="subtitle"><span>解密react/redux/react-touter/fetch</span></li>
                        </ul>
                    </div>
                    <div className="top45-c">
                        <div className="top4-c">
                            <img src={Top4} alt=""/>
                            <ul className="info-list">
                                <li className="title short-title">
                                    <a href="#" title=""
                                       target="video">ReactNative精讲</a>
                                </li>
                                <li className="subtitle"><span>解密如何快速跨平台的端开发</span></li>
                            </ul>
                        </div>
                        <div className="top5-c">
                            <img src={Top5} alt=""/>
                            <ul className="info-list">
                                <li className="title short-title">
                                    <a href="#" title=""
                                       target="video">MongoDB精讲</a>
                                </li>
                                <li className="subtitle"><span>配合nodeJS让你成为全栈工程师</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="top3-c">
                    <img src={Top3} alt=""/>
                    <ul className="info-list">
                        <li className="title short-title">
                            <a href="#" title=""
                               target="video">Android开发精讲</a>
                        </li>
                        <li className="subtitle"><span>解密安卓开发高手秘诀</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Clickplay