import React from 'react'
import GlobalProvider from 'contexts'

import Navgiation from 'components/shared/Navgiation';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';
import './App.css'
import PageLayout from 'components/shared/PageLayout';

function App() {

  return (
    <GlobalProvider>
      <Router>
        <Navgiation />
        <PageLayout>
          <Routes />
        </PageLayout>
      </Router>
    </GlobalProvider>
  );
}

export default App;


// const ChildComponent = memo(({ log }) => {
//   useEffect(() => console.log('children re render'))
//   return <div style={{ border: '1px silver solid', padding: '1%', margin: '1%' }}>
//     Child
//     <button onClick={log}>Log the name</button>
//   </div>
// })

// function ParentComponent() {
//   const [name, setname] = useState('John')
//   const [age, setage] = useState(42)
//   const logName = useCallback(() => console.log(name), [name])
//   return <>
//     <div style={{ border: '1px silver solid', padding: '1%', margin: '1%' }}>
//       Parent
//       <input type="number" value={age} onChange={(e) => setage(+e.target.value)} />
//       <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
//       <ChildComponent log={logName} />
//     </div>
//   </>
// }