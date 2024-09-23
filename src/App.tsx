import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <Button color="primary" onClick={() => console.log("Clicked")}>MyButton</Button>
    </div>
  );
}

export default App;