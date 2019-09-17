import React from 'react'
export default class Info extends React.Component {

    render() {
        return (
            <div>
                this is Info page. 
                <p>动态路由参数为{this.props.match.params.mainId}</p>
            </div>
        );
    }
}