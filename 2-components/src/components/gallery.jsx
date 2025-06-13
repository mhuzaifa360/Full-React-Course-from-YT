

export function Profile(){
  return (
    <h2>this is profile item</h2>
  );
}

export default function Gallery(){
  return(
    <div>
      <Profile />
      <Profile />
    </div>
  )
}