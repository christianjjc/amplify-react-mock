import React, { useEffect } from "react";
import { getCurrentUser, fetchUserAttributes } from "aws-amplify/auth";
import { Link } from "react-router-dom";

const MainPage = ({ children }) => {
  async function handleFetchUserAttributes() {
    try {
      const userAttributes = await fetchUserAttributes();
      console.log(userAttributes);
      document.getElementById("divusuario").innerHTML = userAttributes.given_name;
    } catch (error) {
      console.log(error);
    }
  }

  async function currentAuthenticatedUser() {
    try {
      const { username, userId, signInDetails } = await getCurrentUser();
      console.log(`The username: ${username}`);
      console.log(`The userId: ${userId}`);
      console.log(`The signInDetails: ${signInDetails}`);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleFetchUserAttributes();
  }, []);

  return (
    <>
      <section className="container">
        <h1>Página Princial del Sistema</h1>
        <div className="row d-flex flex-row border border-primary rounded p-3 my-4">
          <div className="col-4">Bienvenido: </div>
          <div id="divusuario" className="col-8"></div>
        </div>
        <div className="row p-3 my-4">
          {/* <Link to={"/productos-mant"}>Ir a la página de Productos</Link> */}
          {children}
        </div>
      </section>
    </>
  );
};

export default MainPage;
