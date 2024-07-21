import React from "react"
import { Card, Col, Row, Typography } from "antd"

const { Title } = Typography

const AboutSection = () => {
  return (
    <Row justify="space-between" style={{ padding: "40px" }} id="about">
      <Col xs={24} md={12}>
        <h2
          style={{ textAlign: "center", fontWeight: 500, marginBottom: "20px" }}
        >
          About Me
        </h2>
        <hr style={{ border: "0.5px solid #E5E5E5", width: "100%" }} />

        <Card style={{ width: "100%", border: "none", fontSize: "1.2em" }}>
          <p>
            Experienced full-stack web developer proficient in JavaScript and
            Python, with expertise in building dynamic web apps. Passionate
            about enhancing user experiences with innovative solutions.
            Additionally, skilled in data science techniques and tools for
            deriving insights from complex datasets.
          </p>
          <br />
          <p>
            Technical Skills: Javascript, Python, React.js, Gatsby, Git, Github,
            Gitlab, Docker, MongoDB, PostgreSQL
          </p>
        </Card>
      </Col>
      <Col xs={24} md={12} style={{ padding: "0 30px" }}>
        <>
          <h2
            style={{
              textAlign: "center",
              fontWeight: 500,
              marginBottom: "20px",
            }}
          >
            Education
          </h2>
          <hr style={{ border: "0.5px solid #E5E5E5", width: "100%" }} />

          <Title level={4} style={{ fontWeight: 500, marginTop: "30px" }}>
            IU International University of Applied Sciences
          </Title>
          <p style={{ margin: "10px 0" }}>
            Master of Science - Data Science <span>(2023 - Continue)</span>
          </p>

          <Title level={4} style={{ marginTop: "30px", fontWeight: 500 }}>
            Indus University Ahmedabad
          </Title>
          <p style={{ margin: "10px 0" }}>
            B-Tech - Computer Science and Engineering <span>(2016 - 2020)</span>
          </p>
        </>
      </Col>
    </Row>
  )
}

export default AboutSection
