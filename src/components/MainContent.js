import React from "react";
import AlbumCard from "./AlbumCard";
import GenrePicker from "./GenrePicker";
import AlbumList from "./AlbumList";

function MainContent() {
  return (
    <main>
      <GenrePicker />
      {/* <AlbumCard /> */}
      <AlbumList />
    </main>
  );
}

export default MainContent;
