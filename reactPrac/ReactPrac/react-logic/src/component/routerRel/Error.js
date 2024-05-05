import MainNavigation from "./MainNavigation";
function ErrorPage() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-12"><MainNavigation />
        <main>
          <h1>An error occurred!</h1>
          <p>Could not find this page!</p>
        </main></div>
        </div>
      </div>
    );
  }
  
  export default ErrorPage;