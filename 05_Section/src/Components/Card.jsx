import React from "react";
import "./Card.css";

function Card({ queue, onUpdateStatus, onRemove }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "waiting":
        return "#f39c12";
      case "serving":
        return "#27ae60";
      case "completed":
        return "#2980b9";
      default:
        return "var(--text)";
    }
  };

  return (
    <div className="card-container">
      {queue.length !== 0 ? (
        queue.map((customer) =>
          customer && customer.name ? (
            <div key={customer.id} className="card">
              <div className="card-info">
                <h4>{customer.name}</h4>
                <p>{customer.services}</p>
                <span
                  className="status-badge"
                  style={{ color: getStatusColor(customer.status) }}
                >
                  {customer.status}
                </span>
              </div>
              <div className="card-actions">
                {customer.status === "waiting" && (
                  <button
                    className={`update-btn waiting`}
                    onClick={() => onUpdateStatus(customer.id, "serving")}
                  >
                    Start Serving
                  </button>
                )}
                {customer.status === "serving" && (
                  <button
                    className={`update-btn serving`}
                    onClick={() => onUpdateStatus(customer.id, "completed")}
                  >
                    Mark Completed
                  </button>
                )}

                <button
                  className="remove-btn"
                  onClick={() => onRemove(customer.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ) : null,
        )
      ) : (
        <p className="empty-text">List is empty</p>
      )}
    </div>
  );
}

export default Card;
