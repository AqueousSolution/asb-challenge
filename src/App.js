import './App.css';
import DivisionSummary from './components/DivisionSummary';
import MetricContainer from './components/MetricContainer';
import ModuleHistory from './components/ModuleHistory';
import UserTable from './components/UserTable';
import NavigationBar from './components/NavigationBar';


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <MetricContainer/>
     
      <DivisionSummary />
      <ModuleHistory />

      <UserTable />
  

      
    </div>
  );
}

export default App;
