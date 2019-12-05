import { Breadcrumb, Layout, Descriptions, Card, Row, Col, Button } from "antd";
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

const { Content } = Layout;
const { Meta } = Card;

function App() {
  return (
    <Layout className="layout">
      <Header />
      <Content style={{ padding: "50px" }}>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          <Col span={6}>
            <img
              width={200}
              height={200}
              resizeMode="contain"
              alt="example"
              src="https://www.fudzilla.com/media/k2/items/cache/1f9a501e1eb9c27efa1029ddc3c5efa1_XL.jpg"
            />
          </Col>
          <Col style={{ marginLeft: 20 }} span={9}>
            <Row>
              <Col span={12}>
                <h3>
                  <b> Hacktiv8 Meetup </b>
                </h3>
              </Col>
            </Row>
            <Row>
              <Col span={6}>Location</Col>
              <Col span={6}>Jakarta, Indonesia</Col>
            </Row>
            <Row>
              <Col span={6}>Members</Col>
              <Col span={6}>1,078</Col>
            </Row>
            <Row>
              <Col span={6}>Organizers</Col>
              <Col span={6}>Adhy Wiranata</Col>
            </Row>
            <br />
            <Row>
              <Col span={6}>
                <Button type="primary">Join Us</Button>
              </Col>
            </Row>
          </Col>
        </div>
        <br></br>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          <Row>
            <Row>
              <Col span={6}>
                <h3>
                  <b> Hacktiv8 Meetup </b>
                </h3>
              </Col>
            </Row>
            <Row>
              <Col style={{ marginLeft: 20 }} span={4}>
                <Row>
                  <Col span={24}>Awesome Meetup and event</Col>
                  <Col span={24}>25 January 2019</Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col style={{ marginLeft: 20 }} span={20}>
                <Row>
                  <Col span={24}>Awesome Meetup and event</Col>
                  <Col span={24}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </div>
        <br></br>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          <Row>
            <Row>
              <Col span={6}>
                <h3>
                  <b> Hacktiv8 Meetup </b>
                </h3>
              </Col>
            </Row>
            <Row>
              <Col style={{ marginLeft: 20 }} span={4}>
                <Row>
                  <Col span={24}>Awesome Meetup and event</Col>
                  <Col span={24}>25 January 2019</Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col style={{ marginLeft: 20 }} span={20}>
                <Row>
                  <Col span={24}>About Meetup</Col>
                  <Col span={24}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
