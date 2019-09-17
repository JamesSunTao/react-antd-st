import React from 'react'
import { Row, Col } from 'antd'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import NavLeft from './components/NavLeft/nav'
import './style/common.css'
import Home from './pages/Home'

export default class extends React.Component{

    render(){
        return (
           <Row className="container">
               <Col span={4} className="nav-left">
                 <NavLeft></NavLeft>
               </Col>
               <Col span={20} className="main">
                   <Header></Header>
                   <Row className="content">
                       <Home/>
                       {/* {this.props.children} */}
                   </Row>
                   <Footer></Footer>
               </Col>

           </Row>
        )
    }
}