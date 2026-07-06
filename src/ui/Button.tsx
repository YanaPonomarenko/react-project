type ButtonProp = {
    text: string
}

const Button = ({text}:ButtonProp) =>
{
    return (<button className="bg-mauve-400 w-1/6 m-4 rounded-lg text-fuchsia-200">{text}</button>)
}
export default Button