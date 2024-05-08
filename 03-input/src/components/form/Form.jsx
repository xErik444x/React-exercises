import { useState } from "react";
import Header from "./Header";
import Input from "./Input";

export default function Form() {
  const [text, setText] = useState("");
  return (
    <div>
        <Header text={text}/>
        <Input setText={setText} text={text}/>
    </div>
  )
}
