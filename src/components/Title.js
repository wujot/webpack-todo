import React from "react";
import style from "../containers/App.css";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: 10
    };
  }

  render() {
    return (
      <div className={style.Title}>
        <h1>To Do</h1>
        <h2>{this.state.tasks}</h2>
        <p>...tasks</p>
      </div>
    );
  }
}

export default Title;
