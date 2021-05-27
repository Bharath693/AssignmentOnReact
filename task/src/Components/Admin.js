import React from 'react'
import { Tab, Col, Row, ListGroup } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import MobileDetails from './MobileDetails'

function Admin() {
    return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1" align="center">
      <Row>
        <Col sm={4} style={{paddingLeft:50}}>
          <ListGroup align='center'>
            <ListGroup.Item align='center'>
              <img
                src="https://res.cloudinary.com/drampnn2w/image/upload/v1615827809/Face-Profile-User-Man-Boy-Person-Avatar-512_ervo1s.png"
                alt="loading"
                width="200px"
                height="200px"
              />
              <h5>profileData</h5>
              <p>Admin</p>
            </ListGroup.Item>
            <ListGroup.Item action href="#link1">
              DashBoard
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Profile
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={7}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
             <MobileDetails />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    )
}
export default Admin