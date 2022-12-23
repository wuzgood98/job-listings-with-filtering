import React from 'react'

const JobCard = ({ job, setFilterItems, filterItems }) => {

  const addItemsToFilter = (item) => {
    const itemExists = [...filterItems].includes(item)
    if (itemExists) return;

    setFilterItems((prevData) => {
      return [...prevData, item]
    })
  }

  const { company, logo, new: isNew, featured, position, role, level, postedAt, contract, location, languages, tools } = job

  return (
    <div className={`animate-fade-in-and-slide-up relative w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6 bg-white rounded-md shadow-xl shadow-desaturated-dark-cyan/20 h-max px-5 pb-5 pt-10 sm:pt-16 lg:pt-9 lg:pb-9 lg:px-9 ${isNew && featured && 'border-l-[6px] border-l-desaturated-dark-cyan'}`}>
      <div className='flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-7 text-dark-grayish-cyan border-b border-gray-300 pb-3 md:pb-0 md:border-b-0'>
        <img src={logo} alt={`${company} logo`} className='absolute left-4 -top-8 w-16 sm:w-20 lg:relative lg:w-28 lg:top-0 lg:left-0' />
        <div className='flex flex-col gap-3 lg:gap-2'>
          <div className='flex items-center gap-6 flex-wrap'>
            <p className='text-semi-base text-desaturated-dark-cyan font-bold lg:text-lg'>{company}</p>
            <div className='flex gap-2'>
              {isNew && (
                <div className='bg-desaturated-dark-cyan rounded-full pt-1 px-2 h-[25px] w-max flex items-center justify-center'>
                  <p className='text-base uppercase font-semibold text-white'>new!</p>
                </div>)}
              {featured && (
                <div className='bg-very-dark-grayish-cyan rounded-full pt-1 px-2 h-[25px] w-max flex items-center justify-center'>
                  <p className='text-base uppercase font-semibold text-white'>featured</p>
                </div>)}
            </div>
          </div>
          <p className='font-bold text-very-dark-grayish-cyan hover:text-desaturated-dark-cyan transition-colors cursor-pointer lg:text-2xl'>{position}</p>

          <div className='flex items-center gap-2 text-dark-grayish-cyan sm:flex-wrap lg:text-lg'>
            <p>{postedAt} </p>
            <span >&#8226;</span>
            <p>{contract} </p>
            <span >&#8226;</span>
            <p>{location}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-wrap gap-4">
        <button onClick={() => addItemsToFilter(role)} className='h-[28px] lg:h-[40px] w-max px-3 text-base md:text-lg bg-light-grayish-cyan-(Background) text-desaturated-dark-cyan font-bold pt-1 grid place-content-center rounded-sm hover:bg-desaturated-dark-cyan hover:text-white transition-colors'>
          {role}
        </button>
        <button onClick={() => addItemsToFilter(level)} className='h-[28px] lg:h-[40px] w-max px-3 text-base lg:text-lg bg-light-grayish-cyan-(Background) text-desaturated-dark-cyan font-bold pt-1 grid place-content-center rounded-sm hover:bg-desaturated-dark-cyan hover:text-white transition-colors'>
          {level}
        </button>

        {
          languages.map((language, index) => (
            <button onClick={() => addItemsToFilter(language)} key={index} className='h-[28px] lg:h-[40px] w-max px-3 text-base lg:text-lg bg-light-grayish-cyan-(Background) text-desaturated-dark-cyan font-bold pt-1 grid place-content-center rounded-sm hover:bg-desaturated-dark-cyan hover:text-white transition-colors'>
              {language}
            </button>)
          )
        }

        {
          tools.map((tool, index) => (
            <button onClick={() => addItemsToFilter(tool)} key={index} className='h-[28px] lg:h-[40px] w-max px-3 text-base lg:text-lg bg-light-grayish-cyan-(Background) text-desaturated-dark-cyan font-bold pt-1 grid place-content-center rounded-sm hover:bg-desaturated-dark-cyan hover:text-white transition-colors'>
              {tool}
            </button>)
          )
        }

      </div>
    </div>
  )
}

export default JobCard