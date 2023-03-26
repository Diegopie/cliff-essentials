import Select from 'react-select'

const SelectContainer = (props) => {
    return (
        <section className="row mt-3 App-hideOnPrint">
            <article className="offset-2 col-8">
                <Select
                    value={null}
                    onChange={(selectedOption) => {
                        // console.log(selectedOption);
                        if (selectedOption) {
                            const item = {
                                value: selectedOption.value,
                                label: selectedOption.label,
                                price: selectedOption.price,
                                id: new Date().toISOString()
                            }
                            props.setOrderItems([...props.orderItems, item]);
                        }
                    }}
                    options={props.pricingData}
                />
            </article>
        </section>
    )
}

export default SelectContainer;