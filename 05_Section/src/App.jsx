import React, { useEffect, useState } from 'react';
import "./App.css";
import Card from './Components/Card';
import QueueForm from './Components/QueueForm';

function App() {
  const [queue, setQueue] = useState([])

  const addQueue=(customer)=>{
    console.log(customer)
    setQueue([...queue,{...customer,id:Date.now(),status:"waiting"}])
    console.log(queue)
  }
  const updateQueueStatus = (id, newStatus) => {
  setQueue(
    queue.map((customer) => {
      return customer.id === id
        ? { ...customer, status: newStatus }
        : customer;
    })
  );
};

  const removeQueue=(id)=>{
   setQueue(queue.filter(customer=>customer.id!==id))
  }
  

  useEffect(() => {
  console.log("Queue updated:", queue);
}, [queue]);

  return (
    <>
      <header>
        <h1>Queue Management System</h1>
        <p>Manage your customers efficiently</p>
      </header>

      <main className='main'>
        <QueueForm onAdd={addQueue}/>

        <div className='list'>
          <h3>List of Enquiries</h3>
          {/* You can render enquiry list here */}
          <Card 
          queue={queue}
          onUpdateStatus={updateQueueStatus}
          onRemove={removeQueue}
          />
        </div>
      </main>
    </>
  );
}

export default App;
