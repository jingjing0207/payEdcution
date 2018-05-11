import React, {Component} from 'react'
import Navbar from './../../components/navbar/navbar'
import Indexcontent from './content/indexcontent'
import MyFooter from './../../components/footer/myfooter'

class Liveindex extends Component{
    render(){
        const navson=[
            {key:'nav1',text:'课程'},
            {key:'nav2',text:'消息'}
        ]
        const userurl='/scenter'
        const courseUrl='/scourse'
        return(
            <div>
                <Navbar navson={navson} userurl={userurl} courseUrl={courseUrl} />
                <Indexcontent/>
                <MyFooter/>
            </div>
        )

    }
}
export default Liveindex
