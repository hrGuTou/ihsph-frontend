import React from "react";
import { Input } from "mdbreact";

class SearchBar extends React.Component {

    constructor(){
        super()
    }

  render() {
    return (
        <Input hint="Search" type="text" containerClass="mt-0" />

    );
  }
}

export default SearchBar;