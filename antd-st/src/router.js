import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
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

import Home from './pages/Home';
import NoMatch from './pages/ui/nomatch'

export default class IRouter extends React.Component{

    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        {/* <Route path="/login" component={Login}></Route> */}
                        <Route path="/admin" render={()=>
                            <Admin> 
                                <Switch>
                                    <Route path="/admin/home" component={Home}/>
                                    <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                    <Route path="/admin/ui/modals" component={Modals}></Route>
                                    <Route path="/admin/ui/loadings" component={Loadings}></Route>
                                    <Route path="/admin/ui/notification" component={Notice}></Route>
                                    <Route path="/admin/ui/messages" component={Messages} />
                                    <Route path="/admin/ui/tabs" component={Tabs} />
                                    <Route path="/admin/ui/gallery" component={Gallery} />
                                    <Route path="/admin/ui/carousel" component={Carousel} />

                                    <Route path="/admin/form/login" component={Login} />
                                    <Route path="/admin/form/reg" component={Register} />

                                    <Route path="/admin/table/basic" component={TableBase} />

                                    <Route path="/admin/rich" component={Rich} />
                                    <Route component={NoMatch}/>
                                </Switch>                               
                            </Admin>         
                        } ></Route>
                        <Route path="/order/detail" component={Login}></Route>
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}