import { useState } from "react";

export function Nav(){
    const [isHome,setIsHome]=useState(true);
    const handleHome = ()=>{setIsHome(!isHome)}
    return(
        <div>
            <a href="#" onClick={handleHome} >home</a>
        <div>{isHome?(<h1>this is home</h1>):(<h1>this is not home</h1>)}</div>
        </div>
    )
}