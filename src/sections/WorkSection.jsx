import React from "react"
import { Row, Col, Typography, Button, Tag } from "antd"
import p2 from "../images/swr-caching.png"
import p1 from "../images/product-auto-tagging.png"

const { Title, Text } = Typography

const WorkSection = () => {
  const projects = [
    {
      title: "Product Auto Tagging Using Vision Transformer (ViT)",
      description:
        "Product auto tagging is a cutting-edge technology that automatically assigns relevant tags or labels to products based on their visual attributes. By leveraging advanced image recognition models, this process can categorize and label products accurately without the need for manual intervention. In my project, I utilize the Vision Transformer(ViT) a deep learning model, to perform auto tagging on product images. ViT's architecture, which treats images as sequences of patches and applies transformer-based attention mechanisms, allows it to capture intricate details and contextual information effectively. This results in highly accurate and relevant tags that enhance the product categorization process.",
      tags: [
        "AI",
        "Deep Learning",
        "Vision Transformer",
        "ViT",
        "Auto Tagging",
        "Product Categorization",
        "E-Commerce",
        "Google Colab",
      ],
      link: "https://colab.research.google.com/drive/11suOaNRe0dbOJWcoH22ll2MrQvWxsJS4?usp=sharing",
      projectImage: p1,
    },
    {
      title: "Client Side Caching Example using React and SWR",
      description:
        "This project demonstrates client-side caching using React and SWR (Stale-While-Revalidate). The example shows how to fetch data from an API, cache it on the client side, and revalidate it periodically to ensure the data remains fresh.",
      tags: ["React", "SWR", "API", "Caching"],
      link: "https://github.com/gajjar-ronak/client-side-caching-react-swr",
      projectImage: p2,
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
            className={`project-col ${index % 2 === 0 ? "row-reverse" : "row-normal"
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
