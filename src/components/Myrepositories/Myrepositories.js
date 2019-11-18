import React, { Component } from "react";
import Cardrepo from "./Cardrepo";
import axios from "axios";
import "./styles.css";

export default class Myrepositories extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    // fetch("https://api.github.com/users/Elkinssm/repos")
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res);
    //     this.setState({
    //       vRepos: res
    //     });
    //   })
    //   .catch(()=>{
    //   })
    axios
      .get("https://api.github.com/users/Elkinssm/repos")
      .then(response => {
        console.log("Response AXIOS", response.data);
        this.setState({
          vector: response.data,
          loading: false
        });
      })
      .catch(error => {
        console.log("Error", error);
      });
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <h1>"Loading"....</h1>
        ) : (
          <div className="container_card">
            <h1>My repos</h1>
            {this.state.vector.map(item => (
              <Cardrepo id={item.id} name={item.name} url={item.clone_url} />
            ))}
          </div>
        )}
      </>
    );
  }
}
