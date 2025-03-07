import * as React from 'react';

export interface IAppProps {
    title: string
    content: string
    commentsQty: number
    tags: string[]

    // Enum
    category: Category
}

export enum Category{
  JS = "JavaScript",
  TS = "TypeScript",
  P = "Python",
}

const Destructuring = ({title, content, commentsQty, tags, category} : IAppProps) => {

    return (
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <p>{commentsQty}</p>
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <h4> Categoria: {category}</h4>
      </div>
    );
}

export default Destructuring;
