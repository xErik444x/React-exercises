import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function Timer() {
    const [time, setTime] = useState({
        minutes: 0,
        seconds: 0
    });
    const [active, setActive] = useState(false);
  return (
    <div style={{}}>
    <Input time={time} setTime={setTime} active={active} setActive={setActive}/>
    <Button time={time} setTime={setTime} setActive={setActive} active={active}/>
    
    </div>
  )
}
