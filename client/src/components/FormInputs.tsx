import { FormState } from "./Form";

interface IFormInputProps {
    placeholder: string,
    state: FormState
}

const FormInput = (props: IFormInputProps) => {

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(props.state.stateValue);

            document.getElementById(props.placeholder).classList.remove('hidden');

            setTimeout(() => {
                document.getElementById(props.placeholder).classList.add('hidden')
            }, 2500);

            console.log(`${props.state.stateValue} copied to clipboard`);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    return (
        <div className="flex">
            <input
                type="text"
                // BS
                className="appearance-none border border-blue-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                placeholder={props.placeholder}
                value={props.state.stateValue}
                onChange={(e) => {
                    e.preventDefault();
                    props.state.setState(e.target.value);
                }}
            />
            {
                props.state.stateValue === '' ? null :
                    <article className="relative App-hideOnPrint">
                        <button title={`Copy ${props.placeholder} to Clipboard`} className="ml-2 p-1"
                            onClick={handleClick}
                        >
                            <img src={'assets/clipboard.svg'} className="h-7" />
                        </button>
                        <div id={props.placeholder} className="
                        absolute right-0 top-0 left-9 border  bg-white rounded-md offset-1 w-16 text-center hidden">Copied!</div>
                    </article>
            }
        </div>
    )
}

export default FormInput;