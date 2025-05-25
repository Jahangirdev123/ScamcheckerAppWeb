import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState(null);

  const checkScam = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/weburl/${domain}`);
      setResult(res.data);
    } catch (err) {
      console.log(err)
      setResult({ error: 'Something went wrong'+err});
    }
  };

  return (
    <div className="App">
      <h1>Scam Checker</h1>
      <input value={domain} onChange={e => setDomain(e.target.value)} placeholder="Enter website URL" />
      <button onClick={checkScam}>Check</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default App;
