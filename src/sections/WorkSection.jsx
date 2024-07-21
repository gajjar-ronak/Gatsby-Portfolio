import React from "react"
import { Row, Col, Typography, Button } from "antd"
import p1 from "../images/project-1.png"
import p2 from "../images/project-2.png"

const { Title, Text } = Typography

const WorkSection = () => {
  const projects = [
    {
      title: "Client Side Caching Example using React and SWR",
      description:
        "This project demonstrates client-side caching using React and SWR (Stale-While-Revalidate). The example shows how to fetch data from an API, cache it on the client side, and revalidate it periodically to ensure the data remains fresh.",
      link: "https://github.com/gajjar-ronak/client-side-caching-react-swr",
      projectImage: p1,
    },
    {
      title: "MGF Web Design",
      description:
        "Web design I made for MGF, an amazing architecture agency from London. Web design I made for MGF, an amazing architecture agency from London. Web design I made for MGF, an amazing architecture agency from London.",
      link: "/projects/mgf-web-design",
      projectImage: p2,
    },
  ]

  return (
    <div style={{ backgroundColor: "#fff" }} id="projects">
      <Row>
        {projects.map((project, index) => (
          <Col
            key={index}
            xs={24}
            lg={24}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            <Col xs={12} sm={12} lg={12}>
              <div style={{ padding: "30px" }}>
                <img
                  alt={project.title}
                  src={project.projectImage}
                  style={{ maxWidth: "100%", height: "auto", width: "100%" }}
                />
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              lg={12}
              style={{ textAlign: "left", padding: "30px" }}
            >
              <Title level={3}>{project.title}</Title>
              <Text>{project.description}</Text>
              <br />

              <Button
                type="primary"
                size="large"
                style={{
                  marginTop: "20px",
                  color: "#fff",
                  backgroundColor: "#000",
                }}
                onClick={() => {
                  window.open(project.link, "_blank")
                }}
              >
                View on GitHub
              </Button>
            </Col>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default WorkSection
