import React, { Component } from "react";
import { Table } from "antd";
import axios from "axios";
import "antd/dist/antd.css";

const url = "api.supremecourt.gov.np:8080/react_api/data/detail";
class ShowList extends Component {
  constructor() {
    super();
    this.state = {
      // ID: "",
      // FULL_NAME: "",
      // OCCUPATION: "",
      // SPOUSE_NAME: "",
      // DATE_OF_BIRTH: "",
      // PARENTS_DETAIL: "",
      // IMAGE_UPLOAD: "",
      details: []
    };
  }
  componentDidMount() {
    let self = this;
    axios
      .post("http://api.supremecourt.gov.np:8080/react_api/data/detail", {})
      .then(function(response) {
        // handle success
        console.log("test", response);
        // self.setState({
        //   details: response
        // });
      })
      .catch(function(error) {
        // handle error
        console.log("Smn error", error);
      })
      .finally(function() {
        // always executed
      });
  }
  render() {
    const dataSource = [
      {
        key: "1",
        name: "Mike",
        age: 32,
        address: "10 Downing Street"
      },
      {
        key: "2",
        name: "John",
        age: 42,
        address: "10 Downing Street"
      }
    ];

    const columns = [
      {
        title: "Name",
        dataIndex: "FULL_NAME",
        key: "name"
      },
      {
        title: "Occupation",
        dataIndex: "OCCUPATION",
        key: "OCCUPATION"
      },
      {
        title: "Date of Birth",
        dataIndex: "DATE_OF_BIRTH",
        key: "DOB"
      },
      {
        title: "Photo",
        dataIndex: "IMAGE_UPLOAD",
        key: "image"
      }
    ];

    return <Table dataSource={dataSource} columns={columns} />;
  }
}

export default ShowList;
