import React from "react";
import styles from "./itemlist.module.css";

// served as props
export class ItemModel {
  displayName: string = "";
  id: number = 0;
  onItemClicked(item: ItemModel) {}
}

export default class ItemView extends React.Component<ItemModel, {}> {
  constructor(item: ItemModel) {
    super(item);
    this.handleClick = this.handleClick.bind(this);
  }

  static defaultProps = {
    item: { displayName: "Jeff", id: 1 }
  };

  handleClick() {
    this.props.onItemClicked(this.props);
  }

  render() {
    return (
      <div>
        <button
          className={`btn btn-primary ${styles.itemButton}`}
          onClick={this.handleClick}
        >
          {this.props.displayName}
        </button>
      </div>
    );
  }
}
