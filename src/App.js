import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  const pageSize = 20;
  const apiKey = process.env.REACT_APP_NEWS_API1;
  const [progress, setProgress] = useState(0);
  return (
    <>
      <div>
        <Router>
          <LoadingBar height={3} color="#f11946" progress={progress} />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  key={"general"}
                  pageSize={pageSize}
                  category="general"
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  key={"business"}
                  pageSize={pageSize}
                  category="business"
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  key={"entertainment"}
                  pageSize={pageSize}
                  category="entertainment"
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  key={"health"}
                  pageSize={pageSize}
                  category="health"
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  key={"science"}
                  pageSize={pageSize}
                  category="science"
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  key={"sports"}
                  pageSize={pageSize}
                  category="sports"
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  key={"technology"}
                  pageSize={pageSize}
                  category="technology"
                  apiKey={apiKey}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
