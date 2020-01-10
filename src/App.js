import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term : "",
      items : ["Uttam", "Kumar", "Sharma"]
    }
  }

  onChange = (e) => {
    this.setState({
      term: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      term : "",
      items : [...this.state.items, this.state.term]
    })
  }
  deleteItem = (index) => {
    console.log(index);
    const list = [...this.state.items];
    list.splice(index, 1)
    this.setState({
      items : list
    });

  }
  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input type="text" value={this.state.term} onChange={this.onChange} />
          <button>Add</button>
        </form>
        <ul>
          {
            this.state.items.map((item, index) => {
                return (
                  <li key={index}>
                    {item}
                    <button onClick={ e=> this.deleteItem(index)}>X</button>
                    </li>
                )
              }
            )
          }
        </ul>
      </div>
    );
  }
}

export default App;