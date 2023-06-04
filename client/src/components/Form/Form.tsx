import FormInput from "./FormInputs";

export type FormState = {
    stateValue: string,
    setState: (arg: string) => string | void
}

interface FormProps {
    employeeState: FormState,
    reservationState: FormState,
    roomState: FormState
}

export const Form = (props: FormProps) => {

    return (
        <section className="flex justify-evenly">
            <article className="mt-3 container columns-1">
                <FormInput
                    placeholder={'Employee Name'}
                    state={props.employeeState}
                />
                <article className="mt-3 columns-2">
                    <FormInput
                        placeholder={'Reservation Number'}
                        state={props.reservationState}
                    // setState={setReservationNumber}
                    />
                    <FormInput
                        placeholder={'Room Number'}
                        state={props.roomState}
                    //   setState={setRoomNumber}
                    />
                </article>
            </article>
        </section>
    )
}
