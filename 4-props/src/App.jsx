
import './App.css'
import { getImageUrl } from './ultils.js';
import StudentCard from './Card.jsx';
 

function Avatar({ person, size=200 }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt= {person.name}
      width={size}
      height={size}
    />
  );
}

  //  <Avatar
  //       person={{ 
  //         name: 'Katsuko Saruhashi', 
  //         imageId: 'YfeOqp2'
  //       }}
  //     />
  //     <Avatar
  //       size={undefined}
  //       person={{
  //         name: 'Aklilu Lemma', 
  //         imageId: 'OKS67lh'
  //       }}
  //     />
  //     <Avatar
  //       size={50}
  //       person={{ 
  //         name: 'Lin Lanying',
  //         imageId: '1bX5QH6'
  //       }}

export default function App() {
  return (
    <>
      <div className="container">

      <StudentCard 
        name= "huzaifa"
        roll= {12}
        address= "lahore"
        />
      <StudentCard 
        name= "usman"
        roll= {22}
        address= "karachi"
        />
      <StudentCard 
        name= "ali"
        roll= {123}
        address= "islamabad"
        />
        </div>
    </>
  );
}
