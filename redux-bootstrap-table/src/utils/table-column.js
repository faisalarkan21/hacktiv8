import { Divider } from "antd";
import React from "react";
import moment from "moment";

function handleNonValidURLAvatar(value) {
  const patt = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
  if (patt.test(value)) {
    return <img width={150} height={150} src={value}></img>;
  } else {
    return (
      <img
        width={150}
        height={150}
        src={"http://www.dpbatour.com/img/profile_none.png"}
      ></img>
    );
  }
}

export const ColumnsUsers = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    columnWidth: 10,
    render: text => <a>{text}</a>
  },
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
    render: (text, record) => {
      
      return handleNonValidURLAvatar(text);
    }
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text, record) => {
      return moment(text).format("L");
    }
  },
  {
    title: "Cash",
    dataIndex: "cash",
    key: "cash"
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a>Delete</a>
        <Divider type="vertical" />
        <a>Edit</a>
      </span>
    )
  }
];
