import React from "react";
import ItemView from "./ItemView";

export interface IClickableItem {
  id: number;
  displayName: string;
}

export interface IItemCollectionViewProps {
  title: string;
  items: IClickableItem[];
  selectedItem: IClickableItem;
}

export class ItemCollectionView extends React.Component<
  IItemCollectionViewProps,
  { [key: string]: any }
> {
  static defaultPros = {};
  constructor(props: IItemCollectionViewProps) {
    super(props);
    this.itemSelected = this.itemSelected.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = { inputName: "Your Name" };
  }

  itemSelected(item: IClickableItem) {
    this.props.selectedItem.id = item.id;
    this.props.selectedItem.displayName = item.displayName;
    this.setState({ inputName: "" });
  }

  getButtonNodes() {
    return this.props.items.map(item => {
      return (
        <ItemView onItemClicked={this.itemSelected} {...item} key={item.id} />
      );
    });
  }

  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    let valueName = event.target.name;
    this.setState({ [valueName]: event.target.value });
    console.log(`onChange : ${event.target.name} : ${event.target.value}`);
  }

  onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(`onSubmit : state : ${this.state.inputName}`);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ul>{this.getButtonNodes()}</ul>
        <div>
          Selected Items: {this.props.selectedItem.displayName} --{" "}
          {this.props.selectedItem.id}
        </div>
        <form>
          <div className="form-group">
            <label>Name: </label>
            <input
              name="inputName"
              type="text"
              className="form-control"
              value={this.state.inputName}
              onChange={this.onChange}
            />
          </div>
          <button
            className="submit-button"
            type="submit"
            value="Submit"
            onSubmit={this.onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
