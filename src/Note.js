import React, {Component} from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { FaTrash, FaSave } from 'react-icons/fa';


class Note extends Component{
    constructor(props){
        super(props)
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
        this.state = {
            editing: false
        }
    }
    handleEdit(){
        this.setState({
            editing : true
        })
    }

    handleRemove(){
        this.props.onRemove(this.props.index)
    }

    handleSave(e){
        e.preventDefault()
        this.props.onChange(this._newText.value, this.props.index)
        this.setState({
            editing : false
        })
    }

    renderForm(){
        return (
            <div className="note">
                <form onSubmit={this.handleSave}>
                    <textarea ref={input => this._newText = input}></textarea>
                    <button id="save"><FaSave /></button>
                </form>
            </div>
        )
    }

    renderDisplay(){
        return(
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button id="edit" onClick={this.handleEdit}><FaPencilAlt /></button>
                    <button id="remove" onClick={this.handleRemove}><FaTrash /></button>
                </span>
            </div>
        )
    }

    render(){
        if(this.state.editing){
            return this.renderForm()
        }
        else{
            return this.renderDisplay()
        }
    }
}

export default Note;