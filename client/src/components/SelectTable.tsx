import accounting from "accounting";
import { v4 as uuidv4 } from 'uuid';
import { IPricingData } from "../data/essentialPrices";

interface ISelectTableProps {
    orderItems: IPricingData[],
    setOrderItems: (arg: object) => [] | void
}

const SelectTable = (props: ISelectTableProps) => {

    function alphabetize(a, b) {
        // if a is greater than b in the array, increase index placement in array;
        // if a < b in the array, decrease index placement
        // if neither condition is met, return 0 to leave at current index placement
        return (a.label > b.label) ? 1 : ((a.label < b.label) ? -1 : 0)
    }


    return (
        <>
            <div className="container mt-4">
                <div className="">
                    <table className='table w-full justify-start text-center'>
                        <thead>
                            <tr>
                                <th className='App-hideOnPrint'></th>
                                <th>Item</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {props.orderItems.sort(alphabetize).map(item => {
                                // console.log(item);
                                return (
                                    <tr key={uuidv4()}>
                                        <td
                                            style={{ cursor: 'pointer' }}
                                            className='text-red-600 hover:bg-red-600 hover:text-white focus:text-white focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 App-hideOnPrint'
                                            onClick={() => {
                                                props.setOrderItems(props.orderItems.filter(i => i.id !== item.id))
                                            }}
                                        >
                                            DELETE
                                        </td>
                                        <td>
                                            {item.value}
                                        </td>
                                        <td>
                                            {accounting.formatMoney(item.price)}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mt-5 mr-9 flex justify-end">
                    <p>
                        <span style={{ fontWeight: 'bold' }}>Total:</span> {accounting.formatMoney(props.orderItems.map(item => item.price).reduce((prev, curr) => prev + curr, 0))}
                    </p>
            </div>
        </>
    )
}

export default SelectTable;