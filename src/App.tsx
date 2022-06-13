import { Editor } from "./components/Editor";
import Logo from "./images/logo512.png";

function App() {
  return (
    <div className="wrapper">
      <a href="/">
        <img src={Logo} alt="" width={50} height={50} />
      </a>

      <Editor />
    </div>
  );
}

export default App;
