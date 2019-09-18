import React from 'react'
import { Table, Divider, Tag,Card } from 'antd';


class TableBase extends React.Component{
    state={
        dataSource2:[]
    }

    render(){
        const dataSource = [];
            for (let i = 0; i < 46; i++) {
                dataSource.push({
                key: i,
                name: `Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`,
            });
        }
          
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
            },
        ]

        // 表格分页属性
        const paginationProps = {    
            pageSize:8       
        }
  
        return (
            <div>
                <Card title="基础表格" style={{marginTop:10}}>
                    <Table columns={columns} dataSource={dataSource}  pagination={paginationProps}/>
                </Card>   
                
                <Card title="动态数据表格" style={{marginTop:10}}>
                    <Table columns={columns} dataSource={this.state.dataSource2}  pagination={paginationProps}/>
                </Card> 
            </div>
            
        )   
    }
}

export default TableBase;

