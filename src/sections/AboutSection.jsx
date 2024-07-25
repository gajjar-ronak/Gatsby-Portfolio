import React from "react"
import { Row, Col, Timeline, Typography } from "antd"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

const { Text } = Typography

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query {
      profilePic: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 450
            formats: [AVIF]
            placeholder: BLURRED
            transformOptions: { fit: COVER }
          )
        }
      }
    }
  `)
  const profilePic = getImage(data.profilePic.childImageSharp.gatsbyImageData)

  return (
    <Row justify="space-between" className="about-section" id="about">
      <Col xs={24} md={12} className="about-col">
        <div className="hero-image-wrapper">
          <GatsbyImage image={profilePic} alt="profile picture" />
        </div>
      </Col>
      <Col xs={24} md={12} className="education-col">
        <h2 className="about-title">About Me</h2>
        <Text className="about-description">
          Experienced full-stack web developer proficient in JavaScript and
          Python, with expertise in building dynamic web apps. Passionate about
          enhancing user experiences with innovative solutions. Additionally,
          skilled in data science techniques and tools for deriving insights
          from complex datasets.
        </Text>

        <h2 className="about-title education-title">Education</h2>

        <Timeline className="education-timeline">
          <Timeline.Item>
            <span className="timeline-education">
              <span className="education-institution">
                IU International University of Applied Sciences
              </span>
              <br />
              <span className="education-degree">
                Master of Science - Data Science
              </span>{" "}
              <span className="timeline-date">(2023 - Continue)</span>
            </span>
          </Timeline.Item>
          <Timeline.Item>
            <span className="timeline-education">
              <span className="education-institution">
                Indus University Ahmedabad
              </span>
              <br />
              <span className="education-degree">
                B-Tech - Computer Science and Engineering
              </span>{" "}
              <span className="timeline-date">(2016 - 2020)</span>
            </span>
          </Timeline.Item>
        </Timeline>

        <h2 className="about-title skills-title">Technical Skills</h2>
        <div className="skills-wrapper">
          <Text className="about-description">
            HTML, CSS, JavaScript, Python, Docker, Flask, React, Node.js,
            MongoDB, Docker, PostgreSQL, GraphQL, Gatsby, Git
          </Text>
        </div>
      </Col>
    </Row>
  )
}

export default AboutSection
