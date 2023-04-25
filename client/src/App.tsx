import { useState } from 'react';
import pricingData from './data/essentialPrices';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormInput from './components/FormInputs';
import SelectContainer from './components/SelectContainer';
import PrintClearButton from './components/PrintClearButtons';
import SelectTable from './components/SelectTable';
import Form from './components/Form';



function App() {

  const [orderItems, setOrderItems] = useState([]);
  const [employeeName, setEmployeeName] = useState('');
  const [reservationNumber, setReservationNumber] = useState('');
  const [roomNumber, setRoomNumber] = useState('');

  return (
    <main className='container'>

      <br />
      {/* Header */}
      <h1 className='display-4 text-center mt-5'>Cliff Essentials</h1>
      <h4 className='display-4 text-center' style={{ fontSize: 14 }}>Sold By: {employeeName} {new Date().toLocaleString()}</h4>

      {/* Form Inputs */}
      <Form />

      {
        // If employeeName is empty string or resNumber is not 6 length, return null
        employeeName === '' || reservationNumber.length !== 6 ? null :
          <SelectContainer
            pricingData={pricingData}
            orderItems={orderItems}
            setOrderItems={setOrderItems}
          />
      }


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
        <article className="row mt-3">
          <div className="offset-2 col-8">
            Reservation Number: {reservationNumber}
          </div>
        </article>

        <article className="row mt-3">
          <div className="offset-2 col-8">
            Guest Name (Print):
          </div>
        </article>

        <article className="row mt-3">
          <div className="offset-2 col-8">
            Guest Signature:
          </div>
        </article>
      </section>

    </main>
  )
}



export default App;
