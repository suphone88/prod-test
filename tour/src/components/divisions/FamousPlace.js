import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFamousPlace } from "../actions";
import { Col, Row, Collapse } from "antd";
const { Panel } = Collapse;

const FamousPlace = () => {
  const { id } = useParams();
  const famousPlace = useSelector((state) => state.dataDivision.famousPlace);
  //console.log(famousPlace);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFamousPlace(id));
  }, [dispatch]);

  if (!famousPlace) {
    return "Loading ...";
  }
  return (
    <div>
      <Row key={famousPlace._id}>
        <Col md={22} lg={24} className="about">
          <h2>Famous Place Details</h2>
          <h3>{famousPlace && famousPlace.name}</h3>
        </Col>
      </Row>
      <Row>
        <Col md={10} lg={12} className="about text">
          <div>
            <h3>About</h3>
            {famousPlace && famousPlace.about}
          </div>
          <div>
            <h3>Transportation</h3>
            {famousPlace && famousPlace.transportation}
          </div>
        </Col>
        <Col md={10} lg={12} className="middle">
          <div>
            <h3> Hotels </h3>
            <Collapse accordion>
              {famousPlace.hotels &&
                famousPlace.hotels.map((hotel) => (
                  <Panel header={hotel.name} key={hotel._id}>
                    <b>Address</b>: {hotel.address} <br />
                    <b>Phone</b> :{hotel.phone}
                  </Panel>
                ))}
            </Collapse>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FamousPlace;
