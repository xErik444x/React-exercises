export default function Input(props) {
  const {setText} = props;

  function handleText(ev){
    setText(ev?.target?.value)
  }

  return (
    <input onChange={handleText} type="text" name="" id="" />
  )
}
