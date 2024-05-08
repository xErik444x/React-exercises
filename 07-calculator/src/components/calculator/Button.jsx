export default function Button({children, calc, setCalc, number1, setNumber1, number2, setNumber2}) {

  function handleCalc(){
    setCalc("" + calc + children)
    console.log(calc);
    if(isNaN(children) && children != "="){
      if(!number1){
        setNumber1(Number(calc));
        setCalc("")
      }
    }
    if(children == "="){
      setNumber2(Number(calc));
      setCalc("")
      console.log(
        {number1, number2}
      );
      setCalc(number1 + number2)
    }
  }
  
  return (
    <button onClick={handleCalc}>{children}</button>
  )
}
