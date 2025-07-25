import { useState, useEffect } from 'react'; 

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [earnedToday, setEarnedToday] = useState(0);     
  const [activeTab, setActiveTab] = useState('Tasks'); 
  const [isJaraMode, setIsJaraMode] = useState(false);

 // 🔥 Fetch real tasks from your LIVE backend
useEffect(() => { 
   fetch('https://earnify-backend-23.onrender.com/api/tasks ') 
     .then(res => res.json())
     .then(data => setTasks(data.tasks))
     .catch(err => console.error('Error fetching tasks:', err)); }, []);

 // 💵 Animate ₦Earned Today counter 
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
 return () => clearInterval(interval); 
}, []);

 return (
 <div className="min-h-screen bg-white text-gray-800 font-sans">
   {/* Header */}
   <header style={{ backgroundColor: '#007A5A' }} className="text-white p-4 flex justify-between items-center shadow-md">
     <div className="flex items-center space-x-2">
       <span className="relative"> 
         <span className="absolute -top-2 -right-1 text-yellow-300 text-xs">&#9873;
         </span> <span className="font-bold text-xl">earnify</span> 
     </span> 
   </div> 
<button className="bg-white text-green-700 px-3 py-1 rounded-full text-sm font-semibold shadow-md hover:bg-gray-100 transition"> 
Login via WhatsApp
 </button>
 </header>

 {/* Jara Mode Banner */}
 <div 
   onClick={() => setIsJaraMode(!isJaraMode)} 
   style={{ backgroundColor: isJaraMode ? '#E32522' : '#FCD20C' }} 
   className={`text-center py-2 text-sm font-bold cursor-pointer`} 
> 
   {isJaraMode ? '🔥 JARA MODE ACTIVATED 🔥' : '🎉 Activate Jara Mode for extra rewards!'} 
</div>

 {/* Tabs */} 
<nav className="flex justify-around border-b border-gray-200 sticky top-14 z-10 bg-white"> 
  {['Tasks', 'Marketplace', 'Learning'].map((tab) => ( 
    <button 
      key={tab} 
      onClick={() => setActiveTab(tab)} 
        className={`py-3 px-2 text-center flex-1 font-medium ${ 
          activeTab === tab 
          ? 'border-b-2 border-[#007A5A] text-[#007A5A]' 
          : 'text-gray-500' }`} > {tab} </button> ))} </nav> {/* Main Content */} <main className="p-4"> {/* Earned Today Counter */} <div className="mb-6 text-center"> <h2 className="text-lg font-semibold mb-1 text-gray-600">₦Earned Today</h2> <div className="inline-block bg-gradient-to-r from-green-400 to-teal-500 text-white text-3xl md:text-4xl font-extrabold py-3 px-6 rounded-full shadow-lg animate-pulse"> ₦{earnedToday.toLocaleString()} </div> </div> {/* Tab Content */} {activeTab === 'Tasks' && ( <div className="space-y-4"> <h3 className="text-xl font-bold text-gray-800">Daily Tasks</h3> {tasks.length > 0 ? ( <div className="grid grid-cols-1 gap-4"> {tasks.map((task) => ( <div key={task.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition" > <div className="flex justify-between items-center"> <h4 className="font-medium">{task.title}</h4> <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold"> {task.price} </span> </div> <button className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-medium transition"> Start Task </button> </div> ))} </div> ) : ( <p className="text-center text-gray-500">Loading tasks...</p> )} </div> )} {activeTab === 'Marketplace' && ( <div className="space-y-4"> <h3 className="text-xl font-bold text-gray-800">Skill Shops & Services</h3> <p className="text-center text-gray-500">Coming soon...</p> </div> )} {activeTab === 'Learning' && ( <div className="space-y-4"> <h3 className="text-xl font-bold text-gray-800">Affordable Tech & Marketing Courses</h3> <p className="text-center text-gray-500">Coming soon...</p> </div> )} </main> {/* User Dashboard Section */} <section className="bg-gray-50 py-6 px-4"> <h3 className="text-xl font-bold mb-4 text-gray-800">Your Dashboard</h3> <div className="grid grid-cols-3 gap-4"> <div className="bg-white p-3 rounded-lg shadow text-center"> <div className="text-2xl font-bold text-green-600">₦32K</div> <div className="text-sm text-gray-500">Total Earnings</div> </div> <div className="bg-white p-3 rounded-lg shadow text-center"> <div className="text-2xl font-bold text-blue-600">3</div> <div className="text-sm text-gray-500">Certificates</div> </div> <div className="bg-white p-3 rounded-lg shadow text-center"> <div className="text-2xl font-bold text-purple-600">AI Coach</div> <div className="text-sm text-gray-500">Ready</div> </div> </div> </section> {/* Footer */} <footer className="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-500"> <p>© 2025 earnify • Empowering hustlers across Nigeria • Lagos | Abuja | Port Harcourt</p> </footer> {/* Floating Action Button */} <button style={{ backgroundColor: '#007A5A' }} className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white text-xl font-bold z-20 transition-transform hover:scale-110" > 💬 </button> </div> ); }