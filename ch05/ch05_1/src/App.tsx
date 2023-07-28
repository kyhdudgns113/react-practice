import {Provider as ReduxProvider} from 'react-redux'
import {useStore} from './store'

import ReduxClock from './pages/ReduxClock'
import UseReduceClock from './pages/UseReducerClock'

export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <main className="p-8">
        <UseReduceClock />
        <ReduxClock />
      </main>
    </ReduxProvider>
  )
}
