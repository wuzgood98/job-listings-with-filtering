import React, { useEffect, useRef } from 'react'
import iconRemove from '../assets/icon-remove.svg'
import autoAnimate from '@formkit/auto-animate'

const FilterBar = ({ items, setFilterItems, filterItems }) => {
  const parent = useRef(null)

  const removeItem = (itemIndex) => {
    setFilterItems((prevData) => {
      return prevData.filter((_, index) => index !== itemIndex)
    })
  }

  const removeAllItems = () => setFilterItems([])

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    <div className={`w-full flex items-center justify-between max-w-[72rem] bg-white shadow-xl shadow-desaturated-dark-cyan/20 rounded-md p-5 mb-16 lg:mb-10 xl:mx-auto ${filterItems.length ? 'animate-fade-in' : 'animate-fade-out'}`}>
      <div ref={parent} className='flex flex-wrap gap-4 w-full'>
        {
          items.length > 0 && items.map((item, index) => (
            <p key={index} className='h-[36px] w-max flex gap-3 items-center bg-light-grayish-cyan-(Background) cursor-default'>
              <span className='text-desaturated-dark-cyan pl-2 py-1 capitalize font-semibold text-base md:text-lg'>{item}</span>
              <button onClick={() => removeItem(index)} className='h-full w-[36px] bg-desaturated-dark-cyan grid place-content-center rounded-tr-md rounded-br-md hover:bg-very-dark-grayish-cyan transition-colors'>
                <img src={iconRemove} alt="remove icon" />
              </button>
            </p>
          ))
        }
      </div>
      <button onClick={removeAllItems} className='capitalize text-dark-grayish-cyan font-bold hover:text-desaturated-dark-cyan transition-colors hover:underline underline-offset-2 md:text-lg'>clear</button>
    </div>
  )
}

export default FilterBar