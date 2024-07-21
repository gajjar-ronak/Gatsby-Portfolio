import React from "react"
import { Row, Col, Typography, Button } from "antd"
import { DownloadOutlined } from "@ant-design/icons"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

const { Title } = Typography

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 450
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)
  const profilePic = getImage(data.file.childImageSharp.gatsbyImageData)

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1J5CsYNO8Sxe2JyWnKLM1MvrUVbRlXmVo/view?usp=sharing",
      "_blank"
    )
  }

  return (
    <div
      style={{
        backgroundColor: "#F9FAFC",
        width: "100%",
        height: "90vh",
      }}
    >
      <Row justify="space-between" align="middle" style={{ minHeight: "90vh" }}>
        <Col xs={24} sm={12} style={{ textAlign: "left", padding: "0 40px" }}>
          <Title
            level={1}
            style={{
              fontFamily: "source serif, Georgia, serif",
              fontSize: "6em",
              color: "#000",
              fontWeight: 500,
            }}
          >
            Ronak Gajjar
          </Title>
          <p style={{ fontSize: "3em", color: "#000", fontWeight: 300 }}>
            Full Stack Developer 👋
          </p>
          <Button
            type="primary"
            size="large"
            onClick={handleDownload}
            icon={<DownloadOutlined />}
            style={{
              fontSize: "1.2em",
              backgroundColor: "#000",
              borderColor: "#000",
              marginTop: "50px",
            }}
          >
            Download CV
          </Button>
        </Col>
        <Col xs={24} sm={12} lg={12} style={{ textAlign: "center" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <GatsbyImage image={profilePic} alt="profile picture" />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default HeroSection
