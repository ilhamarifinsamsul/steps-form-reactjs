function App() {
  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <p className="message">Step: Dream</p>
      <div className="buttons">
        <button style={{ backgroundColor: "#526D82", color: "white" }}>
          Previous
        </button>
        <button style={{ backgroundColor: "#526D82", color: "white" }}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
