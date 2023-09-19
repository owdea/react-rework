import { useState } from "react";

function Home() {
    const [color, changeColor] = useState("#12afed") // style={{background: color}}
    return (
        
        <div className="home"> 
                <h1>Mé portfolium</h1>
                
            <h2>Homepage</h2>
        </div>
    );
}

export default Home;