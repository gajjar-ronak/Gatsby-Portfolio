import React from "react"
import { Link } from "gatsby"
import { GithubOutlined, LinkedinFilled } from "@ant-design/icons"
import { Col, Row } from "antd"

const Header = () => {
  return (
    <Row style={{ width: "100%" }}>
      <Col span={24}>
        <header className="header">
          <div style={{ letterSpacing: "1px" }}>
            <Link to="/" style={{ marginRight: "1rem" }}>
              Home
            </Link>
            <Link to="#about" style={{ marginRight: "1rem" }}>
              About
            </Link>
            <Link to="#projects" style={{ marginRight: "1rem" }}>
              Projects
            </Link>
            <Link to="#contact">Contact</Link>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              to="https://github.com/vivek-gill"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "1rem" }}
            >
              <GithubOutlined
                style={{ fontSize: "1.2rem", color: "#24292e" }}
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/vivek-gill-5b9a94118/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "1rem" }}
            >
              <LinkedinFilled
                style={{ fontSize: "1.2rem", color: "#0a66c2" }}
              />
            </Link>
          </div>
        </header>
      </Col>
    </Row>
  )
}

export default Header
