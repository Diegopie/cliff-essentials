const PrintClearButton = (props) => {
    return (
        <>
            <section className="m-auto text-center mt-3 App-hideOnPrint" id='buttons'>
                <article className="flex justify-evenly">
                    <button
                        type="button"
                        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => window.print()}
                    > Print </button>
                    <button
                        type="button"
                        className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
                        onClick={() => {
                            props.setOrderItems([]);
                            props.setEmployeeName('');
                            props.setReservationNumber('');
                        }}
                    > Clear All </button>
                </article>
            </section>
            <br />
            <hr className='offset-2 col-8' />
        </>
    )
}

export default PrintClearButton;