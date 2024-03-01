import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";

function Key({pianokey}){

    const { keypress} = useSelector((store: any) => store.pianokeys);


    // console.log(pianokey, keypress, keypress ==pianokey);



        if (keypress.filter(e => e== pianokey) != '') {
      

      return (

        <div style={{display:'flex', flexDirection:"column"}}>

        <button style={{ backgroundColor: 'black' , height:'20vh',  width:'3vw'}}>
       
        </button>

        <button>{pianokey}</button> 

        </div>


      );
   
    } else return (
  
      <div style={{display:'flex', flexDirection:"column"}}>

      <button style={{ backgroundColor: 'white' , height:'20vh',  width:'3vw'}}>
     
      </button>

      <button></button> 

      </div>
    );



}
  


export default Key;