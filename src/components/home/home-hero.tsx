'use client'

import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import { TbCodeDots } from 'react-icons/tb'
import KBarStart from '@/components/home/kbar-start'
import Profile from '@/components/home/profile'
import { Tooltip } from '../common/Tooltip'
import Presence from './lanyard/presence'

const HomeHero: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [showPresence, setShowPresence] = useState(false)

  if (theme === undefined) {
    console.log('theme is undefined')
    setTheme('dark')
  }

  return (
    <>
      <div className=" flex h-full w-full flex-col items-center justify-center pb-10 pt-6 sm:pb-16">
        <div className="flex flex-col items-center justify-center px-10">
          {' '}
          <Profile />
          {/* Reduced space-y-3 to space-y-2 */}
          <p className="text-center font-pixeloidMono text-2xl font-light text-black opacity-75 dark:text-white">
            {`Chào, I'm`}
          </p>
          {/* Hero Title */}
          <h2 className="shadow-effect cursor-default whitespace-nowrap pb-1 text-center font-metropolis text-4xl font-bold text-slate-800 dark:text-slate-200 lg:text-6xl">
            {`Thien Nguyen`}
          </h2>
          <KBarStart />
        </div>
        <Tooltip text="I'm curently doing">
          <div onClick={() => setShowPresence(!showPresence)}>
            <TbCodeDots className="h-10 animate-pulse cursor-pointer text-3xl text-white dark:text-black dark:invert" />
          </div>
        </Tooltip>
        {showPresence && <Presence />}
      </div>
    </>
  )
}

export default HomeHero
