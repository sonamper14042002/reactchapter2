import React, { useState } from 'react';
import images from './../images.jpg'
// class UserIn4 extends React.Component{
//     state = {
//        name: "Aegon Targaryen",
//        age: 21,
//        address: "King's Landing"
//    };
//    handleOnchangeInput = (event) => {
//         this.setState({
//             name: event.target.value,
//             address:"dragon stone"
//         })
//     }
//     handleOnchangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }
//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAdnewUser({
//             id : Math.floor((Math.random()*100)+1)+'-random',
//             name : this.state.name,
//             age : this.state.age,
//         }
//         );
//     }
//     render(){
//         return(
//             <div className ="Userin4"> {/* Gắn lớp CSS là myComponent */}
//                <h1>HOUSE OF THE DRAGON</h1>
//                <img src = {images}/>
//                    <p>Lord of Winterfell is {this.state.name} ruling in {this.state.address}.
//                    He is {this.state.age} years old.</p>
//                     <form onSubmit={(event)=>this.handleOnSubmit(event)}>
//                     <label>your name : </label>
//                         <input 
//                         value = {this.state.name}
//                         type = "text"
//                         onChange={(event)=>this.handleOnchangeInput(event)}/>

//                     <label>your age : </label>
//                         <input 
//                         value = {this.state.age}
//                         type = "number"
//                         onChange={(event)=>this.handleOnchangeAge(event)}/>
//                         <button>submit</button>
//                     </form>
//                     <div> i am a child </div> </div>
//         )
//     }
// }

const UserIn4 = (props) => {
    const [name, setName] = useState("Aegon Targaryen");
    const [age, setAge] = useState(21);
    const [address, setAddress] = useState("King's Landing");

    const handleOnchangeInput = (event) => {
        setName(event.target.value);
        setAddress("dragon stone");
    }
    const handleOnchangeAge = (event) => {
        setAge(event.target.value);
    }
    const handleOnSubmit = (event) => {
            event.preventDefault();
            props.handleAdnewUser({
            id : Math.floor((Math.random()*100)+1)+'-random',
            name : name,
            age : age,}
        );
    }
        return(
            <div className ="Userin4"> {/* Gắn lớp CSS là myComponent */}
               <h1>HOUSE OF THE DRAGON</h1>
               <img src = {images} alt ="house of the dragon"/>
                   <p>Lord of Winterfell is {name} ruling in {address}.
                   He is {age} years old.</p>
                    <form onSubmit={handleOnSubmit}>
                    <label>your name : </label>
                        <input 
                        value = {name}
                        type = "text"
                        onChange={handleOnchangeInput}/>

                    <label>your age : </label>
                        <input 
                        value = {age}
                        type = "number"
                        onChange={handleOnchangeAge}/>
                        <button>submit</button>
                    </form>
                    <div> i am a child </div> </div>
        )
    }
export default UserIn4;
