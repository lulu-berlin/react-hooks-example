import React, { useEffect, useState } from 'react';

export const Example1: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    document.title = `count1: ${count1}, count2: ${count2}`;
  });

  return (
    <div>
      <p>You clicked the first one {count1} times, and the second one {count2} times</p>
      <button onClick={() => setCount1(count1 + 1)}>
        Click me (1)
      </button>

      <button onClick={() => setCount2(count2 + 1)}>
        Click me (2)
      </button>
    </div>
  );
}
