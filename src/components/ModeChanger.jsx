import { useState,useEffect } from "react";
function ModeChanger() {
    const [mode , setMode] = useState(false) // false = Dark Mode

    function handleClick(){
        setMode(prev => !prev)
    }
    useEffect(()=>{
        console.log(mode)
        if(!mode){
            document.documentElement.style.setProperty("--bg-color","black")
            document.documentElement.style.setProperty("--text-color","#FFC845")
            document.documentElement.style.setProperty("--text-color-secondary","snow")
        }
        else{
            document.documentElement.style.setProperty("--bg-color","white")
            document.documentElement.style.setProperty("--text-color","black")
            document.documentElement.style.setProperty("--text-color-secondary","black")
        }
    },[mode ])
    return ( 

        <button onClick={handleClick} className="modeChanger"><span className={!mode ? "mode" : ""}>Dark Mode</span> / <span className={mode ? "mode" : " "}>Light Mode</span></button>
     );
}

export default ModeChanger;