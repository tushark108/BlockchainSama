import React from 'react'

export default function SubscribePage() {
  return (
    <div className='subscribeMain'>
      <div className='subscribeTitle'>
        <label>Subscribe to our newsletter</label>
      </div>
      <div className='subscribeUserDetails'>
        <input placeholder='First name'></input>
        <input placeholder='Email Address'></input>
        <button>Subscribe Now</button>
      </div>
    </div>
  )
}
