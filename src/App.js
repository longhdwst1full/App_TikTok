import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { publicRoutes } from "~/routes";
import { DefaultLayout } from "~/components/Layout";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Home />}></Route>
          <Route path="/following" element={<Following />}></Route> */}

          {publicRoutes.map((route, index) => {

            const Page = route.component;

            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout
            }
            else if (route.layout === null) {
              Layout = Fragment
            }

            return (
              <Route path={route.path}
                key={index}
                element={
                  <Layout>
                    <Page />
                  </Layout>}
              />);
          })}
        </Routes>

      </div>
    </Router>
  );
}

export default App;
