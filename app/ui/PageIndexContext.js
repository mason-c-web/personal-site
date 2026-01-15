import { Component, createContext } from "react";

export const PageIndexContext = createContext();

class PageIndexContextProvider extends Component {
  state = { pageIndex: 0 };
  updateIndex = (x) => {
    this.setState({ pageIndex: x });
    console.log(x);
  };
  render() {
    return (
      <PageIndexContext.Provider
        value={{ ...this.state, updateIndex: this.updateIndex }}
      >
        {this.props.children}
      </PageIndexContext.Provider>
    );
  }
}

export default PageIndexContextProvider;
