import React from "react"
import { Layout, Row, Col, Divider } from "antd"
import { GithubOutlined, LinkedinFilled } from "@ant-design/icons"

const { Footer: AntFooter } = Layout

const Footer = () => {
  return (
    <>
      <AntFooter className="footer">
        <Row justify="space-between" align="middle" className="footer-row">
          <Col xs={24} sm={12} lg={8} className="footer-col">
            <div className="footer-address">
              <p>
                <span className="footer-bold">Address: </span>
                Trelleborger Str. - 2,
                <br />
                10439 - Berlin, Germany
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={8} className="footer-col">
            <div className="footer-contact">
              <p>
                <span className="footer-bold">Phone: </span>
                <a href="tel:+4917687994310"> +49 (0) 176 8799 4310 </a>
              </p>
              <p className="footer-email">
                <span className="footer-bold">Email: </span>
                <a href="mailto:ronakgajjar.de@gmail.com">
                  ronakgajjar.de@gmail.com
                </a>
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={8} className="footer-col">
            <div className="footer-social">
              <a
                href="https://github.com/gajjar-ronak"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
                className="footer-social-link"
              >
                <GithubOutlined className="footer-icon github-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/ronak-gajjar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
                className="footer-social-link"
              >
                <LinkedinFilled className="footer-icon linkedin-icon" />
              </a>
            </div>


          </Col>
        </Row>
        <Row>
          <Col span={24} className="footer-copyright">
            <Divider className="footer-divider" />
            <div className="footer-bottom">
              <p>Ronak Gajjar © {new Date().getFullYear()}</p>
            </div>
          </Col>
        </Row>
      </AntFooter>

    </>
  )
}

export default Footer