import React,{Component} from "react";

const UpdateComponent = OldComponent =>{
    class NewComponent extends Component {
        state={
            name:'',
            username:''
        }
        onChange=(e)=>{
            this.setState({name:e.target.value})
        }
        onSubmitForm = (e)=>{
            e.preventDefault()
            alert(`${this.state.name} is my name`)
        }
        render() {
            return (
                <OldComponent name='Label:' change={this.onChange} onSubmit={this.onSubmitForm}/>
            )
        }
    }
    return NewComponent
}

export default UpdateComponent