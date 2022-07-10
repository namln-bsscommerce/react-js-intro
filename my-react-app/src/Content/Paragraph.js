import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function Paragraph() {
    const themeContext = useContext(ThemeContext);

    return (
        <h1
            style={{
                color: 'red',
                backgroundColor: themeContext.theme === 'light' ? '#fff' : '#666'
            }}
        >
            Hello World
        </h1>
    );
}

export default Paragraph;
