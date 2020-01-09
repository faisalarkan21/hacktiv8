import React from "react";
import { Skeleton } from "antd";
import {
  List,
  Avatar,
  Icon,
  Row,
  Col,
  Button,
  InputNumber,
  Modal,
  Select,
  Form,
  Input
} from "antd";
import { connect } from "react-redux";
import { getTicketThunk, getTicket } from "../../action/ticket";
var numeral = require("numeral");
const { Option } = Select;

const listData = [
  {
    href: "http://ant.design",
    title: `Konser Judika`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    like: 90,
    favorite: 90,
    img:
      "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20191119123701.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    id: "xa9NYKD",
  },
  {
    href: "http://ant.design",
    title: `Konser Sheila On 7`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    like: 90,
    favorite: 90,
    img:
      "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20191101142919_5dbbdecf517fa.jpg",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      id: "UqC-YUY"
    },
  {
    href: "http://ant.design",
    title: `Konser Slank`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    like: 90,
    favorite: 90,
    img:
      "https://ecs7.tokopedia.net/img/banner/2019/12/12/22166894/22166894_fb8e3d78-f2eb-4a0a-adfa-27ef57d5ee5f.jpg",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    id: "BXn9HsR",
  },
  {
    href: "http://ant.design",
    title: `Welyar Kauntu`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    like: 90,
    favorite: 90,
    img:
      "https://ecs7.tokopedia.net/img/banner/2019/11/26/28840682/28840682_3ccc6b59-d803-4b84-ae42-949f7953b199.jpg",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    id: "YaIp-NG"
  }
];

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class ListTicket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hargaHargaTiket: "",
      chooseHargaTiketValue: "",
      totalTiket: "",
      modalVisibleBuy: false
    };
  }

  componentDidMount() {
    // console.log('this.props', this.props)
    this.props.dispatch(getTicketThunk());
  }

  handleChangeInputNumber = value => {
    this.setState({
      totalTiket: value
    });
  };

  handleChange = ({ value, label, price }) => {
    this.setState({
      [`hargaHargaTiket${value}`]: price,
      chooseHargaTiketValue: value,
      chooseHargaTiketLabel: label
    });
  };

  handleOpenModal = () => {
    this.setState(prevState => ({
      modalVisibleBuy: !prevState.modalVisibleBuy
    }));
  };

  handleOnOk = () => {};

  handleOnCancel = () => {};

  render() {
    const {
      totalTiket,
      modalVisibleBuy,
      hargaHargaTiket,
      chooseHargaTiketValue,
      chooseHargaTiketLabel
    } = this.state;

    const { getTickets } = this.props;

    if (!getTickets.data.length) {
      return (
        <div>
          <Row style={{ marginTop: 50 }}>
            <Col offset={5} span={10}>
              <Skeleton />
            </Col>
          </Row>
          <Row>
            <Col offset={5} span={10}>
              <Skeleton />
            </Col>
          </Row>
          <Row>
            <Col offset={5} span={10}>
              <Skeleton />
            </Col>
          </Row>
          <Row>
            <Col offset={5} span={10}>
              <Skeleton />
            </Col>
          </Row>
        </div>
      );
    }

    return (
      <div>
        <Modal
          title={"Buy Ticket"}
          visible={modalVisibleBuy}
          onOk={this.handleOnOk}
          onCancel={this.handleOpenModal}
        >
          <Row>
            <Col span={10}>
              <Form>
                <Form.Item label="Pilih tiket">
                  <Select
                    placeholder={"Pilih Tiket"}
                    value={chooseHargaTiketLabel}
                    style={{ width: 120 }}
                    onChange={this.handleChange}
                  >
                    <Option
                      value={{
                        value: "stageA",
                        label: "Stage A",
                        price: 10000000
                      }}
                    >
                      Stage A
                    </Option>
                    <Option
                      value={{
                        value: "stageB",
                        label: "Stage B",
                        price: 5000000
                      }}
                    >
                      Stage B
                    </Option>
                    <Option
                      value={{
                        value: "stageC",
                        label: "Stage C",
                        price: 2000000
                      }}
                    >
                      Stage C
                    </Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Harga tiket">
                  <Input
                    defaultValue={0}
                    disabled
                    addonBefore="Rp. "
                    value={numeral(
                      this.state[`hargaHargaTiket${chooseHargaTiketValue}`]
                    ).format("0,0.00")}
                    onChange={this.handleChangeInputNumber}
                  ></Input>
                </Form.Item>
                <Form.Item label="Jumlah tiket">
                  <InputNumber
                    placeholder="0"
                    defaultValue={0}
                    value={totalTiket}
                    onChange={this.handleChangeInputNumber}
                  ></InputNumber>
                </Form.Item>
                <Form.Item label="Total">
                  <Input
                    width={100}
                    disabled
                    addonBefore="Rp. "
                    value={numeral(
                      totalTiket *
                        this.state[`hargaHargaTiket${chooseHargaTiketValue}`]
                    ).format("0,0.00")}
                    onChange={this.handleChangeInputNumber}
                  ></Input>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Modal>
        <Row>
          <Col offset={5} span={12}>
            <div style={{ marginTop: 50, marginBottom: 100 }}>
              <List
                itemLayout="vertical"
                size="large"
                dataSource={getTickets.data}
                footer={
                  <div>
                    <b>Hacktiv8</b> 2019
                  </div>
                }
                renderItem={item => (
                  <List.Item
                    key={item.title}
                    actions={[
                      <IconText
                        type="star-o"
                        text={item.favorite}
                        key="list-vertical-star-o"
                      />,
                      <IconText
                        type="like-o"
                        text={item.like}
                        key="list-vertical-like-o"
                      />,
                      <Button
                        size={"small"}
                        onClick={this.handleOpenModal}
                        type="primary"
                      >
                        Buy
                      </Button>
                    ]}
                    extra={<img width={272} alt="logo" src={item.img} />}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                    />
                    {item.content}
                  </List.Item>
                )}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    getTickets: state.getTickets
  };
}

export default connect(mapStateToProps)(ListTicket);
