/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
function Input({className, label, placeholder, type, name, text, onTyping}) {

        return (
            <label>
                {label}
                <input
                    className={className}
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    value={text}
                    onChange={onTyping}
                />
            </label>
        )
}

function ParagraphInput({ className, label, placeholder, name, text, onTyping }) {
    return (
        <label>
            {label}
            <textarea
                className={className}
                placeholder={placeholder}
                name={name}
                key={name}
                value={text}
                onChange={onTyping}
            >    
            </textarea>
         </label>
     )
}
 
export {Input, ParagraphInput}