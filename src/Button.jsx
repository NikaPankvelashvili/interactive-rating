import React from 'react'

function Button({ number, selectedRating, setSelectedRating }) {
  return (
    <div onClick={() => setSelectedRating(number)}
      className={`${selectedRating === number ? "bg-medium-grey text-white"
        : "bg-star-bg text-medium-grey hover:bg-orange hover:text-white"} 
      py-14 px-22 text-base cursor-pointer rounded-full font-sans select-none  ease-in duration-200`}>
      {number}
    </div>
  )
}

export default Button