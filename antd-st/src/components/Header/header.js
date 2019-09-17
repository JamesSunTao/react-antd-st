import React from 'react'
import { Row, Col } from 'antd'
import './header.css'
import Util from '../../uitls/uitls';
import axios from '../../axios'

class Header extends React.Component{
    state = {}
    componentWillMount(){
        this.setState({
            userName:'浅吟风迹'
        })
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({sysTime});
        })
        this.getWeatherAPI()
    }
    getWeatherAPI(){
        let city = '北京';
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+ encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if (res.status == 'success') {
                let data = res.results[0].weather_data[0];
                this.setState({dayPictureUrl:data.dayPictureUrl,weather:data.weather})
            }
        })
    }
    render(){
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span = {24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span = {4} className="breadcrumb-tit">
                       首页
                    </Col>
                    <Col span = {20} className="weather">
                        <span className="weather-date">{this.state.sysTime}</span>
                        <span className="weather-con">
                            <img src={this.state.dayPictureUrl}/>
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header;