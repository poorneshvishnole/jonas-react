import React, { useState } from "react";

const options = [
  { value: 0, text: "Dissatisfied (0%)" },
  { value: 1, text: "It was okay (5%)" },
  { value: 2, text: "It was good (10%)" },
  { value: 3, text: "Absolutely amazing! (20%)" },
];

const App = () => {
  const [bill, setBill] = useState(0);
  const [likeService, setLikeService] = useState(0);
  const [friendLikeService, setFriendLikeService] = useState(0);

  const tip = (likeService * 5 + friendLikeService * 5) / 2;
  const total = bill + tip;

  const handleReset = () => {
    setBill(0);
    setLikeService(0);
    setFriendLikeService(0);
  };
  return (
    <div>
      <div>
        How much was the bill ?
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </div>

      <div>
        How did you like the service ?
        <select
          value={likeService}
          onChange={(e) => {
            setLikeService(Number(e.target.value));
          }}
        >
          {options.map((el) => (
            <option key={el.value} value={el.value}>
              {el.text}
            </option>
          ))}
        </select>
      </div>

      <div>
        How did your friend like the service ?
        <select
          value={friendLikeService}
          onChange={(e) => {
            console.log(e.target.value);
            setFriendLikeService(Number(e.target.value));
          }}
        >
          {options.map((el) => (
            <option key={el.value} value={el.value}>
              {el.text}
            </option>
          ))}
        </select>
      </div>

      {bill ? (
        <div>
          <h1>
            You pay ${total} (${bill} + ${tip})
          </h1>

          <button onClick={handleReset}>reset</button>
        </div>
      ) : null}
    </div>
  );
};

export default App;
