import React from 'react'
import { Card, Button } from 'antd'
import {connect} from 'react-redux'
import { fromJS } from 'immutable'
import * as RM from '../../redux/action'

class City extends React.Component{

    btnAdd=()=>{
        // const {dispatch} = this.props;
        this.props.dispatch(RM.addNum());
    }
    btnReduce=()=>{
        this.props.dispatch(RM.reduceNum());
    }
    render(){
        return (
            <Card title="计数器">
            <div>计数器：{this.props.state.number}</div>
                <div>
                    <Button type="primary" onClick={this.btnAdd}>+</Button>
                    <Button type="danger" onClick={this.btnReduce}>-</Button>
                    {/* <button type="info" onClick={this.btnReduce.bind(this)}>-</button> */}
                </div>

            </Card>
        )
       
    }
}

const statData = (state) => {
    return {
        state: state
    }
}
export default connect(statData)(City);