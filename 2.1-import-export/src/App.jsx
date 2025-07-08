import Setting,{Profile,sum} from './component'

import './App.css'

export default function App(){
  return(
    <div>
      <h1>main component</h1>
      <Profile />
      <Setting />
      {sum()}
    </div>
  )
}