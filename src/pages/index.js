import * as React from "react"
import { Row, Col } from "antd"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactForm from "../components/ContactForm"
import WorkSection from "../sections/WorkSection"
import AboutSection from "../sections/AboutSection"
import HeroSection from "../sections/HeroSection"
import ScrollToTop from "../components/ScrollToTop"

const IndexPage = () => (
  <Layout>
    <Row>
      <Col span={24}>
        <HeroSection />
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <AboutSection />
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <WorkSection />
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <ContactForm />
      </Col>
    </Row>
    <ScrollToTop />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
