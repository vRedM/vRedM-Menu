import React, {useState} from 'react';
import './App.css'
import {debugData} from "../utils/debugData";
import {fetchNui} from "../utils/fetchNui";
import {Slider} from '@mui/material'
import NavButton from "./Buttons/NavButton";
import TitleText from "./Titles/TitleText";
// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: 'setVisible',
    data: true,
  }
])

//<button className='base-button'>Register</button>
//<button className='base-button' onClick={handleGetClientData}>Get Client Data</button>

//{clientData && <ReturnClientDataComp data={clientData} />}



interface ReturnClientDataCompProps {
  data: any
}

const ReturnClientDataComp: React.FC<ReturnClientDataCompProps> = ({data}) => (
  <>
    <h5>Returned Data:</h5>
    <pre>
      <code>
        {JSON.stringify(data, null)}
      </code>
    </pre>
  </>
)

interface ReturnData {
  x: number;
  y: number;
  z: number;
}

const App: React.FC = () => {
  const [clientData, setClientData] = useState<ReturnData | null>(null)

  const handleGetClientData = () => {
    fetchNui<ReturnData>('getClientData').then(retData => {
      console.log('Got return data from client scripts:')
      console.dir(retData)
      setClientData(retData)
    }).catch(e => {
      console.error('Setting mock data due to error', e)
      setClientData({ x: 500, y: 300, z: 200})
    })
  }

  const [value, setValue] = React.useState<number>(30);

  
  const tagueule = () => {
    fetchNui<ReturnData>('testprint').then(retData => {
      console.log('ta gueule')
    })
  }


  
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <div className="nui-wrapper">
      <div className='popup-thing'>
        <div className="main-menu">
          <TitleText title='VredM '/>
          <p>This is a basic menu</p>
          <p>Insert Your Name</p>
          <input className='text-input' type="text" placeholder='surname' name="name" />
          <p>Insert Your Surname</p>
          <input className='text-input' type="text" placeholder='name' name="name" />
          <Slider  value={value} onChange={handleChange} />
          <p>age : {value}</p>
          <TitleText title='Ezzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'/>
          <NavButton onClick={tagueule} title='Designed Button' />
        </div>
      </div>
    </div>
  );
}

export default App;
