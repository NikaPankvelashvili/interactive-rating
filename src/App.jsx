import { useState } from 'react'
import Star from './icons/icon-star.svg'
import Button from './Button'
import ThankYouIcon from './icons/illustration-thank-you.svg'

function App() {
  const [selectedRating, setSelectedRating] = useState(-1);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className='bg-very-dark-blue h-screen w-screen flex items-center justify-center '>
      <div className='w-412 h-416 bg-black-gradient p-8 rounded-32 max-sm:mx-6'>
        {submitted ?
          <div className='flex flex-col items-center select-none'>
            <img className='inline-block mb-44px' src={ThankYouIcon} />
            <p className='text-orange text-base bg-star-bg py-1 px-5 rounded-3xl mb-8'>{`You selected ${selectedRating} out of 5`}</p>
            <h2 className=' text-3xl text-white font-bold mb-2'>Thank You!</h2>
            <p className='text-center text-base text-light-grey font-medium'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
          </div>
          :
          <>
            <div className='bg-star-bg w-12 flex justify-center items-center p-4 rounded-full mb-30'>
              <img className='w-4 h-4 select-none' src={Star} />
            </div>
            <h1 className='font-sans text-2xl font-bold text-white mb-2'>
              How did we do?
            </h1>
            <p className='text-light-grey font-normal text-base mb-8 font-sans'>
              Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </p>
            <div className='flex justify-between mb-8'>
              <Button number={1} selectedRating={selectedRating} setSelectedRating={setSelectedRating} />
              <Button number={2} selectedRating={selectedRating} setSelectedRating={setSelectedRating} />
              <Button number={3} selectedRating={selectedRating} setSelectedRating={setSelectedRating} />
              <Button number={4} selectedRating={selectedRating} setSelectedRating={setSelectedRating} />
              <Button number={5} selectedRating={selectedRating} setSelectedRating={setSelectedRating} />
            </div>
            <button onClick={() => { if (selectedRating != -1) setSubmitted(true) }} className='w-full select-none bg-orange py-11px rounded-3xl text-white font-bold text-base hover:bg-white hover:text-orange ease-in-out duration-300'>SUBMIT</button>
          </>

        }
      </div>
    </div>
  )
}

export default App
