import React from 'react'
import { Card ,Button,Modal, message} from 'antd'
import { Editor} from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class Rich extends React.Component {
   state = {
    editorState:'',
    showRichText:false,
    insertHtml:'<p>我是插入的内容</p>'
   }
    onEditorStateChange =(editorState)=>{
       this.setState({
           editorState,
       })
    }
    clearContent=()=>{
        this.setState({
            editorState:''
        })
    }
    onEditorChange = (editorContent) => {
        this.setState({
            editorContent,
        });
    }

    getContent=()=>{
        if(!this.state.editorContent){
          message.warning("数据为空");
          return 0;
        }
        this.setState({
            showRichText:true
        })
    }
    render() {
        const {editorState} = this.state;
        return (
            <div>
                <Card>
                    <Button type="primary" onClick={this.clearContent}>清空内容</Button>
                    <Button type="primary" onClick={this.getContent}>获取内容</Button>
                </Card>
                <Card title="富文本">
                    <Editor
                    editorState={editorState}     
                    onContentStateChange={this.onEditorChange}          
                    onEditorStateChange={this.onEditorStateChange}
                    />
                </Card>
                <Modal
                    title="富文本内容"
                    visible={this.state.showRichText}                    
                    onCancel={()=>{
                        this.setState({showRichText:false})
                    }}
                    footer= {null}
                >   
                {draftToHtml(this.state.editorContent)}           
                {/* {this.state.editorContent} */}
                </Modal>
            </div>
            
            
        );
    }
}