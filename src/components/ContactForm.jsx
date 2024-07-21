import React from "react"
import { Form, Input, Button, Row, Col } from "antd"
import GoogleMapComponent from "./GoogleMap"

const ContactForm = () => {
  const antdMessage = Form.useFormInstance()

  const [form] = Form.useForm()

  const onFinish = async values => {
    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        antdMessage.success("Form submitted successfully!")
        form.resetFields()
      } else {
        antdMessage.error("Failed to submit form. Please try again.")
      }
    } catch (error) {
      antdMessage.error(
        "An error occurred while submitting the form. Please try again."
      )
    }
  }

  return (
    <Row id="contact">
      <Col span={12}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "1em" }}>
          <h2 level={1} style={{ marginBottom: "2em" }}>
            Contact Form
          </h2>
          <Form
            form={form}
            layout="vertical"
            name="contact_form"
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input placeholder="Your Name" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input placeholder="Your Email" />
            </Form.Item>
            <Form.Item
              name="subject"
              label="Subject"
              rules={[
                { required: true, message: "Please input your subject!" },
              ]}
            >
              <Input placeholder="Your Subject" />
            </Form.Item>
            <Form.Item
              name="message"
              label="Message"
              rules={[
                { required: true, message: "Please input your message!" },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Your Message"
                style={{ height: "100%" }}
              />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="submit" className="submit-btn">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
      <Col span={12}>
        <GoogleMapComponent />
      </Col>
    </Row>
  )
}

export default ContactForm
