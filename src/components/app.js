import React from 'react';
import Table from './table'

const students = [
    {
        student: "Bruce Wayne",
        course: "Criminal Justice",
        grade: 94
    },
    {
        student: "Clark Kent",
        course: "Being Lame",
        grade: 100
    },
    {
        student: "Peter Parker",
        course: "Biology",
        grade: 99
    }
];

export default (props) => { 
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}

