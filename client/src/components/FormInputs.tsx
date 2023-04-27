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
            console.log(`${props.state.stateValue} copied to clipboard`);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    return (
        <div className="flex">
            <input
                type="text"
                className="form-control"
                placeholder={props.placeholder}
                value={props.state.stateValue}
                onChange={(e) => {
                    e.preventDefault();
                    props.state.setState(e.target.value);
                }}
            />
            {
                props.state.stateValue === '' ? null :
                <button title={`Copy ${props.placeholder} to Clipboard`} className="ml-2 p-1"
                    onClick={handleClick}
                >
                    <img src={'assets/clipboard.png'} className="h-8" />
                </button>
            }
        </div>
    )
}

export default FormInput;