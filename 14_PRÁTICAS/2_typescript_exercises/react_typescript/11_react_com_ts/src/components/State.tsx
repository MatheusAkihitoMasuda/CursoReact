import { useState } from "react";
import * as React from 'react';


const State = () => {

    const [text, setText] = useState<string | null>(null);

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

  return (
    <div>
      <p>O texto é {text}</p>
      <input type="text" onChange={handleChange}/>
    </div>
  );
}

export default State;
