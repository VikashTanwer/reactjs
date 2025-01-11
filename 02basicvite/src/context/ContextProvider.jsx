
// import React, { useState } from 'react'
// import userState from './Context'

// function ContextProvider() {
//     const [user, setUser] = useState("vikash")
//   return (
//     <userState.Provider children = {user}></userState.Provider>
//   )
// }

// export default ContextProvider;

import React, { useState } from 'react'
import userState from './Context'

function ContextProvider( {children}) {
    const [user, setUser] = useState("vikash");
  return (
    <userState.Provider value = {user}>
       {children}
    </userState.Provider>
  )
}

export default ContextProvider
