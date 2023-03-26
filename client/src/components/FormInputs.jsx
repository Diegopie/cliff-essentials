
const FormInput = (props) => {

    const placeholderText = (props.type === 'employee' ? 'Employee Name' : 'Reservation Number')

    return (
        <div className="row mt-3">
            <div className="offset-2 col-8">
                <input
                    type="text"
                    className="form-control"
                    placeholder={placeholderText}
                    value={props.state}
                    onChange={(e) => {
                        e.preventDefault();
                        props.setState(e.target.value);
                    }}
                />
            </div>
        </div>
    )
}

export default FormInput;