import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Comj() {
  return (
    <div>
      <div style={{ backgroundColor: "#f5f4f4" }}>
        <div className="container" style={{ paddingTop: '200px' }}>
          <div className="row" style={{height:"400px"}}>
            <div className="col-md-6">
              <h1 >Read our newsletter</h1>
              <p style={{ color: '#b5b4b2', fontSize: '20px' }}>Access Gitpod's latest thinking, news, and insights.</p>


            </div>
            <div className="col-md-6">
              <div>
                <Form className="d-flex">
                  <Form.Control style={{ width: "400px" }}
                    type="search"
                    placeholder="Work email"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="warning">Subscribe</Button>
                </Form>

              </div><br />
              <div >
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="I consent to having this website store my submitted information so that Gitpod can respond to my inquiry. By submitting this form I acknowledge that I have read and understood Gitpod’s Privacy Policy."
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
              </div>


            </div>
          </div>
        </div>
      </div >

    </div>
  )
}

export default Comj
