import { useState, useEffect } from "react";

function Table() {
    const students = [
        { name: "Aiden Carter", level: 1, averageScore: 88 },
        { name: "Bella Thompson", level: 2, averageScore: 91 },
        { name: "Caleb Johnson", level: 3, averageScore: 84 },
        { name: "Daisy Nguyen", level: 3, averageScore: 93 },
        { name: "Ethan Wright", level: 1, averageScore: 76 },
        { name: "Fiona Lopez", level: 3, averageScore: 89 },
        { name: "Gavin Smith", level: 2, averageScore: 82 },
        { name: "Hannah Patel", level: 3, averageScore: 95 },
        { name: "Isaac Chen", level: 1, averageScore: 79 },
        { name: "Jasmine Rivera", level: 2, averageScore: 87 }
    ];
    
    const [selectedlevel, setlevel] = useState("all");
    const [student, setstudent] = useState(students);

    useEffect(() => {
        handlelevelchange();
    }, [selectedlevel]);

    function handlelevelchange() {
        if (selectedlevel === "all") {
            setstudent(students);
        } else {
            let levelNum;
            if (selectedlevel === "one") levelNum = 1;
            else if (selectedlevel === "two") levelNum = 2;
            else levelNum = 3;
            
            const filteredStudents = students.filter(ele => ele.level === levelNum);
            setstudent(filteredStudents);
        }
    }

    function handle(e) {
        setlevel(e.target.value);
    }

    return (
        <>
        <style>
            {`:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}`}
        </style>
            <h1>student overview</h1>
            <p>sort by </p>
            <select onChange={handle} value={selectedlevel}>
                <option value="all">all</option>
                <option value="one">One</option>
                <option value="two">Two</option> {/* Fixed typo from "tow" to "two" */}
                <option value="three">Three</option>
            </select>
            <table>
                <thead>
                    <tr>
                        <th style={{width:"40%"}}>name</th>
                        <th style={{width:"20%"}}>level</th>
                        <th style={{width:"40%"}}>average score</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((ob, i) => (
                        <tr key={i}>
                            <td>{ob.name}</td>
                            <td>{ob.level}</td>
                            <td>{ob.averageScore}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Table;