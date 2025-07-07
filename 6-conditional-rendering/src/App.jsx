
import './App.css'

function Items({name, isPresend}){
  return(
    <li>{isPresend ? <del>'my name is '+name+'✅'</del>  : 'my name is '+name}</li>
  );
//   if(props.isPresend){
//     return(
//       <div>
//       <li>my name is {props.name} ✅</li>
//     </div>
//   )
// }else{
//   return(
//     <div>
//       <li>My name is {props.name}</li>
//     </div>
//   )
// }
}

export default function App(){
  return(
    <div>
      <h1>hi</h1>

      <Items
        isPresend={true}
        name='Huzaifa'
      />
      <Items
        isPresend={true}
        name='ali'
      />
      <Items
        isPresend={false}
        name='shahzad'
      />
    </div>
  )
}