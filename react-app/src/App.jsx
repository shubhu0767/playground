import { useReducer, useState } from 'react'
import './App.css'
import Button from './Component/Button/Button'
import Checkbox from './Component/Checkbox/checkbox'
import Header from './Component/Header/header'
import ItemDetailsForm from './Component/ItemDetailsForm/ItemDetailsForm'

const intialState = {
  itemName: "",
  itemPrice: "",
  itemQuantity: "",
  submittionDate: "",
};

const reducer = (state, action) => ({ ...state, ...action });

function App() {
  const [state, setState] = useReducer(reducer, intialState);
  const [selectEvent, setSelectEvent] = useState({item: false,  supplier: false});

  const handleItemChange = (e) => {
    const { name, checked } = e.target;
    if(name === 'item'){
      setSelectEvent({supplier:false, item: checked });
    } else if(name ==='supplier'){
      setSelectEvent({item:false, supplier: checked });
    }
  }

  const handleSaveChanges = () => {
    console.log(selectEvent);
    console.log(state);
    
  }

  return (
    <>
      <div>
        <Header />
        <div className='checkbox'>
          <Checkbox label={'Item'} onChange={handleItemChange} name='item' />
          <Checkbox label={'Supplier'} onChange={handleItemChange} name='supplier' />
        </div>
        <div>
          <h1 style={{textAlign: 'center'}}>Item Details</h1>
          <ItemDetailsForm state={state} setState={setState} />
        </div>

        <div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
          <Button onClick={handleSaveChanges} />
        </div>
      </div>
    </>
  )
}

export default App
