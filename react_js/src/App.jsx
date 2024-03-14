import { useState } from "react";
import "./App.css";
import TabButton from "./components/TabButton";
import data from "./data";

function App() {
    const [selectedTopic, setSelectedTopic] = useState('components');
    const handleSelect = (param) => {
        setSelectedTopic(param);
    };
    return (
        <div className="App">
            <menu>
                <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect("components")}>
                    Components
                </TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect("jsx")}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect("props")}>
                    Props
                </TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect("state")}>
                    State
                </TabButton>
            </menu>

            {/* teacher's example */}

            {/* {!selectedTopic ? <p>Please select a topic</p> : null}
            {selectedTopic ? (
                <div className="tab-content">
                    <h3>{data[selectedTopic].title}</h3>
                    <p>{data[selectedTopic].desc}</p>
                    <pre>
                        <code>{data[selectedTopic].code}</code>
                    </pre>
                </div>
            ) : null} */}

            {!selectedTopic ? (
                <p>Please select a topic</p>
            ) : (
                <div className="tab-content">
                    <h3>{data[selectedTopic].title}</h3>
                    <p>{data[selectedTopic].desc}</p>
                    <pre>
                        <code>{data[selectedTopic].code}</code>
                    </pre>
                </div>
            )}
        </div>
    );
}

export default App;
