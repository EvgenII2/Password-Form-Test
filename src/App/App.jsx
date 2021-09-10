import "./App.css";
import { mailgunAgent } from "../utils/MailgunAgent";
import PasswordForm from "../PasswordForm/PasswordForm";

function App() {
  return (
    <div className="App">
      <PasswordForm />
    </div>
  );
}

export default App;
