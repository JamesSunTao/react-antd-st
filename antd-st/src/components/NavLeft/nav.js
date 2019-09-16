import React from 'react'
import './nav.css'
import menuConfig from '../../resource/menuConfig'
import { Menu, Icon } from 'antd';
import './nav'

const { SubMenu } = Menu;

class NavLeft extends React.Component{
    
    componentWillMount(){
        const menuTreeData = this.initMenu(menuConfig);
         this.setState({menuTreeData})
    }
    initMenu=(data)=>{
       return data.map((item)=>{
           if (item.children) {
               return (<SubMenu title={item.title} key={item.key}>
                       {this.initMenu(item.children)}
               </SubMenu>)
           }

           return  <Menu.Item  title={item.title} key={item.key}>{item.title}</Menu.Item >
       })
    }
    render(){
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>Imooc MS</h1>
                </div>
                <Menu mode="vertical" theme="dark">
                    {this.state.menuTreeData}     
                </Menu>
            </div>
        )
    }
}

export default NavLeft;