import React from "react";
import ComicPage from "./components/comic/ComicPage";
import StoreProvider from "./components/comic/Store";

import {
  ItemCollectionView,
  IClickableItem
} from "./components/itemlist/ItemCollectionView";
let ClickableItemArray: IClickableItem[] = [
  { id: 1, displayName: "first Item" },
  { id: 2, displayName: "second Item" },
  { id: 3, displayName: "third Item" }
];

export default function App() {
  return (
    <StoreProvider>
      <ItemCollectionView
        items={ClickableItemArray}
        title="Please select:"
        selectedItem={{ id: 0, displayName: "None Selected " }}
      />
      <ComicPage />
    </StoreProvider>
  );
}
