import { MouseEvent } from "react";
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
            console.log('Content copied to clipboard');
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
            <button className="ml-2 rounded-sm bg-slate-300"
                onClick={handleClick}
            >
                <img src='../assets/clipboard.svg'/>
            </button>
        </div>
    )
}

export default FormInput;