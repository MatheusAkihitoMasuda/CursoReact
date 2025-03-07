import React, {createContext} from 'react';

// COmponentes

import FirstComponent from './components/FirstComponent';
import { SecondComponent } from './components/SecondComponent';
import Destructuring,{ Category } from './components/Destructuring';
import State from './components/State';
import Context from './components/Context';

//type
type textOrNull = string |null
let myText: textOrNull = "Hello World"
let mySecondText: textOrNull = null

// context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  //variáveis
  const name: string = "Matheus";
  const age: number = 21;
  const isWorking: boolean = true;

  //funções
  const userGreeting = (name: string): string => {
    return `Olá ${name}`;
  }

  // context
  const contextValue : IAppContext = {
  language: "Javascript",
  framework: "Express",
  projects: 5,
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
            <h1>React com TypeScript</h1>
            <h1>Nome: {name}</h1>
            <h1>Idade: {age}</h1>
            {isWorking && 
              <div>
                <p>Está trabalhando!</p>
              </div>
            }
            <h3>{userGreeting(name)}</h3>
            <FirstComponent />
            <SecondComponent name="segundo" />
            <Destructuring title="Primeiro post" content="Conteúdo do componente" commentsQty={10} tags={["typescript", "react"]} category={Category.TS}/>
            <Destructuring title="Segundo post" content="Conteúdo do outro componente" commentsQty={7} tags={["javascript", "react"]} category={Category.JS}/>
            <State />
            <Context  />
      </div>
    </AppContext.Provider>
  );
}

export default App;
