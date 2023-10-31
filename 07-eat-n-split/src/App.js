import React, { useState } from "react";

const friends = [
  {
    avatar: "https://i.pravatar.cc/50",
    name: "clark",
    oweAmount: -2,
    id: Date.now(),
  },
  {
    avatar: "https://i.pravatar.cc/50",
    name: "sarah",
    oweAmount: 20,
    id: Date.now() + 1,
  },
  {
    avatar: "https://i.pravatar.cc/50",
    name: "Anthony",
    oweAmount: 0,
    id: Date.now() + 2,
  },
];
const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <FriendsList friends={friends} />
    </div>
  );
};

const FriendsList = ({ friends }) => {
  const [addFriend, setAddFriend] = useState(false);
  const [select, setSelect] = useState(null);
  const [friendsData, setFriendsData] = useState(friends);

  function handleSelectFriend(id) {
    if (id === select?.id) {
      setSelect(null);
      return;
    }
    setSelect(friendsData.find((friend) => friend.id === id));
  }

  const handleSplit = (bill, myExpense, billPayer, id, friendExpense) => {
    console.log(friendsData.find((friend) => friend.id === id));
    console.log(bill, myExpense, id, billPayer, friendExpense);

    setFriendsData((friendsData) => {
      return friendsData.map((friend) => {
        if (friend.id === id) {
          const newFriend = { ...friend };

          newFriend.oweAmount =
            billPayer === "You"
              ? friend.oweAmount + friendExpense
              : friend.oweAmount - myExpense;

          return newFriend;
        }

        return friend;
      });
    });
  };

  const handleAddFriend = () => {
    setAddFriend((addFriend) => !addFriend);
  };
  return (
    <div style={{ display: "flex" }}>
      <div>
        {friendsData.map((friend, i) => (
          <Friend
            name={friend.name}
            oweAmount={friend.oweAmount}
            avatar={friend.avatar}
            key={i}
            id={friend.id}
            curSelect={friend.id === select?.id}
            onSelectFriend={handleSelectFriend}
          />
        ))}

        {addFriend ? (
          <DetailsForm
            friends={friends}
            onFriendsData={setFriendsData}
            setAddFriend={setAddFriend}
          />
        ) : (
          ""
        )}
        <button onClick={handleAddFriend}>
          {addFriend ? "Close" : "Add friend"}
        </button>
      </div>
      <div>
        {select ? (
          <SplitForm select={select} onSplit={handleSplit} key={select.id} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const Friend = ({ name, oweAmount, avatar, id, onSelectFriend, curSelect }) => {
  const owe =
    oweAmount > 0
      ? `${name} owes you ${Math.abs(oweAmount)}$`
      : oweAmount === 0
      ? `You and ${name} are even`
      : `You owe ${name} ${Math.abs(oweAmount)} $`;

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }} id={id}>
      <img src={avatar} alt="profile-icon" style={{ width: 50, height: 50 }} />
      <div>
        <h1>{name}</h1>
        <p>{owe}</p>
      </div>
      <button onClick={() => onSelectFriend(id)}>
        {curSelect ? "Close" : "Select"}
      </button>
    </div>
  );
};

const DetailsForm = ({ onFriendsData, setAddFriend }) => {
  const [friendName, setFriendName] = useState("");
  const [imgUrl, setImgUrl] = useState(" https://i.pravatar.cc/50");

  const friend = {
    name: friendName,
    avatar: imgUrl,
    oweAmount: 0,
    id: Date.now(),
  };

  const onAddFriend = (e) => {
    e.preventDefault();
    onFriendsData((friendsData) => [...friendsData, friend]);
    setAddFriend((addFriend) => !addFriend);
  };
  return (
    <div>
      <form onSubmit={onAddFriend}>
        <p>
          🧑‍🤝‍🧑 Friend name{" "}
          <input
            type="text"
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
          />
        </p>
        <p>
          🖼️ Image URL{" "}
          <input
            type="text"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </p>

        <button>Add</button>
      </form>
    </div>
  );
};

const SplitForm = ({ select, onSplit }) => {
  const [bill, setBill] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [billPayer, setBillPayer] = useState("You");

  const friendExpense = bill - myExpense;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSplit(bill, myExpense, billPayer, select.id, friendExpense);
        }}
      >
        <h1>{`SPLIT A BILL WITH ${select.name}`}</h1>
        <p>
          💰 Bill Value
          <input
            type="text"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </p>
        <p>
          👦 Your Expense
          <input
            type="text"
            value={myExpense}
            onChange={(e) => setMyExpense(Number(e.target.value))}
          />
        </p>
        <p>
          🧑‍🤝‍🧑 Sarah's expense :
          <input type="text" value={bill - myExpense} />
        </p>

        <p>
          🤑 Who is paying the bill ?
          <select
            value={billPayer}
            onChange={(e) => setBillPayer(e.target.value)}
          >
            <option>You</option>
            <option>{select.name}</option>
          </select>
        </p>
        <button>Split bill</button>
      </form>
    </div>
  );
};

export default App;
