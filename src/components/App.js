import React from "react";
import unspash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Footer from "./Footer";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unspash.get("/search/photos", {
      params: { query: term },
    });

    console.log(this);
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        <Footer numImages={this.state.images.length} />
      </div>
    );
  }
}

export default App;
