import Select from 'react-select'
import {IPricingData, pricingData} from '../data/essentialPrices'

interface ISelectContainerProps {
    formComplete: boolean,
    orderItems: IPricingData[],
    setOrderItems: (arg: object) => [] | void
}

const SelectContainer = (props:ISelectContainerProps) => {

    // if(!props.formComplete) {
    //     return null;
    // }

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