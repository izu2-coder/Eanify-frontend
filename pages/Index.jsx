import React from 'react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [earnedToday, setEarnedToday] = useState(0);
  
  // Fetch tasks from backend
  useEffect(() => {
    fetch('https://earnify-backend-23.onrender.com/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data.tasks))
      .catch(err => console.error(err));
  }, []);
  
  // Animate earnings counter
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < 1234) {
        count += Math.floor(Math.random() * 100);
        setEarnedToday(count);
      } else {
        clearInterval(interval);
        setEarnedToday(1234);
      }
    }, 50);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <header style={{ backgroundColor: '#007A5A', color: 'white', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
        <span className="font-bold text-xl">earnify</span>
        <button className="bg-white text-green-700 px-3 py-1 rounded-full text-sm">Login via WhatsApp</button>
      </header>
      
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h2>₦Earned Today: ₦{earnedToday.toLocaleString()}</h2>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <h3>Daily Tasks</h3>
        {tasks.length > 0 ? (
      <div style={{ display: 'grid', gap: '10px' }}>
        {tasks.map(task => (
        <div key={task.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
          <div>{task.title}</div>
          <div>{task.price}</div>
          <button style={{ background: '#007A5A', color: 'white', padding: '5px 10px', borderRadius: '4px' }}>Start Task</button>
        </div>
      ))}
      </div>
    ) : (
      <p>Loading tasks...</p>
    )}                                                                                                                                                                                                                                                                                        )}
      </div>
    </div>
  );
}
