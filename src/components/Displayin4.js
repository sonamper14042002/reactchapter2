import React, { useEffect, useState } from 'react';
//statelfull style  =  class
// class Displayin4 extends React.Component {
//     state = {
//         isShow : false
//     }
//     handleShowdetail= () => {
//         this.setState({
//             isShow : !this.state.isShow
//         })
//     }
//     render() {
//         const { lannisters, starks, name, age, death, handleDelete } = this.props;
//         return (
//             <div className ="displayin4">
//                 <div><span onClick={() =>{this.handleShowdetail()}}> {this.state.isShow === true ? "hide" : "detail"} :</span> </div>  
//                 {lannisters && this.state.isShow && (
//                     <>
//                         <h2>Lannister Family</h2>
//                         {lannisters.map((character) => {
//                             if(character.age > 20 ){
//                             return (
//                             <div key={character.id} className = 'green'>
//                                 <div>My name is {character.name}, I am {character.age}, I live in {character.address}.</div>
//                                  <button onClick={()=> handleDelete(character.id,'lannisterFamily')}> Delete</button>
//                             </div> )}
//                             else{
//                                  return (
//                             <div key={character.id} className = 'red'>
//                                 <div>My name is {character.name}, I am {character.age}, I live in {character.address}.</div>
//                                 <button onClick={()=> handleDelete(character.id, 'lannisterFamily')}> Delete</button>
//                             </div> )
//                             }
//                         })}
//                         <hr></hr>
//                     </>
//                 )}

//                 {starks && this.state.isShow && (
//                     <>
//                         <h2>Stark Family</h2>
//                         {starks.map((character) => {
//                             return (
//                                 <div key={character.id} className={character.age > 20 ? "green" : "red"}>
//                                 <div>My name is {character.name}, I am {character.age}, I live in {character.address}.</div>
//                                  <button onClick={()=> handleDelete(character.id,'starkFamily')}> Delete</button>
//                                 </div> )
//                     })}
//                     </>
//                 )}
//                 {this.state.isShow && ( 
//                 <><h2>Paratheon Family :</h2>

//                 {name && <div>My name is {name}, I am {age} and I was murdered by {death}.</div>}
//                 <hr></hr></>)}
//             </div>
//         );
//     }
// }

const Displayin4 = (props) => {
    const { lannisters, starks, name, age, death, handleDelete } = props;
    const [isShow, setShow] = useState(true);
    // stateless style
    const handleShowhide = () => {
        // previous class code style :
        // this.setState({
        //     isShow : true
        // })
        setShow(!isShow);
    }
    useEffect(
        ()=>{
        if(lannisters.length === 0){
            alert("lannisters is all punished !")
        }
        setTimeout(()=>{document.title = "Seven Kingdoms"},3000)
        console.log('call me render >>>.:')
    },[lannisters]
);
    useEffect(
        ()=>{
        if(starks.length === 0){
            alert("starks is all punished !")
        }
        setTimeout(()=>{document.title = "Seven Kingdoms"},3000)
        console.log('call me render >>>.:')
    },[starks]
);

        return (
            <div className ="displayin4">
                <div>
                <span onClick={() => handleShowhide()}>show list users :</span>
                </div>
                {lannisters && isShow && (
                    <>
                        <h2>Lannister Family</h2>
                        {lannisters.map((character) => {
                            if(character.age > 20 ){
                            return (
                            <div key={character.id} className = 'green'>
                                <div>My name is {character.name}, I am {character.age}, I live in {character.address}.</div>
                                 <button onClick={()=> handleDelete(character.id,'lannisterFamily')}> Delete</button>
                            </div> )}
                            else{
                                 return (
                            <div key={character.id} className = 'red'>
                                <div>My name is {character.name}, I am {character.age}, I live in {character.address}.</div>
                                <button onClick={()=> handleDelete(character.id, 'lannisterFamily')}> Delete</button>
                            </div> )
                            }
                        })}
                        <hr></hr>
                    </>
                )}

                {starks && isShow && (
                    <>
                        <h2>Stark Family</h2>
                        {starks.map((character) => {
                            return (
                                <div key={character.id} className={character.age > 20 ? "green" : "red"}>
                                <div>My name is {character.name}, I am {character.age}, I live in {character.address}.</div>
                                 <button onClick={()=> handleDelete(character.id,'starkFamily')}> Delete</button>
                                </div> )
                    })}
                    </>
                )}
                {isShow && ( 
                <><h2>Paratheon Family :</h2>

                {name && <div>My name is {name}, I am {age} and I was murdered by {death}.</div>}
                <hr></hr></>)}
            </div>
        );
    }
export default Displayin4;
