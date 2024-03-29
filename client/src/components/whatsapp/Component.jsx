import React from 'react'

function Component() {
  return (
    <a href={`https://api.whatsapp.com/send?phone=%2B917079669395&text=Hi%2C%20I%20have%20a%20query%20regarding%20skillwallah%20community.`}
     target='_blank' className="fixed hover:scale-[1.03] transition-all ease-in-out duration-300 z-[999] font-semibold text-white sm:bottom-4 sm:right-10 bottom-4 right-4 bg-[#1B88F4] sm:py-4 sm:px-5 px-3 py-2 rounded-xl cursor-pointer flex items-center gap-2">
      <i className="fa-regular fa-message text-xl translate-y-[0.1rem]"></i>
      <p className="block sm:text-base text-xs">Chat now</p>
    </a>
  )
}

export default Component
