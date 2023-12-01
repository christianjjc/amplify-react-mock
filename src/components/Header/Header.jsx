import React from "react";
import { signOut } from "aws-amplify/auth";

const Header = () => {
  async function handleSignOut() {
    try {
      await signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return (
    <nav>
      <button onClick={handleSignOut}>Sign out</button>
    </nav>
  );
};

export default Header;
