import React from 'react'
import { Row, Col } from 'antd'
import './header.css'
import Util from '../../uitls/uitls';

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
                        <span className="weather-con">晴转多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header;