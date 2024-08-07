import React from "react"
import { Row, Col, Typography, Button, Tag } from "antd"
import p1 from "../images/project-1.png"

const { Title, Text } = Typography

const WorkSection = () => {
  const projects = [
    {
      title: "Client Side Caching Example using React and SWR",
      description:
        "This project demonstrates client-side caching using React and SWR (Stale-While-Revalidate). The example shows how to fetch data from an API, cache it on the client side, and revalidate it periodically to ensure the data remains fresh.",
      tags: ["React", "SWR", "API", "Caching"],
      link: "https://github.com/gajjar-ronak/client-side-caching-react-swr",
      projectImage: p1,
    },
  ]

  return (
    <div className="work-section" id="projects">
      <Row>
        {projects.map((project, index) => (
          <Col
            key={index}
            xs={24}
            lg={24}
            className={`project-col ${index % 2 === 0 ? "row-normal" : "row-reverse"
              }`}
          >
            <Col xs={12} sm={12} lg={12}>
              <div className="project-image-wrapper">
                <img
                  alt={project.title}
                  src={project.projectImage}
                  className="project-image"
                />
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              lg={12}
              className="project-description-wrapper"
            >
              <Title level={3}>{project.title}</Title>
              <Text>{project.description}</Text>
              <br />
              {project.tags.map((tag, index) => (
                <Tag key={index} color="geekblue" className="project-tag">
                  {tag}
                </Tag>
              ))}
              <br />
              <Button
                type="primary"
                size="large"
                className="project-button"
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
