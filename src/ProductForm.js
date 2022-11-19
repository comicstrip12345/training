import React, { Component } from 'react'

export class ProductForm extends Component {
    state= {
        id:"",
        name:"",
        price:"",
        manuDate:"",
        expDate:"",
        disabled:true,
        errid:false,
        errname:false,
        errprice:false,
        errmanuDate:false,
        errexpDate:false
    }
    onChange=(e=>{
        this.setState({[e.target.name]: e.target.value},()=>{
            const {id,name,price,manuDate,expDate} = this.state
            if(id && name && price && manuDate && expDate){
                this.setState({disabled:false})
            }
            if(this["state"][e.target.name]){
                this.setState({['err'+e.target.name]:false})
            }
            else{
                this.setState({disabled:true})
                this.setState({['err'+e.target.name]:true})
            }
        })
    })
    onSubmit=(e)=>{
        e.preventDefault()
        alert("Thank you for the Product Information")
    }
    
    render() {
        console.log(this.state);
        const {errid,errname,errprice,errmanuDate,errexpDate} = this.state
        return (
            <div>
            <form onSubmit={this.onSubmit}>
                <label>Product ID</label>
                <input type="number" name='id' onChange={this.onChange}/> {errid && "Insert Product ID"}<br/>
                <label>Name</label>
                <input type="text" name='name' onChange={this.onChange}/> {errname && "Insert Name"}<br/>
                <label>Price</label>
                <input type="number" name='price' onChange={this.onChange}/> {errprice && "Insert Price"}<br/>
                <label>Manufacture Date</label>
                <input type="date" name='manuDate' onChange={this.onChange}/> {errmanuDate && "Insert Manufacture Date"}<br/>
                <label>Expire Date</label>
                <input type="date" name='expDate' onChange={this.onChange}/> {errexpDate && "Insert Expiration Date"}<br/>
                <button disabled={this.state.disabled}>Submit</button>
            </form>
        </div>
        )
    }
}

export default ProductForm