import React from 'react';

const Academics = () => {
  const students = [
    { name: 'Abel', rollNo: '201', status:'In Treatment' },
    { name: 'Bob', rollNo: '202', status:'Discharged' },
    { name: 'Smriti', rollNo: '203', status:'Deceased' },
  ];

  return (
    <div style={{ marginLeft: '250px', marginRight: '250px',marginTop:'200px',border:'0px solid #4FB06D',padding:'10px',borderRadius:'10px',boxShadow: '0px 0px 255px 0px rgba(0,0,0,0.6), 0px 45px 26px 0px rgba(0,0,0,0.14)'}}>
      <h2 style={{textAlign:'center'}}>Patient Details</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc'}}>
            <th style={{ padding: '8px', textAlign: 'Center' }}>Name</th>
            <th style={{ padding: '8px', textAlign: 'Center' }}>Admission No</th>
            <th style={{ padding: '8px', textAlign: 'Center' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={{ padding: '8px',textAlign: 'Center' }}>{student.name}</td>
              <td style={{ padding: '8px',textAlign: 'Center' }}>{student.rollNo}</td>
              <td style={{ padding: '8px',textAlign: 'Center' }}>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Academics;
