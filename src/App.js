import React, { Fragment } from 'react'
import Birthday from './Components/Project/Birthday'
import {Provider} from 'react-redux'

import store from './Components/store'

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        {<Birthday />}
      </Provider>
    </Fragment>
  )
}

export default App