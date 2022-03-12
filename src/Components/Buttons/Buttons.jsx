import "./buttons.css"
const Button = ({content,width})=>(
    <button
        type="button"
        className="navbar-button inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-sm font-medium rounded-lg text-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
        {content}
    </button>
);
export default Button;