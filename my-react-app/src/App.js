import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Content from './Content';

function App() {
    const themeContext = useContext(ThemeContext);

    return (
        <div>
            <button
                style={{ margin: '1rem', marginBottom: 0, fontSize: '1.2rem' }}
                onClick={() => {
                    themeContext.toggleTheme();
                }}
            >
                Toggle theme
            </button>
            <Content />
        </div>
    );
}

export default App;
