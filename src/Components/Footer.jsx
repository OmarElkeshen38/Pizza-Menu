import React from 'react';

function Footer() {

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  const isOpen = (hour) >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <>
      <footer className='footer'>
        {isOpen && (
          <div className="order">
            <p>We're open until {closeHour}:00. Come visit us or order online.</p>
            <button className="btn">Order</button>
          </div>
        )}
      </footer>
    </>
  )
}

export default Footer
