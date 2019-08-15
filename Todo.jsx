import React, { Component } from "react";

export class ListTodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        { id: 1, desc: "Learn React!" },
        { id: 2, desc: "Learn Microservice!" },
        { id: 3, desc: "Learn Java" }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>List To Dos:</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Desc</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todo.map(i => (
              <tr>
                <td>{i.id}</td>
                <td>{i.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListTodoComponent;
