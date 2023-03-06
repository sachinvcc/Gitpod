import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaLessThan } from 'react-icons/fa'

function Comb() {
  return (
    <div className='back-color1'> <br /><br />
      <h4 className='text-center font-wei'>Speeding up +750k developers in teams like
      </h4><br />
      <div className='with1'>
        <div className="row hig-1">
          <div className="col-3">
            <div class="scroller">
              <span>
                <h2><i class="fa fa-amazon" aria-hidden="true"></i>mazon<br /></h2>

                <h2><i class="fa fa-gitlab" aria-hidden="true"></i> GITLAB<br /></h2>
                DataStex

              </span>
            </div>

          </div>
          <div className="col-3"><div class="scroller">
            <span>
              <h2><i class="fa fa-amazon" aria-hidden="true"></i>mazon<br /></h2>

              <h2><i class="fa fa-gitlab" aria-hidden="true"></i> GITLAB<br /></h2>
              <h2>DataStex</h2>
            </span>
          </div>



          </div>
          <div className="col-3">
            <div class="scroller">
              <span>
                <h2><i class="fa fa-amazon" aria-hidden="true"></i>mazon<br /></h2>

                <h2><i class="fa fa-gitlab" aria-hidden="true"></i> GITLAB<br /></h2>
                <h2>DataStex</h2>
              </span>
            </div>

          </div>
          <div className="col-3">
            <div class="scroller">
              <span>
                <h2><i class="fa fa-amazon" aria-hidden="true"></i>mazon<br /></h2>

                <h2><i class="fa fa-gitlab" aria-hidden="true"></i> GITLAB<br /></h2>
                <h2>DataStex</h2>
              </span>
            </div>

          </div>

        </div>


      </div><br /><br /><br /><br /><br /><br />
      <div className="container">
        <div className="row ">
          <div className="col-md-3">
            <Card style={{ width: '18rem', backgroundColor: "#f9f9f9", borderColor: "white", borderRadius: "20px" }} >
              <Card.Body>
                <Card.Title className='text-center ' style={{ display: "flex" }}><FaLessThan style={{ width: "40px" }} /><h1 className='h1-1'> 5 min</h1></Card.Title>

                <Card.Text className='text-center'>
                  <p className='font-2'>onboarding time for new developers</p>
                </Card.Text>

              </Card.Body>
            </Card>


          </div>
          <div className="col-md-3">
            <Card style={{ width: '18rem', backgroundColor: "#f9f9f9", borderColor: "white", borderRadius: "20px" }}>
              <Card.Body>
                <Card.Title className='text-center'><h1 className='h1-1'>40%</h1></Card.Title>

                <Card.Text className='text-center'>
                  <p className='font-2'> fewer issues across dev  <br /> lifecycle</p>
                </Card.Text>

              </Card.Body>
            </Card>



          </div>
          <div className="col-md-3">
            <Card style={{ width: '18rem', backgroundColor: "#f9f9f9", borderColor: "white", borderRadius: "20px" }}>
              <Card.Body>
                <Card.Title className='text-center'><h1 className='h1-1'>5h</h1></Card.Title>

                <Card.Text className='text-center'>
                  <p className='font-2'> productivity gain per week per developer</p>
                </Card.Text>

              </Card.Body>
            </Card>



          </div>
          <div className="col-md-3">
            <Card style={{ width: '18rem', backgroundColor: "#f9f9f9", borderColor: "white", borderRadius: "20px" }}>
              <Card.Body>
                <Card.Title className='text-center'><h1 className='h1-1'>45%</h1></Card.Title>

                <Card.Text className='text-center'>
                  <p className='font-2'>improvement in developer happiness</p>
                </Card.Text>

              </Card.Body>
            </Card>



          </div>
        </div><br />
        <p className='text-center' style={{ fontSize: "20px", color: "#787674" }}>success metrics reported by customers</p><br />
      </div>

    </div>
  )
}

export default Comb
