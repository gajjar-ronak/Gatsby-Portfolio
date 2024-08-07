import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col, Button } from "antd"
import { DownloadOutlined } from "@ant-design/icons"
import { getImage } from "gatsby-plugin-image"

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "bg.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1200
            formats: [AUTO]
            placeholder: BLURRED
            transformOptions: { fit: COVER }
          )
        }
      }
    }
  `)

  const bg = getImage(data.file.childImageSharp.gatsbyImageData)

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1J5CsYNO8Sxe2JyWnKLM1MvrUVbRlXmVo/view?usp=sharing",
      "_blank"
    )
  }

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: bg ? `url("${bg.images.fallback.src}")` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "94vh",
      }}
    >
      <Row justify="space-between" align="middle" className="hero-row">
        <Col xs={24} sm={24} md={24} className="hero-col-left">
          <h1 className="hero-title">Ronak Gajjar</h1>
          <p className="hero-subtitle">
            A Full Stack Web Developer, Passionate About Data Science.
          </p>
          <Button
            type="primary"
            size="large"
            onClick={handleDownload}
            icon={<DownloadOutlined />}
            className="hero-button"
          >
            Download CV
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default HeroSection

