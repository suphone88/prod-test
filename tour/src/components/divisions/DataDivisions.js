import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDivision } from "../actions";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "antd";
const { Meta } = Card;

const DataDivisions = () => {
  const divisions = useSelector((state) => state.dataDivision);
  const dispatch = useDispatch();
  //console.log(divisions);

  useEffect(() => {
    dispatch(fetchDivision(divisions));
  }, [divisions]);

  return (
    <div>
      <h2> Tours Division Data !!</h2>
      <div className="site-card-border-less-wrapper">
        <Row gutter={16}>
          {divisions.divisions &&
            divisions.divisions.map((data) => (
              <Col md={4} lg={6} key={data._id}>
                <Link to={`division/${data._id}`}>
                  <Card
                    className="card"
                    hoverable
                    cover={
                      <img
                        src={`http://localhost:3001/uploads/${data.image}`}
                        className="img"
                        alt={data.image}
                      />
                    }
                  >
                    <Meta title={data.division} />
                  </Card>
                </Link>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default DataDivisions;
