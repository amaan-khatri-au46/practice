import { useState } from "react";

export const MyCustomHooks = () => {
  var [balance, setBalance] = useState<any>(1000);

  const withdraw = (amount: any): any => {
    if (balance < amount) {
      setBalance("Tera Baap Chod kar Gaya Tha K Tere Maa");
    } else {
      setBalance((balance -= amount));
    }
  };

  const deposit = (amount: any): any => {
    if (amount) {
      setBalance((balance += amount));
    }
  };

  return { withdraw, balance, deposit };
};
