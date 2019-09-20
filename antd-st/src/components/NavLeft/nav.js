import React from 'react'
import './nav.css'
import menuConfig from '../../resource/menuConfig'
import { Menu, Icon } from 'antd';
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { switchMenu } from '../../redux/action'

import './nav'

const { SubMenu } = Menu;

class NavLeft extends React.Component{
    state = {
        currentKey:''
    }
    componentWillMount(){
        const menuTreeData = this.initMenu(menuConfig);
        let currentKey =  window.location.hash.replace(/#|\?.*$/g,'');
         this.setState({menuTreeData})
    }
    handleClick = ({item}) =>{
        const {dispatch} = this.props;
        dispatch(switchMenu(item.props.title));
        // debugger
        this.setState({
            currentKey:item.key
        })
    }
    initMenu=(data)=>{
       return data.map((item)=>{
           if (item.children) {
               return (<SubMenu title={item.title} key={item.key}>
                       {this.initMenu(item.children)}
               </SubMenu>)
           }

           return  <Menu.Item  title={item.title} key={item.key}>
              <NavLink to={item.key}>{item.title}</NavLink>
           </Menu.Item >
       })
    }
    render(){
        return (
            <div>
                <div className="logo">
                    <NavLink to="/admin/home">
                        <img src="/assets/logo-ant.svg" alt=""/>
                        <h1>Imooc MS</h1>
                    </NavLink>
                </div>
                <Menu 
                onClick = {this.handleClick}
                mode="vertical" 
                theme="dark"
                selectedKeys = {[this.state.currentKey]}
                >
                    {this.state.menuTreeData}     
                </Menu>
            </div>
        )
    }
}

export default connect()(NavLeft);