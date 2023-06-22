import React, { useMemo, useState } from "react";

export const MemoHook: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [item, setItem] = useState<number>(10);

 const multicount = useMemo(()=> {
    console.log("Use Memo")
    return count * 5
 }, [count])

  return (
    <div>
      <h1>Use Memo Hook</h1>
      <h2>Count : {count}</h2>
      <h2>Item : {item}</h2>
      <h2>{multicount}</h2>
      <button onClick={() => setCount(1)}>Increment Count</button>
      <button onClick={() => setItem(item * 10)}>Increment Item</button>
    </div>
  );
};
