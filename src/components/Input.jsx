
// eslint-disable-next-line react/prop-types
export default function Input({className, label, placeholder, type, name, text, onTyping}) {

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