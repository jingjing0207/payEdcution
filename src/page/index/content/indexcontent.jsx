import React,{Component} from 'react'
import { Layout} from 'antd';
import Autoanli from './carouseimg/autoanli.jpg'
import Bigata from './carouseimg/bigdata.jpg'
import Cloundcom from './carouseimg/cloundcom.jpg'
import Deskimg from './../../../utils/conmimg/desk.jpg'
import Mycarousel from './../../../components/carousel/carousel'
import Centertile from './../../../components/centertitle/centertile'
import Mousemenum from './../../../components/mousemenum/mousemenum'
import Icontotext from './../../../components/iconoTptextBottom/icontotext'
import Secondtileright from './../../../components/secondtileright/secondtileright'
import Livecard from './../../../components/livecard/livecard'
import Clickplay from './privatecomponent/clickplay/clickplay'
import './indexcontent.css'
const { Content} = Layout;
class Indexcontent extends Component{
    constructor(props){
        super(props)
        this.state={
            detailflag:false,
            currentindex:''
        }
    }
    fatherHandleClick(index,flag){
        this.setState({
            detailflag:flag,
            currentindex:index
        })
    }
    mouseHandleleave(){
        this.setState({
            detailflag:false,
            currentindex:''
        })
    }
    render(){
        const carimglist=[
            {key:'car1',src:Autoanli},
            {key:'car2',src:Bigata},
            {key:'car3',src:Cloundcom}
        ]
        const centerTitle="精品课程"
        const firsttile={
            icon:'video-camera',
            text:'直播好课'
        }
        const secondtile={
            icon:'play-circle',
            text:'点播好课'
        }
        const courseList=[
            {
                key:'cour1',
                text:'web前端',
                description:[
                    {key:'html',text:'html'},
                    {key:'js',text:'javascript'},
                    {key:'css3',text:'css3'},
                    {key:'jquery',text:'jquery'},
                    {key:'nodeJS',text:'nodeJS'},
                    {key:'vue',text:'Vue'},
                    { key:'react',text:'React'}
                ]
            },
            {key:'cour2',text:'后端' ,description:[
                    {key:'java',text:'java'},
                    {key:'php',text:'php'},
                    { key:'python',text:'python'},
                    {key:'c',text:'C'},
                    {key:'c++',text:'C++'},
                    {key:'c#',text:'C#'}
                ]},
            {key:'cour3',text:'移动端',
                description:[
                    {key:'android',text:'Android'},
                    { key:'ios',text:'ios'}
             ]},
            {key:'cour4',text:'云计算&大数据',description:[
                    {
                        key:'Hbase',text:'Hbase'},
                    {   key:'scal',text:'Scal'},

                ]},
            {key:'cour5',text:'数据库',description:[
                    { key:'mysql',text:'Mysql'},
                    { key:'Oracle',text:'Oracle'},
                    { key:'mongodb',text:'mongodb'},
                    {key:'sqlsever',text:'Sqlsever'},

                ]},
            {key:'cour6',text:'UI设计',description:[
                    {key:'ps',text:'PS'},
                    { key:'aim',text:'动效动画'},
                    {key:'app',text:'APPUI设计'},
                      {  key:'des',text:'设计工具'}

                ]}
        ]
        const cardListicon=[
            {key:'car1',icon:'like-o',desc:'关注度最高的课程',color:{color:'#ff7d09'},title:'推荐'},
            {key:'car2',icon:'coffee',desc:'设备支持最多的技术',color:{color:'#ff4092'},title:'Java'},
            {key:'car3',icon:'facebook',desc:'feacebook革命的web技术',color:{color:'#08c'},title:'React'},
            {key:'car4',icon:'android',desc:'移动份额占有第一的技术',color:{color:'#4cca75'},title:'Android开发'},
            {key:'car5',icon:'apple',desc:'可能是世界上最好的系统',color:{color:'#5cd5dd'},title:'Ios开发'},
            {key:'car6',icon:'code',desc:'web最火爆的技术',color:{color:'#ae3a3b'},title:'Web前端开发'},
            {key:'car7',icon:'html5',desc:'全新web移动端技术',color:{color:'#2a3344'},title:'Html5'}
        ]
        const livecardlist=[
            {key:'car1',src:Deskimg,author:'李明',price:10,flag:false},
            {key:'car2',src:Deskimg,author:'王磊',price:50,flag:false},
            {key:'car3',src:Deskimg,author:'小花',price:70,flag:false},
            {key:'car4',src:Deskimg,author:'jack',price:10,flag:false},
            {key:'car5',src:Deskimg,author:'rose',price:20,flag:false}
        ]
        const gohrefVideocoueselist="/videolist"
        const gohrefLivecoueselist="/livelist"
        const godetil='/cdetail'
        return(
            <Layout>
                <Content>
                    <div onMouseLeave={this.mouseHandleleave.bind(this)} style={{ background: '#f8fafc !important', padding: 24 }} className="cour-log-c">
                            <div style={{width:'20%',float:'left'}}>
                                <Mousemenum courseList={courseList} fatherHandleMouse={this.fatherHandleClick.bind(this)} />
                            </div>
                        {
                            this.state.detailflag===true?
                                <div className="Mainnavigation-c" onMouseLeave={this.mouseHandleleave.bind(this)}>
                                    {
                                        courseList[this.state.currentindex].description.map((item)=>{
                                            return (
                                                <p key={item.key}>
                                                    {item.text}
                                                </p>
                                            )
                                        })
                                    }
                                </div> :
                                ''
                        }
                            <div className="carousel-c">
                                <Mycarousel carimglist={carimglist}/>
                            </div>
                    </div>
                    <div>
                        <Centertile centerTitle={centerTitle}/>
                    </div>
                    <div className="lensonlist">
                        <Icontotext cardListicon={cardListicon}/>
                    </div>
                    <div className="livecurcontainer">
                        <Secondtileright tilename={firsttile} gohref={gohrefLivecoueselist}/>
                        <Livecard livecardlist={livecardlist} gopath={godetil}/>
                        <Secondtileright tilename={secondtile} gohref={gohrefVideocoueselist}/>
                        <Clickplay/>
                    </div>
                </Content>
            </Layout>
        )
    }
}
export default Indexcontent