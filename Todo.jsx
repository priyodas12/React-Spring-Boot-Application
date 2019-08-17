import React, { Component } from "react";

export class ListTodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        { id: 1, desc: "Learn React!", done: false, deadline: new Date() },
        {
          id: 2,
          desc: "Learn Microservice!",
          done: false,
          deadline: new Date()
        },
        { id: 3, desc: "Learn Java", done: false, deadline: new Date() }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>List To Dos:</h1>
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Desc</th>
                <th>Is Done</th>
                <th>Complete Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todo.map(i => (
                <tr key={i.id}>
                  <td>{i.id}</td>
                  <td>{i.desc}</td>
                  <td>{i.done.toString()}</td>
                  <td>{i.deadline.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListTodoComponent;
