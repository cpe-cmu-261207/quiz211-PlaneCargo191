import { useState } from "react";

function App() {
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    },
    {
      name: "Thanakorn Chaininphun 620610790",
      gender: "male",
      age: "20"
    }
  ];
  return (
    <div class="ml-2">
      <h3 class="title is-3">Person List</h3>

      {}
      <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Bob</td>
            <td>male</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>

      {function state()
        {
          const [count, setCount = useState(0)]
        }
      }
      <h3 class="title is-3">ID Counter</h3>
      <p>620610790</p>
      <button onClick = {() => this.setState({count: this.state.count - 1}}}>-</button>
      <button>reset</button>
      <button>+</button>
    </div>
  );
}

export default App;
