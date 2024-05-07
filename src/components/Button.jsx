// eslint-disable-next-line react/prop-types
export default function Button({className, title, type, onClick}) {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
        >{title}</button>
    )
}