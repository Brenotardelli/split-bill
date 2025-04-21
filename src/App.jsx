import React, { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

const App = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  function handleShowAddForm() {
    setShowAddForm((show) => !show);
  }

  function handleAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddForm(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <List friends={friends} />
        {showAddForm && <Form handleAddFriends={handleAddFriends} />}
        <Button onClick={handleShowAddForm}>{showAddForm ? "close" : "add"}</Button>
      </div>
      <FormSplit />
    </div>
  );
};

export default App;

function List({ friends }) {
  return (
    <div>
      {friends.map(({ id, name, image, balance }) => (
        <ul key={id}>
          <li>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            {balance < 0 && (
              <p className="red">
                You owe {name} ${Math.abs(balance)}
              </p>
            )}

            {balance > 0 && (
              <p className="green">
                {name} owes you ${balance}
              </p>
            )}

            {balance === 0 && <p>You and {name} are even</p>}

            <Button>Select</Button>
          </li>
        </ul>
      ))}
    </div>
  );
}

function Form({ handleAddFriends }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    handleAddFriends(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Image URL</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      <Button>Add</Button>
    </form>
  );
}

function FormSplit() {
  return (
    <form action="" className="form-split-bill">
      <h2>Split a bill with x</h2>
      <label>Bill</label>
      <input type="number" />

      <label>Your expense</label>
      <input type="number" />

      <label>`s expense</label>
      <input type="number" disabled />

      <label>Who is paying the bill?</label>
      <select name="person" id="person">
        <option value="you">You</option>
        <option value="friend">Friend</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
