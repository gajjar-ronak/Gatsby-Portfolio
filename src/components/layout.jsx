import * as React from "react"
import "../style/global.css"
import { Row, Col } from "antd"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {

  return (
    <Row className="container">
      <Header />
      <Col span={24}>
        {children}
      </Col>
      <Footer />
    </Row>
  )
}

export default Layout
