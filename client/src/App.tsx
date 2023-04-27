import { useEffect, useState, FC } from 'react';
import pricingData from './data/essentialPrices';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import FormInput from './components/FormInputs';
import SelectContainer from './components/SelectContainer';
import PrintClearButton from './components/PrintClearButtons';
import SelectTable from './components/SelectTable';
import { Form } from './components/Form';



const App: FC = () => {

  const [orderItems, setOrderItems] = useState<any>([]);
  const [employeeName, setEmployeeName] = useState<string>('DogPie');
  const [reservationNumber, setReservationNumber] = useState<string>('123456');
  const [roomNumber, setRoomNumber] = useState<string>('C420');

  const [formComplete, setFormComplete] = useState<boolean>(false);

  useEffect(() => {
    // * Set from Complete
    if (employeeName === '' || reservationNumber.length !== 6 || roomNumber === '') {
      setFormComplete(false)
    } else {
      setFormComplete(true)
    }
  }, [employeeName, reservationNumber, roomNumber])

  return (
    <main className='column m-auto w-5/6 max-w-4xl'>

      <br />
      {/* Header */}
      <header className='text-center'>
        <h1 className='font-instrument text-6xl mt-5 mb-4'>Cliff Essentials</h1>
        <p className='text-xs mb-3'>Sold By: {employeeName} {new Date().toLocaleString()}</p>
      </header>
      {/* Form Inputs */}
      <Form
        employeeState={{ stateValue: employeeName, setState: setEmployeeName }}
        reservationState={{ stateValue: reservationNumber, setState: setReservationNumber }}
        roomState={{ stateValue: roomNumber, setState: setRoomNumber }}
      />

      <SelectContainer
        formComplete={formComplete}
        orderItems={orderItems}
        setOrderItems={setOrderItems}
      />

      {
        // Render once a selection has been made, length greater than one
        orderItems.length <= 0 ? null :
          <>
            <PrintClearButton
              setOrderItems={setOrderItems}
              setEmployeeName={setEmployeeName}
              setReservationNumber={setReservationNumber}
            />
            <SelectTable
              orderItems={orderItems}
              setOrderItems={setOrderItems}
            />
          </>
      }

      <br />

      <section className='App-showOnPrint'>
        <article className="ml-8 flex flex-row">
          <p className="offset-2 col-8">
            Guest Name (Print):
          </p>
          <span className='border-b border-black ml-4 pr-60 inline-block'></span>
        </article>

        <article className="mt-8 ml-8 flex flex-row">
          <p className="offset-2 col-8">
            Guest Signature:
          </p>
          <span className='border-b border-black ml-4 pr-60 inline-block'></span>
        </article>
      </section>

    </main>
  )
}



export default App;
