import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "../redux/store";
import Container from "./Container/Container";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import UserRoutes from "../UserRoutes";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <NavBar />
          <UserRoutes />
          <Footer />
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
