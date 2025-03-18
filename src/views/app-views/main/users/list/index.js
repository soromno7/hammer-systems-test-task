import React, { Component } from "react";
import { Card, Table, Tag, Tooltip, message, Button, Spin } from "antd";
import { EyeOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import moment from "moment";
import UserView from "./UserView";
import AvatarStatus from "components/shared-components/AvatarStatus";
import axios from "axios";
import EditProfile from "./EditProfile";

export class List extends Component {
  state = {
    users: [],
    loading: true,
    userProfileVisible: false,
    selectedUser: null,
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      this.setState({ users: res.data, loading: false });
      console.log(res.data);
    } catch (err) {
      console.error(err.message);
      this.setState({ loading: false });
    }
  };

  deleteUser = (userId) => {
    this.setState({
      users: this.state.users.filter((item) => item.id !== userId),
    });
    message.success({ content: `Deleted user with ID ${userId}`, duration: 2 });
  };

  showUserProfile = (userInfo) => {
    this.setState({
      userProfileVisible: true,
      selectedUser: userInfo,
    });

    console.log(userInfo);
  };

  closeUserProfile = () => {
    this.setState({
      userProfileVisible: false,
      selectedUser: null,
    });
  };

  render() {
    const { users, userProfileVisible, selectedUser, loading } = this.state;

    const tableColumns = [
      {
        title: "ID",
        dataIndex: "id",
        sorter: {
          compare: (a, b) => a.id.length - b.id.length,
        },
      },
      {
        title: "Username",
        dataIndex: "username",
        render: (_, record) => (
          <div className="d-flex">
            <AvatarStatus
              src={record.img}
              name={record.username}
              subTitle={record.email}
            />
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.username.toLowerCase();
            b = b.username.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "Name",
        dataIndex: "name",
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "Phone",
        dataIndex: "phone",
        sorter: {
          compare: (a, b) => a.phone.length - b.phone.length,
        },
      },
      {
        title: "Website",
        dataIndex: "website",
        sorter: {
          compare: (a, b) => a.website.length - b.website.length,
        },
      },
      {
        title: "",
        dataIndex: "actions",
        render: (_, elm) => (
          <div className="text-right">
            <Tooltip title="Edit">
              <Button
                type="primary"
                className="mr-2"
                icon={<EditOutlined />}
                onClick={() => {
                  this.showUserProfile(elm);
                }}
                size="small"
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => {
                  this.deleteUser(elm.id);
                }}
                size="small"
              />
            </Tooltip>
          </div>
        ),
      },
    ];
    return (
      <Card bodyStyle={{ padding: "0px" }}>
        {loading ? (
          <div style={{ textAlign: "center", padding: "30px" }}>
            <Spin size="large" />
          </div>
        ) : (
          <>
            {userProfileVisible ? (
              <EditProfile data={selectedUser} closeUserProfile={this.closeUserProfile} />
            ) : (
              <Table columns={tableColumns} dataSource={users} rowKey="id" />
            )}
          </>
        )}
      </Card>
    );
  }
}

export default List;
