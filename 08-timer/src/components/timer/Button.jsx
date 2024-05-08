export default function Button({time, active, setActive}) {

 function handleTimer(){
    if(time.seconds <= 0 && time.minutes <= 0){
        return;
    }
    setActive(!active)
 }
  return (
    <button onClick={handleTimer}>{active ? "Stop" : "Start" }</button>
  )
}
