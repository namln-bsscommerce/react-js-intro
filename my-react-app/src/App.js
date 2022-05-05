import { useState } from "react";

function App() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    console.log(text1, text2);

    return (
        <div className="App">
            <input 
                onChange={e => setText1(e.target.value)} 
                value={text1} 
                type="text" 
            />
            <input 
                onChange={e => setText2(e.target.value)} 
                value={text2} 
                type="text" 
            />
        </div>
    );
}

export default App;
