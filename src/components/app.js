import React from 'react';
import Table from './table';

const students = [
    {
        student: 'John',
        course: 'Drawing',
        grade: 90
    },
    {
        student: 'Alice',
        course: 'English',
        grade: 89
    },
    {
        student: 'Charlie',
        course: 'Math',
        grade: 100
    },
];

const App = () => {
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}

export default App;