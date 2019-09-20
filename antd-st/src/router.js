import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import App from './App'
import Admin from './admin'

import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
import Login from './pages/form/login'
import Register from './pages/form/register'

import TableBase from './pages/table/tableBase'

import Rich from './pages/rich'

import City from './pages/city'

import Home from './pages/Home';
import NoMatch from './pages/ui/nomatch'

export default class IRouter extends React.Component{

    render(){
        return (
            <Router>
                <App>
                    <Switch>                        
                        <Route path="/" render={()=>
                            <Admin> 
                                <Switch>          
                                    <Route path="/"exact component={Home}/>                                                            
                                    <Route path="/ui/buttons" component={Buttons}></Route>
                                    <Route path="/ui/modals" component={Modals}></Route>
                                    <Route path="/ui/loadings" component={Loadings}></Route>
                                    <Route path="/ui/notification" component={Notice}></Route>
                                    <Route path="/ui/messages" component={Messages} />
                                    <Route path="/ui/tabs" component={Tabs} />
                                    <Route path="/ui/gallery" component={Gallery} />
                                    <Route path="/ui/carousel" component={Carousel} />

                                    <Route path="/form/login" component={Login} />
                                    <Route path="/form/reg" component={Register} />

                                    <Route path="/table/basic" component={TableBase} />
                       
                                    <Route path="/rich" component={Rich} />
                                    <Route path="/city" component={City} />
                                    <Route component={NoMatch}/>
                                </Switch>                               
                            </Admin>         
                        } ></Route>
                        <Route path="/order/detail" component={Login}></Route>
                    </Switch>
                </App>
            </Router>
        );
    }
}