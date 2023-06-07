import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "../index.css";

export default function App() {
  return (
    <div className="grid container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
