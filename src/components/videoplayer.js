import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const VideoPlayer = ({ videoSrcURL, videoTitle, ...props }) => (
  // <div className="video">
  //   <iframe
  //     src={videoSrcURL}
  //     title={videoTitle}
  //     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  //     frameBorder="0"
  //     webkitallowfullscreen="true"
  //     mozallowfullscreen="true"
  //     allowFullScreen
  //   />
  // </div>
<Container>
  <Row>
    <Col lg={12}>
  <div className="embed-responsive embed-responsive-16by9" controls>
    <iframe className="embed-responsive-item" width="560" height="315" src={videoSrcURL} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
  </div>
    </Col>
  </Row>
</Container>
)
export default VideoPlayer