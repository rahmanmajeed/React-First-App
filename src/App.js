import './App.css';
import Clock from './components/Clock';
import ClockFunc from './components/FuncComponent';

function App() {
    return (
        <div className="App">
            <Clock locale="bn-BD" />
            <div>
                <ClockFunc locale="en-GB" />
            </div>
        </div>
    );
}

export default App;
