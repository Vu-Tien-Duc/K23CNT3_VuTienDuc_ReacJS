import React from 'react'

export default function VtdJsxexpression() {
    // Biến
    const name = "Vũ Tiến Đức";
    const user = {
        fristName: "Đức",
        lastName: "Vũ"
    }
    // hàm
    const fullName=(user)=>{
        return   user.fristName + " " + user.lastName ;

    }
    // element
    const element = (
        <div>
            {/* Biểu thức Jsx */}
            <p style={{color:"blue"}}>{fullName(user)}</p>
            <hr/>
            <h2 style={{backgroundColor:"black", color:"white", borderRadius:"10px", width:"30%" , height:"50px", lineHeight:"50px"}}>Welcome to {name}</h2>
        </div>
    );
    // hàm
    const sayWelcome = (name)=>{
        if(name)
        {
            return <h4 style={{backgroundColor:"green", color:"yellow", borderRadius:"10px", width:"23%" , height:"50px", lineHeight:"50px"}}>Welcome to {name}</h4>
        }
        else{
            return <h3 style={{backgroundColor:"red", color:"black", borderRadius:"10px", width:"25%" , height:"50px", lineHeight:"50px"}}> Welcome to K23CNT3</h3>
        }
    }
  return (
    <div>
        <h1>Đây là  JSX Expression </h1>
        {/* sử dụng biến element */}
        {element}
        <hr/>
        {sayWelcome()}
        <hr/>
        {sayWelcome(name)}
    </div>
  )
}

