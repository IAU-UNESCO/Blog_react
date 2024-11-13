import Posts from "./components/Posts.js";
// import SideContent from "./components/SideContent.js";

function App() {
  return (
    <>
      <header></header>

      <main>
        <section
          className="container-fluid d-flex justify-content-center align-items-center bg-black"
          style={{ height: "30vh" }}
        >
          <div className="row text-center">
            <h1 className="text-white">Blog</h1>
          </div>
        </section>

        <div className="row">
          <div className="col col-12 col-lg-10">
            <Posts />
          </div>
          <div className="col col-lg-2">
            {/* <SideContent /> */}
          </div>
        </div>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
