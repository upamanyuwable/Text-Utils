import React,{useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';

function App() {

  const[mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const toggleMode  = () =>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.background = '#042743';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode("light");
      document.body.style.background = 'white';
      showAlert("Light Mode has been enabled","success");
    }
  }



  return (
    <>
      <Navbar title="TextUtils" mode={mode} changeMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-4'>
        <TextArea showAlert={showAlert} heading="Enter the text below" mode={mode}/>
      </div>
    </>
  );
}

export default App;
