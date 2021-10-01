import { BrowserRouter, Route } from "react-router-dom";
import { UserPage } from "./components/UserPage/UserPage";

export default function Root() {
  return (
    <BrowserRouter>
      <Route path="/users" component={UserPage} />
    </BrowserRouter>
  );
}
