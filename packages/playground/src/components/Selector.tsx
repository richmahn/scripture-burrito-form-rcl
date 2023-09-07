import { useState, MouseEvent } from 'react';
import { Example, examples } from '../examples';

interface SelectorProps {
  onSelected: (data: any) => void;
}

export default function Selector({ onSelected }: SelectorProps) {
  const [current, setCurrent] = useState<Example>('TextStories');

  function onLabelClick(label: Example) {
    return (event: MouseEvent) => {
      event.preventDefault();
      setCurrent(label);
      setTimeout(() => onSelected(examples[label]), 0);
    };
  }

  return (
    <ul className='nav nav-pills'>
      {Object.keys(examples).map((label, i) => {
        return (
          <li key={i} role='presentation' className={current === label ? 'active' : ''}>
            <a href='#' onClick={onLabelClick(label as Example)}>
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
