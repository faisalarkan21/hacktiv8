import React from "react";
import { List, Avatar, Icon, Row, Col, Button, Card, Descriptions } from "antd";

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
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
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
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
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
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
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
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  }
];

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row>
          <Col style={{ marginTop: 50, marginBottom: 50 }} offset={2} span={14}>
            <Card title="Profile Faisal Arkan">
              <Row>
                <Col offset={1} xs span={24}>
                  <Descriptions style={{marginTop:20}} title="User Info">
                    <Descriptions.Item label="UserName">
                      Zhou Maomao
                    </Descriptions.Item>
                    <Descriptions.Item label="Telephone">
                      1810000000
                    </Descriptions.Item>
                    <Descriptions.Item label="Live">
                      Hangzhou, Zhejiang
                    </Descriptions.Item>
                    <Descriptions.Item label="Remark">empty</Descriptions.Item>
                    <Descriptions.Item label="Address">
                      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang,
                      China
                    </Descriptions.Item>
                  </Descriptions>
                </Col>

                <Col offset={1} span={12}>
                  <div style={{ marginTop: 50, marginBottom: 100 }}>
                    <List
                      header={<b>List Pembelian Tiket</b>}
                      itemLayout="vertical"
                      size="large"
                      dataSource={listData}
                      renderItem={item => (
                        <List.Item
                          key={item.title}
                          extra={<img width={150} alt="logo" src={item.img} />}
                        >
                          <List.Item.Meta
                            title={<a href={item.href}>{item.title}</a>}
                          />
                        </List.Item>
                      )}
                    />
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;
