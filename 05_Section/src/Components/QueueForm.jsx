import React, { useState } from "react";
import "../App.css";

function QueueForm({ onAdd }) {
  const [name, setName] = useState("");
  const [services, setServices] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !services.trim()) return;

    onAdd({ name, services });
    setName("");
    setServices("");
  };

  return (
    <div className="form">
      <h2>Enquiry</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="service">Service Type</label>
          <select
            id="service"
            value={services}
            onChange={(e) => setServices(e.target.value)}
          >
            <option value="">Select a service</option>
            <option value="billing">Billing</option>
            <option value="support">Support</option>
            <option value="general">General</option>
          </select>
        </div>
        <button type="submit" disabled={!name.trim() || !services.trim()}>Add Customer</button>
      </form>
    </div>
  );
}

export default QueueForm;
