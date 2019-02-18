import React, { createContext, useContext, useReducer } from 'react';

type TwoCounts = {
  count1: number;
  count2: number;
};

type Increment1 = { type: 'INCREMENT1' };
type Increment2 = { type: 'INCREMENT2' };

const INCREMENT1: Increment1 = {type: 'INCREMENT1'};
const INCREMENT2: Increment2 = {type: 'INCREMENT2'};

type Action = Increment1 | Increment2;

const reducer = (state: TwoCounts, action: Action): TwoCounts => {
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

type ReduxContextValue = {
  state: TwoCounts;
  dispatch: (action: Action) => void;
};

const createRedux = (
  reducer: (state: TwoCounts, action: Action) => TwoCounts,
  initialState: TwoCounts
) => {
  const ReduxContext = createContext<ReduxContextValue>({state: initialState, dispatch: () => {}});

  const ReduxProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <ReduxContext.Provider value={{state, dispatch}}>
        {children}
      </ReduxContext.Provider>
    );
  };

  const useRedux = (): [TwoCounts, (action: Action) => void] => {
    const {state, dispatch} = useContext(ReduxContext);
    return [state, dispatch];
  };

  return {ReduxProvider, useRedux};
};

const {ReduxProvider, useRedux} = createRedux(reducer, { count1: 0, count2: 0 });

const Nested1: React.FC = () => {
  const [{count1, count2}, dispatch] = useRedux();

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

const Nested2: React.FC = () => {
  const [{count1, count2}] = useRedux();

  return (
    <div>
      count 1 = {count1} <br />
      count 2 = {count2} <br />
    </div>
  );
}

export const Example4: React.FC = () => (
  <ReduxProvider>
    <Nested1 />
    <Nested2 />
  </ReduxProvider>
);
