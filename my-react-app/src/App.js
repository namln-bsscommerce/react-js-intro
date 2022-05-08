import './App.css';
import { useState, useEffect } from 'react';

const tabs = ['users', 'companies', 'countries'];

function App() {
    const [timer, setTimer] = useState(0);
    const [items, setItems] = useState([]);
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [loading, setLoading] = useState(true);

    // Call api each time tab switched
    useEffect(() => {
        setLoading(true);
        fetch(`https://6274bb9a345e1821b22ecc93.mockapi.io/api/v1/${activeTab}`)
            .then(res => res.json())
            .then((res) => {
                setItems(res);
                setLoading(false);
            });
    }, [activeTab])

    // Timer
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer => timer + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer])

    const renderContent = (item) => {
        switch (activeTab) {
            case 'users':
                return (
                    <div>
                        <div><b>ID:</b>&emsp;{item.id}</div>
                        <div><b>Username:</b>&emsp;{item.username}</div>
                        <div><b>Age:</b>&emsp;{item.age}</div>
                        <hr />
                    </div>
                )
            case 'companies':
                return (
                    <div>
                        <div><b>ID:</b>&emsp;{item.id}</div>
                        <div><b>Name:</b>&emsp;{item.company_name}</div>
                        <div><b>Description:</b>&emsp;{item.description}</div>
                        <hr />
                    </div>
                )
            case 'countries':
                return (
                    <div>
                        <div><b>ID:</b>&emsp;{item.id}</div>
                        <div><b>Name:</b>&emsp;{item.country_name}</div>
                        <div><b>Description:</b>&emsp;{item.description}</div>
                        <hr />
                    </div>
                )
            default:
                return (
                    <h3>Wrong format</h3>
                )
        }
    }

    // Render timer in format: ?h ?m ?s
    const renderTimer = (seconds) => {
        if (seconds < 60)
            return <b>{seconds}s</b>;
        else if (seconds < 3600)
            return <><b>{Math.floor(seconds / 60)}</b>m&nbsp;<b>{seconds % 60}</b>s</>;
        else
            return <><b>{Math.floor(seconds / 3600)}</b>h&nbsp;<b>{Math.floor((seconds % 3600) / 60)}</b>m&nbsp;<b>{Math.floor(seconds % 60)}</b>s</>;
    }

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div className='App'>
            {/* Loading effect overlay */}
            {loading && (
                <div className="overlay">
                    <div className="overlay__inner">
                        <div className="overlay__content"><span className="spinner"></span></div>
                    </div>
                </div>
            )}

            <h1 className='title'>
                News reading app
            </h1>

            {/* Timer */}
            <div className='timer'>
                Total reading time:&nbsp;{renderTimer(timer)}
            </div>

            {/* Tab navigation */}
            <div className="tabs">
                {tabs.map(tab => (
                    <li className='tab' key={tab}>
                        <button onClick={() => handleTabClick(tab)}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</button>
                    </li>
                ))}
            </div>

            {/* Content section */}
            {!loading && (
                <ul className='content'>
                    {items.map(item => (
                        <li key={item.id}>{renderContent(item)}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;
