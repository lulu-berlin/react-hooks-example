import React, { useReducer } from 'react';

type TwoCounts = {
  count1: number;
  count2: number;
};

type Increment1 = { type: 'INCREMENT1' };
type Increment2 = { type: 'INCREMENT2' };

const INCREMENT1: Increment1 = {type: 'INCREMENT1'};
const INCREMENT2: Increment2 = {type: 'INCREMENT2'};

const reducer = (state: TwoCounts, action: Increment1 | Increment2): TwoCounts => {
  switch (action.type) {
    case 'INCREMENT1':
      return {
        ...state,
        count1: state.count1 + 1
      };
    case 'INCREMENT2':
      return {
        ...state,
        count2: state.count2 + 1
      };
    default:
      throw new Error('Wat?!');
  };
};

export const Example3: React.FC = () => {
  const [{count1, count2}, dispatch] = useReducer(reducer, { count1: 0, count2: 0 });

  return (
    <div>
      <p>You clicked the first one {count1} times, and the second one {count2} times</p>
      <button onClick={() => dispatch(INCREMENT1)}>
        Click me (1)
      </button>

      <button onClick={() => dispatch(INCREMENT2)}>
        Click me (2)
      </button>
    </div>
  );
}
