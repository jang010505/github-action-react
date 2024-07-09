import './App.css';
import { useState } from "react";
import { fetchDepts } from './api/dept/DeptAPI';

function App() {
  const [depts, setDept] = useState([]);

  const handleClick = async() => {
    const data = await fetchDepts();
    setDept(data);
  }

  return (
    <div className="App">
      <div>
        <button onClick={handleClick}>Fetch Depts</button>
      </div>
      <div>
        {depts? 
          (depts.map((dept) => (
            <li key={dept.deptno}>
              {dept.deptno}, {dept.dname}, {dept.loc}
            </li>
          ))
        ):
        (
          <>
            No Data
          </>
        )}
      </div>

    </div>
  );
}

export default App;
