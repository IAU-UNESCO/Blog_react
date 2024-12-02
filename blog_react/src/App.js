import Posts from "./components/Posts.js";
import SideContent from "./components/SideContent.js";
import InsertImgTxt from "./components/InsertImgTxt.js";

function App() {
  return (
    <>
      {/* Header is empty since we'll be using an already existing one */}
      <header></header>

      <main>
        {/* Page title */}
        <section
          className="d-flex justify-content-center align-items-center bg-black"
          style={{ height: "30vh" }}
        >
          <h1 className="text-white">Blog</h1>
        </section>

        {/* Repeated multiple components for testing purposes */}
        <div className="container mt-3">
          <div className="row">
            <div className="col col-12 col-lg-8">
              <Posts />
            </div>
            <div className="col col-lg-4">
              <SideContent />
            </div>
          </div>
          <InsertImgTxt />
        </div>
      </main>

      {/* Footer is empty since we'll be using an already existing one */}
      <footer></footer>
    </>
  );
}

export default App;
