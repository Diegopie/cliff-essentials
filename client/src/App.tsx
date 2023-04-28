import { useEffect, useState, FC } from 'react';
import './App.css';
import SelectContainer from './components/SelectContainer';
import PrintClearButton from './components/PrintClearButtons';
import SelectTable from './components/SelectTable';
import { Form } from './components/Form';
import { Header } from './components/Header';



const App: FC = () => {

  const [orderItems, setOrderItems] = useState<any>([]);
  const [employeeName, setEmployeeName] = useState<string>('');
  const [reservationNumber, setReservationNumber] = useState<string>('');
  const [roomNumber, setRoomNumber] = useState<string>('');

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
      <Header 
        employeeName={employeeName}
      />
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
