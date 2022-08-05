import { useState } from "react";
import axios from "axios";
function App() {
  // const [id, setId] = useState(0);
  // const [name, setName] = useState();
  // const [rollno, setRollNo] = useState();
  const [state, setState] = useState({
    name: "",
    rollNo: "",
  });
  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name] :e.target.value
    });
  };
  const handleSubmit = (e) => {
    console.log(state);
    e.preventDefault();
    let url = 'http://localhost:3008/users'
    e.preventDefault()
    axios.post(url, state)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    setState({
      name:'',
      rollNo:''
    });
    
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleOnChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="rollNo"
          value={state.rollNo}
          onChange={handleOnChange}
          placeholder="RollNo"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
