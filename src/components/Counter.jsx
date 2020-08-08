import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
    // tags: ["tag1", "tag2", "tag3"],
  };

  handelDelete = () => {
    const { value: value } = this.state.value;
    if (this.state.value === 0) return alert("There are no items to delete!");
    return this.setState({ value: this.state.value - 1 });
  };

  handleIncrememnt = (product) => {
    this.setState({ value: this.state.value + 1 });

    console.log("props", this.props);
  };

  doHandleIncrememnt = () => {
    this.handleIncrememnt(this.state.value + 1);
  };

  render() {
    return (
      <div className="container mt-2">
        <span className={this.getbadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.doHandleIncrememnt}
        >
          Increase
        </button>

        <button
          className="btn btn-sm btn-danger m-2"
          onClick={this.handelDelete}
        >
          Delete
        </button>

        {/* {this.renderTags()} */}
      </div>
    );
  }

  getbadgeClasses() {
    let classes = "badge m-2  badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: value } = this.state;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
