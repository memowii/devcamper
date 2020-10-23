import React from "react";
import { Col, Card, CardBody } from "reactstrap";

import { InnerLayout } from "./InnerLayout";

export const InnerLayoutWithCard = ({ children, colMd, cardClass }) => {
  const _colMd = colMd ? colMd : "8";
  const _cardClass = cardClass ? cardClass : "py-2 px-4";

  return (
    <InnerLayout>
      <Col md={_colMd} className="m-auto">
        <Card color="white" className={_cardClass}>
          <CardBody>{children}</CardBody>
        </Card>
      </Col>
    </InnerLayout>
  );
};
