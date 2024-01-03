import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";
import Faq from "./Help/Faq";

import Contact, { contactAction } from "./Help/Contact";
import Notfound from "./pages/Notfound";
import CarrerLayout from "./layout/CarrerLayout";
import Careers, { careersLoader } from "./pages/Careers";
import CareerDetails, { careerDetailsLoader } from "./pages/CareerDetails";
import CareerError from "./pages/CareerError";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} /> //help/faq
          <Route
            path="contact"
            element={<Contact />}
            action={contactAction}
          />{" "}
          //help/contact
        </Route>

        <Route
          path="careers"
          element={<CarrerLayout />}
          errorElement={<CareerError />}
        >
          <Route index element={<Careers />} loader={careersLoader} />
          <Route
            path=":id"
            element={<CareerDetails />}
            loader={careerDetailsLoader}
          />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
