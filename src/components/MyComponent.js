import React, { useState } from 'react';
import './MyComponent.scss'; // Import CSS file for MyComponent
import UserIn4 from './UserIn4';
import Displayin4 from './Displayin4';
// class MyComponent extends React.Component {
//      state = {
//         lannisterFamily : [
//             {id:    1 ,name: "Tywin Lannister", age: 60, address:"king's landing"},
//             {id:    2 ,name: "Tyrion Lannister", age: 38, address:"king's landing"},
//             {id:    3 ,name: "Jaime Lannister", age: 34, address:"king's landing"},
//             ],
//         starkFamily : [
//             {id: 1, name: "Rob Stark", age: 19, address:"winterfell"},
//             {id: 2, name: "Jon Snow", age: 23, address:"the night watcher"},
//             {id: 3, name: "Sansa Stark", age: 21, address:"winterfell"},
//             ]
//         }

//     // handleClick(event){
//     //     console.log(" Tran Thao Nguyen is the most pretty girl in",this.state.address);
//     //     console.log(event);
//     //     this.setState({name:"daemon tagaryen"})
//     // }
//     // handleOnMveOver(event){
//     //     console.log(event.pageX)
//     // }
//     handleAdnewUser = (obj) =>{
//         if( obj.name.endsWith("Lannister")){
//              this.setState({
//             lannisterFamily : [obj,...this.state.lannisterFamily]
//         })}
//         else{
//              this.setState({
//             starkFamily : [obj,...this.state.starkFamily]
//         })}
//     }
   
//     //  handelDelete = (id) => {
//     //     let listUser1 = this.state.lannisterFamily;
//     //     listUser1 = listUser1.filter(item => item.id !== id);
//     //     this.setState({
//     //         lannisterFamily : listUser1, 
//     //     })
//     // }
//    handleDelete = (id, family) => {
//     this.setState((prevState) => {
//         let updatedFamily = prevState[family].filter(item => item.id !== id);
//         return {
//             [family]: updatedFamily
//         };
//     });
// }
//    render() {
//     const paratheon =['robert paratheon','theon','danerys'];
//         return(
//             <>
//                 <UserIn4
//                 handleAdnewUser = {this.handleAdnewUser}
//                 />
//                 <br></br>
//                 <Displayin4 
//                 name = {paratheon[0]} 
//                 age={30} 
//                 death ="pig's bite"
//                 lannisters={this.state.lannisterFamily} 
//                 starks = {this.state.starkFamily}
//                 handleDelete = {this.handleDelete}
//                 />
//            </>
//        );
//    }
// }
const MyComponent = (props) => {
   const [families, setFamilies] = useState({
        lannisterFamily : [
            { id: 1, name: "Tywin Lannister", age: 60, address: "king's landing" },
            { id: 2, name: "Tyrion Lannister", age: 38, address: "king's landing" },
            { id: 3, name: "Jaime Lannister", age: 34, address: "king's landing" }
        ],
    
        starkFamily : [
            { id: 1, name: "Rob Stark", age: 19, address: "winterfell" },
            { id: 2, name: "Jon Snow", age: 23, address: "the night watcher" },
            { id: 3, name: "Sansa Stark", age: 21, address: "winterfell" },
    ]
});

    const handleAdnewUser = (obj) => {
        const familykey = obj.name.endsWith("Lannister")?'lannisterFamily':'starkFamily';
        setFamilies(prevFamilies => ({
            ...prevFamilies,
            [familykey]:[obj, ...prevFamilies[familykey]]
        }));
        };

    const handleDelete = (id, familykey) => {
            setFamilies(prevFamilies => ({
                ...prevFamilies,
                [familykey]: prevFamilies[familykey].filter(item => item.id !== id)
            }));
        };
        
    const paratheon =['robert paratheon','theon','danerys'];
        return(
            <>
                <UserIn4
                handleAdnewUser = {handleAdnewUser}
                />
                <br></br>
                <Displayin4 
                name = {paratheon[0]} 
                age={30} 
                death ="pig's bite"
                lannisters={families.lannisterFamily} 
                starks = {families.starkFamily}
                handleDelete = {handleDelete}
                />
           </>
        );
   }
export default MyComponent;
