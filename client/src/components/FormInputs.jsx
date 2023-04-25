
const FormInput = (props) => {

    return (
        <input
            type="text"
            className="form-control"
            placeholder={props.placeholder}
            value={props.state}
            onChange={(e) => {
                e.preventDefault();
                props.setState(e.target.value);
            }}
        />
    )
}

export default FormInput;