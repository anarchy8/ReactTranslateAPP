import { useState } from 'react'
import './index.css'
import { useSelector, useDispatch } from 'react-redux'
import { setFromInputValue } from './redux/fromInputSlice'
import { setToInputValue } from './redux/toInputSlice'
import { setSelectInputValue } from './redux/fromSelectSlice'
import { setToSelectValue } from './redux/toSelectSlice'
import { Vortex } from 'react-loader-spinner'
import axios from 'axios'



function App() {
  //data gelirken yükleme animasyonunu kontrol eden state
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();
  //kullanıcının girdiği metin 
  const fromInputValue = useSelector((state) => state.fromInput.value);
  //çevrilen metin
  const toInputValue = useSelector((state) => state.toInput.value);
  //çevirelecek metnin selecti nin state i
  const fromSelectValue = useSelector((state) => state.fromSelect.value)
  //çevirilen metnin selecti nin state i
  const toSelectValue = useSelector((state) => state.toSelect.value)

  const handleFromInput = (event) => {
    const fromInputval = event.target.value;
    dispatch(setFromInputValue(fromInputval))
  }
  const handleFromSelect = (event) => {
    const fromSelectVal = event.target.value;
    dispatch(setSelectInputValue(fromSelectVal))
  }
  const handleToSelect = (event) => {
    const toSelectVal = event.target.value;
    dispatch(setToSelectValue(toSelectVal))
    console.log(event.target.value)
  }

  const getData = async () => {

    setLoading(true);
    dispatch(setToInputValue(""))
    const options = {
      method: 'GET',
      url: 'https://nlp-translation.p.rapidapi.com/v1/translate',
      params: {
        text: fromInputValue,
        to: toSelectValue,
        from: fromSelectValue
      },
      headers: {
        'X-RapidAPI-Key': '6a09c946a4msh8f6f429e2c0f56ap10afa9jsn905f369d5f5e',
        'X-RapidAPI-Host': 'nlp-translation.p.rapidapi.com'
      }
    };
    const response = await axios.request(options);
    const result = response.data.translated_text[toSelectValue];
    dispatch(setToInputValue(result))
    setLoading(false);
  }


  return (
    <div className='app'>
      <div className='container'>
        <h1>TranslateAPP</h1>
        <div className='translate-wrap'>
          <div className='translate-box'>
            <select value={fromSelectValue} onChange={handleFromSelect} className='select'>
              <option value={"tr"}>Turkish</option>
              <option value={"en"}>English</option>
              <option value={"de"}>German</option>
              <option value={"es"}>Spanish</option>
            </select>
            <textarea value={fromInputValue} onChange={handleFromInput} className='user-input'></textarea>
          </div>
          <div className='translate-box'>
            <select value={toSelectValue} onChange={handleToSelect} className='select'>
              <option value={"en"}>English</option>
              <option value={"tr"}>Turkish</option>
              <option value={"de"}>German</option>
              <option value={"es"}>Spanish</option>
            </select>
            <div className='translated-div'>
              <textarea value={toInputValue} className='user-input transleted'></textarea>
              <div className='loader-wrap'>
                <Vortex
                  visible={loading}
                  height="80"
                  width="80"
                  ariaLabel="vortex-loading"
                  wrapperStyle={{}}
                  wrapperClass="loader-wrap"
                  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />
              </div>
            </div>
          </div>
        </div>
        <button onClick={getData} className='btn'>translate</button>
      </div>
    </div>
  )
}

export default App
