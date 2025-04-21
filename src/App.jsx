import React from "react";

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

const App = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <List />
        <Form />
        <Button>Add</Button>
      </div>
      <FormSplit />
    </div>
  );
};

export default App;

function List() {
  const friends = initialFriends;

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

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function Form() {
  return (
    <form className="form-add-friend">
      <label htmlFor="">Name</label>
      <input type="text" />
      <label htmlFor="">Image URL</label>
      <input type="text" />
      <Button>Add</Button>
    </form>
  );
}

function FormSplit() {
  return (
    <form action="" className="form-split-bill">
      <h2>Split a bill with x</h2>
      <label htmlFor="">Bill</label>
      <input type="number" />

      <label htmlFor="">Your expense</label>
      <input type="number" />

      <label htmlFor="">`s expense</label>
      <input type="number" disabled />

      <label htmlFor="">Who is paying the bill?</label>
      <select name="person" id="person">
        <option value="you">You</option>
        <option value="friend">Friend</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
``