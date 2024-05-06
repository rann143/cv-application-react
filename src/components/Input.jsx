import {useState} from 'react'

// eslint-disable-next-line react/prop-types
export default function Input({ label, type}) {
    const [text, setText] = useState('');

    
    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <label>
            {label}
            <input
                type={type}
                value={text}
                onChange={handleChange}
            />
        </label>
    )
}