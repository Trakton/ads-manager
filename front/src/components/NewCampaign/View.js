import React from "react";
import { Input, Card, Button, Image } from "semantic-ui-react";

import "./View.css";

export default ({ a }) => (
  <div className="new-campaign">
    <Card className="new-campaign__card">
      <Card.Content textAlign="left">
        <p>Visits Goal</p>
        <Input
          className="new-campaign__input"
          icon="target"
          iconPosition="left"
          fluid
          placeholder="3.000"
        />
        <p>Cost per Visit</p>
        <Input
          className="new-campaign__input"
          icon="money"
          iconPosition="left"
          fluid
          placeholder="R$ 2,00"
        />
        <Button className="new-campaign__input" primary fluid>
          Create Campaign
        </Button>
      </Card.Content>
    </Card>
  </div>
);
