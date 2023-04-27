import Select from 'react-select'
import pricingData from '../data/essentialPrices'

const SelectContainer = (props) => {

    if(!props.formComplete) {
        return null;
    }

    return (
        <section className="mt-3 App-hideOnPrint">
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
                options={pricingData}
            />
        </section>
    )
}

export default SelectContainer;