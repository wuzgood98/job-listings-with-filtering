import React, { useEffect, useRef, useState } from 'react'
import autoAnimate from '@formkit/auto-animate'

import data from '../../data.json'
import mobileBgHeader from '../assets/bg-header-mobile.svg'
import desktopBgHeader from '../assets/bg-header-desktop.svg'

import JobCard from './JobCard'
import FilterBar from './FilterBar'

const Layout = () => {
  const [jobData, setJobData] = useState(data)
  const [filteredData, setFilteredData] = useState(jobData)
  const [filterItems, setFilterItems] = useState([])
  const parent = useRef(null)

  const findSimilarItems = (array, filterArr) => {
    return array.filter((item) => {
      return filterArr.every((filterElement) => {
        return item.languages.includes(filterElement)
          || item.tools.includes(filterElement)
          || item.level === filterElement
          || item.role === filterElement
      })
    })
  }

  useEffect(() => {
    const temp = findSimilarItems(jobData, filterItems)
    setFilteredData([...temp])

  }, [filterItems])

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])


  return (
    <div className='w-full min-h-screen font-league-spartan bg-light-grayish-cyan-(Background) flex flex-col gap-14'>
      <header className='bg-desaturated-dark-cyan'>
        <h1 aria-hidden="true" className='hidden'>header background</h1>
        <picture>
          <source srcSet={desktopBgHeader} media="(min-width: 768px)" />
          <img src={mobileBgHeader} alt="background header img" className='w-full' />
        </picture>
      </header>

      <div className={`${filterItems.length > 0 && 'relative -top-24'} w-full h-full px-7 mb-14 md:mb-20 transition-all`}>
        {
          filterItems.length > 0 && (
            <FilterBar
              items={filterItems}
              setFilterItems={setFilterItems}
              filterItems={filterItems}
            />
          )
        }

        <main ref={parent} className='w-full max-w-[72rem] flex flex-col gap-14 lg:gap-7 xl:mx-auto'>
          {
            filteredData.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                setFilterItems={setFilterItems}
                filterItems={filterItems}
              />
            )
            )
          }
        </main>
      </div>
    </div>
  )
}

export default Layout