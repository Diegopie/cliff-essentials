import FormInput from "./FormInputs";

const Form = () => {

    return (
        <section className="flex justify-between">
            <article className="mt-3 columns-1">
                <FormInput
                    placeholder={'Employee Name'}
                // state={employeeName}
                // setState={setEmployeeName}
                />
                <article className="mt-3 columns-2">
                    <FormInput
                        placeholder={'Reservation Number'}
                    // state={reservationNumber}
                    // setState={setReservationNumber}
                    />
                    <FormInput
                        placeholder={'Room Number'}
                    //   state={roomNumber}
                    //   setState={setRoomNumber}
                    />
                </article>
            </article>
        </section>
    )
}

export default Form;