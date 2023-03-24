import React from 'react'

export const Card = ({title}) => {
  return <div className="card">
    <div className="card-header"><h4>{title}</h4></div>
    <div className="card-body">
      <h1 className="card-title">
        $0
        <small className="text-muted">/ mo</small>
      </h1>
      <ul>
        <li>10 users included</li>
        <li>2 GB of storage</li>
        <li>Email support</li>
        <li>Help center access</li>
      </ul>
      <button type="button">Sign up for free</button>
    </div>
  </div>
}