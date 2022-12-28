const element = (
  <div className="bg-container">
    <div className="main-container">
      <h1 className="heading">Congratulations</h1>
      <div className="card-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="image"
        ></img>
        <h1 className="name">Kiran V</h1>
        <p className="paragraph">
          Vishnu Institute Of Computer Education And Technology
          <br />
          Bhimavaram
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="image"
        ></img>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
