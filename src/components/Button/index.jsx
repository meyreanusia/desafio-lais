import "./Button.scss"
export default function Button({to, children,className}){
    return(
            <button to={to} className={className}>
                {children}
            </button>
    )
}