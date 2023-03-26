import accounting from "accounting";

const SelectTable = (props) => {

    function alphebitize(a, b) {
        // if a is greate than b in the array, increase index placement in array;
        // if a < b in the array, decrease index placement
        // if neither condition is met, return 0 to leave at current index placement
        return (a.label > b.label) ? 1 : ((a.label < b.label) ? -1 : 0)
    }


    return (
        <>
            <div className="row">
                <div className="offset-2 col-8">
                    <table className='table table-border table-hover'>
                        <thead>
                            <tr>
                                <th className='App-hideOnPrint'></th>
                                <th>Item</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.orderItems.sort(alphebitize).map((item) => {
                                console.log(item);
                                return (
                                    <tr>
                                        <td
                                            style={{ cursor: 'pointer' }}
                                            className='text-danger App-hideOnPrint'
                                            onClick={() => {
                                                props.setOrderItems(props.orderItems.filter(i => i.id !== item.id))
                                            }}
                                        >
                                            DELETE
                                        </td>
                                        <td className="col-8">
                                            {item.value}
                                        </td>
                                        <td className="col-8">
                                            {accounting.formatMoney(item.price)}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row mt-3">
                <div className="offset-2 col-8">
                    <p>
                        <span style={{ fontWeight: 'bold' }}>Total:</span> {accounting.formatMoney(props.orderItems.map(item => item.price).reduce((prev, curr) => prev + curr, 0))}
                    </p>
                </div>
            </div>
        </>
    )
}

export default SelectTable;