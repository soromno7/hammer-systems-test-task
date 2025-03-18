import React, { Component } from "react";
import { Form, Button, Input, Row, Col, message, Spin } from "antd";
import { ROW_GUTTER } from "constants/ThemeConstant";

export class EditProfile extends Component {
  state = {
    ...this.props.data,
    loading: false,
  };

  componentDidMount() {
    console.log(this.state);
  }

  getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  render() {
    const onFinish = (values) => {
      const key = "updatable";
      this.setState({ loading: true });
      message.loading({ content: "Updating...", key });
      setTimeout(() => {
        this.setState({
          name: values.name,
          email: values.email,
          userName: values.userName,
          dateOfBirth: values.dateOfBirth,
          phoneNumber: values.phoneNumber,
          website: values.website,
          address: values.address,
          city: values.city,
          postcode: values.postcode,
        });
        message.success({ content: "Done!", key, duration: 2 });
        this.props.closeUserProfile();
        this.setState({ loading: false });
      }, 1000);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    const { username, name, email, phone, website } = this.state;

    return (
      <div className="mt-5 ml-5 mb-5">
        <Spin spinning={this.state.loading}>
          <Form
            name="basicInformation"
            layout="vertical"
            initialValues={{
              username: username,
              name: name,
              email: email,
              phone: phone,
              website: website,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Row>
              <Col xs={24} sm={24} md={24} lg={16}>
                <Row gutter={ROW_GUTTER}>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Name"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your name!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        {
                          required: true,
                          type: "email",
                          message: "Please enter a valid email!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Phone" name="phone">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Website" name="website">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                  Save Change
                </Button>
              </Col>
            </Row>
          </Form>
        </Spin>
      </div>
    );
  }
}

export default EditProfile;
