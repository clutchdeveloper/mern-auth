import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App() {
  return (
    <>
      <Header />
      <ToastContainer autoClose={3000} hideProgressBar={true} />
      <Container className="my-2">
        <Outlet />
      </Container>
    </>
  );
}
