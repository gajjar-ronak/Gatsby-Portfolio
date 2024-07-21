import React from "react"
import { Layout, Row, Col } from "antd"
import { GithubOutlined, LinkedinFilled } from "@ant-design/icons"

const { Footer: AntFooter } = Layout

const Footer = () => {
  return (
    <>
      <AntFooter
        style={{ background: "#F9FAFC", color: "#000", width: "100%" }}
      >
        <Row justify="space-between" align="middle" style={{ padding: "24px 0" }}>
          <Col xs={24} sm={12} lg={8}>
            <div style={{ textAlign: "center", marginBottom: "16px" }}>
              <p>
                <span style={{ fontWeight: "bold" }}>Address: </span>
                Trelleborger Str. - 2,
                <br />
                10439 - Berlin, Germany
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <div style={{ textAlign: "center" }}>
              <p>
                <span style={{ fontWeight: "bold" }}>Phone: </span>
                <a href="tel:+4917687994310"> +49 (0) 176 8799 4310 </a>
              </p>

              <p>
                <div style={{ marginTop: "10px" }}>
                  <span style={{ fontWeight: "bold" }}>Email: </span>
                  <a href="mailto:ronakgajjar.de@gmail.com">
                    ronakgajjar.de@gmail.com
                  </a>
                </div>
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <div style={{ textAlign: "center", marginBottom: "16px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <a
                  href="https://github.com/gajjar-ronak"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff", marginRight: "10px" }}
                  aria-label="github"
                >
                  <GithubOutlined
                    style={{
                      fontSize: "24px",
                      color: "#000",
                      marginRight: "10px",
                    }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/ronak-gajjar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff" }}
                  aria-label="linkedin"
                >
                  <LinkedinFilled
                    style={{ fontSize: "24px", color: "#0077b5" }}
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </AntFooter>
      <div
        style={{
          textAlign: "center",
          padding: "12px 0",
          width: "100%",
          background: "#EFF2F7",
          color: "#000",
        }}
      >
        <p>Ronak Gajjar © {new Date().getFullYear()}</p>
      </div>
    </>
  )
}

export default Footer
