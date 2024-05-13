
import '../styles/forms.css';

// eslint-disable-next-line react/prop-types
function Button({className, title, type, onClick}) {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
        >{title}</button>
    )
}
// eslint-disable-next-line react/prop-types
function DeleteSectionButton({ isActive, className, title, type, onClick }) {
    return (
        <button
            className={isActive ? className : 'hidden'}
            type={type}
            onClick={onClick}
        >{title}</button>
    )
}

export {Button, DeleteSectionButton}