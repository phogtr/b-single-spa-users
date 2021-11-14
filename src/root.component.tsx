import { BrowserRouter, Route } from "react-router-dom";
import { UserPage } from "./components/UserPage/UserPage";

import "antd/dist/antd.css";

export default function Root() {
  return (
    <BrowserRouter>
      <Route path="/users" component={UserPage} />
    </BrowserRouter>
  );
}
