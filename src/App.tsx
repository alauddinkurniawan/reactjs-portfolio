import ClickSpark from "./components/ClickSpark";

function App() {

  return (
    <div>
      <ClickSpark
        defaultSparkColor="#fff"
        alternateSparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
        thresholdY={300}
      />
    </div>
  );
}

export default App;
