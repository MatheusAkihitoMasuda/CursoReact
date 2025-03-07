import * as React from 'react';

interface Props {
    name: string;
}

export function SecondComponent (props: Props) {
  return (
    <div>
      <p>Meu segundo componente</p>
      <p>O nome dele(a) é {props.name}</p>
    </div>
  );
}

export default SecondComponent;