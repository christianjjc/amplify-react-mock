import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";

Amplify.configure(awsExports);

function App() {
  const formFields = {
    confirmVerifyUser: {
      confirmation_code: {
        label: "New Label",
        placeholder: "Ingresa tu código de confirmación:",
        isRequired: false,
      },
    },
  };

  const components = {
    VerifyUser: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },

    ConfirmVerifyUser: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },
  };

  return (
    <>
      <Authenticator
        variation="modal"
        formFields={formFields}
        components={components}
        hideSignUp={false}>
        {({ signOut, user }) => {
          return (
            <>
              <header className="mt-0">
                <Header></Header>
              </header>
              <main>
                <Routes>
                  <Route path="/" element={<MainPage />} />
                  {/* <Route path="/productos-mant" element={<ProductosMant />} /> */}
                </Routes>
              </main>
              <footer></footer>
            </>
          );
        }}
      </Authenticator>
    </>
  );
}

export default App;

{
  /* <Authenticator formFields={formFields} components={components} hideSignUp={false}>
{({ signOut, user }) => (
  <main>
    <h1>Hello {user.username}</h1>
    <button onClick={signOut}>Sign out</button>
  </main>
)}
</Authenticator> */
}
