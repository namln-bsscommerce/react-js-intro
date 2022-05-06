import './App.css';
import { useState, useEffect } from 'react';

const tabs = ['users', 'companies', 'countries'];

function App() {
    const [counter, setCounter] = useState(0);
    const [items, setItems] = useState([]);
    const [activeTab, setActiveTab] = useState('users');

    useEffect(() => {
        fetch(`https://6274bb9a345e1821b22ecc93.mockapi.io/api/v1/users`)
            .then(res => res.json())
            .then(res => setItems(res));
    }, [])

    return (
        <div className='App'>
            <h1 className='title'>
                News reading app
            </h1>
            <div className='timer'>
                Total reading time:&nbsp;<b>{counter}</b>&nbsp;s
            </div>
            <div className="tabs">
                {tabs.map(tab => (
                    <li className='tab' key={tab}>
                        <button>{tab.charAt(0).toUpperCase() + tab.slice(1)}</button>
                    </li>
                ))}
            </div>
            <ul className='content'>
                {items.map(item => (
                    <li key={item.id}>{item.id}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
