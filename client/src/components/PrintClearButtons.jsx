const PrintClearButton = (props) => {
    return (
        <>
            <section className="row mt-3 App-hideOnPrint" id='buttons'>
                <article className="offset-2 col-8">
                    <button
                        type="button"
                        className="btn btn-block btn-outline-primary col-5"
                        onClick={() => window.print()}
                    > Print </button>
                    <button
                        type="button"
                        className="btn btn-block btn-outline-danger col-5 offset-2"
                        onClick={() => {
                            props.setOrderItems([]);
                            props.setEmployeeName('');
                            props.setReservationNumber('');
                        }}
                    > Clear </button>
                </article>
            </section>
            <br />
            <hr className='offset-2 col-8' />
        </>
    )
}

export default PrintClearButton;