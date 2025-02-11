import './App.css';
import VtdCompA from './components/VtdCompA';  // Corrected capitalization

function App() {
  return (
    <div className="App">
      <h1> Vũ Đức - K23CNT3 - ReactJS</h1>
      <hr />
      <VtdCompA />  {/* Correctly using the component with uppercase */}
      <VtdCompA vtdName="Vũ Tiến Đức" vtdAddress="Hà Nội" />
    </div>
  );
}

export default App;
