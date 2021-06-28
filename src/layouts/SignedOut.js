import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut({ signIn }) {
  return (
    <div>
      <Menu.Item>
        <Button onClick={signIn} color="orange">
          <i class="far fa-user"> Sign In</i>
        </Button>
        <Button color="orange" style={{ marginLeft: "" }}>
        <i class="far fa-user"> Register</i>
        </Button>
      </Menu.Item>
    </div>
  );
}
