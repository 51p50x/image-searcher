import { useState } from 'react'
import {Formik, Form, Field} from 'formik'
import './header.css'

const App = () =>{
  const [photos, setPhotos] = useState([])
  console.log({photos})
  return (
    <div>
      <header>
        <Formik
          initialValues = {{ search: ''}}
          onSubmit = {async values =>{
            //call to the api
            const response = await fetch(
              `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,{
                headers:{
                  'Authorization': `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`
                }
              })
            const data = await response.json()
            console.log(data)
          }}
        >
          <Form>
            <Field name = 'search'/>
          </Form>
        </Formik>
      </header>
    </div>
  );
}

export default App;
