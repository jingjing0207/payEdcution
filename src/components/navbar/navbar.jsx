import React, {Component} from 'react'
import './navbar.css'
import { Layout ,Popover,Button,icon,Avatar } from 'antd';
import {withRouter} from "react-router-dom";
import Mysearchbtn from './../mysearchbtn/mysearchbtn'
const { Header } = Layout;


class Navbar extends Component {
    constructor(props){
      super(props)
        this.state = {
            size: 'Default',
        };
    }
    gousercenter(){
        this.props.history.push(this.props.userurl)
    }
 render(){
     const phonedowncon=(
         <div>
             <p>二维码</p>
         </div>
     )
     const usercentercontent=(
         <div onClick={this.gousercenter.bind(this)}>
             登录啦，注册啦
         </div>
     )
     const keytilelist=[
         {key:'tile1',tilename:'付费课程'},
         {key:'tile2',tilename:'免费课程'},
     ]
     return(
         <Layout>
             <Header>
                 <div className="logo" >
                     中软云课堂
                 </div>
                 <ul className="keytile-c">
                       {
                           keytilelist.map((item)=>{
                               return(
                                   <li key={item.key}>{item.tilename}</li>
                               )
                           })
                       }
                 </ul>
                 <div className="userheader_container">
                     <Popover content={usercentercontent} title="" trigger="hover">
                         <Avatar icon="user" />
                     </Popover>
                 </div>
                 <div className="down-container" >
                     <Popover content={phonedowncon} title="" trigger="hover">
                         <Button type="primary" icon="qrcode" size={this.state.size}>App下载</Button>
                     </Popover>
                 </div>
                 <div className="serchcontainer" >
                     <Mysearchbtn/>
                 </div>
             </Header>
         </Layout>

     )
 }
}
export default withRouter(Navbar)