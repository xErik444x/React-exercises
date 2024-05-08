export default function Button({
	children,
	calc,
	setCalc,
	number1,
	setNumber1,
	number2,
	setNumber2,
  actualN,
  setActualN,
  operation,
  setOperation,
  history,
  setHistory
}) {
  function calculate(value) {
    let resultado = 0;
    switch (value) {
      case '+':
        resultado = number1 + number2;
        break;
      case '-':
        resultado = number1 - number2;
        break;
      case '*':
        resultado = number1 * number2;
        break;
      case '/':
        resultado = number1 / number2;
        break;
    }
    return resultado;
  }

  function handleCalc() {
    if (!isNaN(children)) {
      const actualCalc = `${calc}${children}`;
      if (actualN === 0) {
        setNumber1(Number(actualCalc));
      } else {
        if (number2 === 0) {
          setCalc(children);
          setNumber2(children);
          return;
        }
        setNumber2(Number(actualCalc));
      }
      setCalc(actualCalc);
    } else {
      switch (children) {
        case '=': {
          let resultado = calculate(operation);
          setCalc(resultado);
          setNumber1(resultado);
          setNumber2(0);
          setActualN(1);
          console.log("setHistory", [...history, `${number1 + operation + number2} = ${resultado}`]);
          setHistory([...history, `${number1 + operation + number2} = ${resultado}`])
          break;
        }
        case 'clear':
          setCalc(0);
          setNumber1(0);
          setNumber2(0);
          setActualN(0);
          setOperation(0);
          break;
        default:
          setCalc('');
          setActualN(actualN + 1);
          setOperation(children);
          if (number1 > 0 && number2 > 0) {
            let resultado = calculate(children);
            setCalc(resultado);
            setNumber1(resultado);
            setNumber2(0);
            setActualN(1);
            setHistory([...history, `${number1 + operation + number2} = ${resultado}`])
          }
          break;
      }
    }
  }

  return <button onClick={handleCalc}>{children}</button>;
}