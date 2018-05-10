import React,{Component} from 'react'
import { Carousel } from 'antd'
import './carousel.css'
class Mycarousel extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Carousel autoplay>
                {
                    this.props.carimglist.map((item)=>{
                        return(
                        <div key={item.key} className='cur-img-c'>
                            <img src={item.src} alt=""/>
                        </div>
                        )
                    })
                }
            </Carousel>
        )
    }
}
export default Mycarousel