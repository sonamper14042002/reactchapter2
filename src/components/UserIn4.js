import React from 'react';
import images from './../images.jpg'
class UserIn4 extends React.Component{
    state = {
       name: "Aegon Targaryen",
       age: 21,
       address: "King's Landing"
   };
   handleOnchangeInput = (event) => {
        this.setState({
            name: event.target.value,
            address:"dragon stone"
        })
    }
    handleOnchangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAdnewUser({
            id : Math.floor((Math.random()*100)+1)+'-random',
            name : this.state.name,
            age : this.state.age,
        }
        );
    }
    render(){
        return(
            <div className="Userin4"> {/* Gắn lớp CSS là myComponent */}
               <h1>HOUSE OF THE DRAGON</h1>
               <img src = {images}/>
                   <p>Lord of Winterfell is {this.state.name} ruling in {this.state.address}.
                   He is {this.state.age} years old.</p>
                    <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                    <label>your name : </label>
                        <input 
                        value = {this.state.name}
                        type = "text"
                        onChange={(event)=>this.handleOnchangeInput(event)}/>

                    <label>your age : </label>
                        <input 
                        value = {this.state.age}
                        type = "number"
                        onChange={(event)=>this.handleOnchangeAge(event)}/>
                        <button>submit</button>
                    </form>
                    <div> i am a child </div> </div>
        )
    }
}
export default UserIn4;
