import React from "react"
import { Link } from "gatsby"
import {
  GithubOutlined,
  LinkedinFilled,
  XOutlined,
  DribbbleOutlined,
} from "@ant-design/icons"
import { Col, Row, Typography } from "antd"

const { Text } = Typography

const Header = () => {
  return (
    <Row className="header-row">
      <Col span={24}>
        <header className="header" style={{ padding: "20px 40px" }}>
          <div className="nav-links">
            <Link to="/" className="nav-link">
              <Text>Home</Text>
            </Link>
            <Link to="#about" className="nav-link">
              <Text>About</Text>
            </Link>
            <Link to="#projects" className="nav-link">
              <Text>Projects</Text>
            </Link>
            <Link to="#contact" className="nav-link">
              <Text>Contact</Text>
            </Link>
          </div>
          <div className="social-links">
            <Link
              to="https://github.com/gajjar-ronak"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <GithubOutlined className="icon github-icon" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/ronak-gajjar/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <LinkedinFilled className="icon linkedin-icon" />
            </Link>
            <Link
              to="https://x.com/Ronak_gajjar_"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <XOutlined className="footer-icon icon x-icon" />
            </Link>
            <Link
              to="https://dribbble.com/Ronak_Gajjar"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <DribbbleOutlined className="footer-icon website-icon" />
            </Link>
          </div>
        </header>
      </Col>
    </Row>
  )
}

export default Header
