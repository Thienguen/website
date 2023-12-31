import clsx from 'clsx'

type ProgressBarProps = {
  steps       : string[]
  currentStep : number
  isFullWidth?: boolean
}

const ProgressBar = ({ steps, currentStep, isFullWidth }: ProgressBarProps) => {
  return (
    <div className={clsx(isFullWidth ? 'w-full' : 'max-w-4xl', 'mx-auto')}>
      {/* Progress Bar section */}
      <div className="flex h-[2px] items-center justify-between bg-gradient-to-b from-slate-300 to-gray-300">
        {/* Dot at the beginning */}
        <div
          className={`flex h-3 w-4 items-center justify-center rounded-full shadow ${
            currentStep > 0 || currentStep === 0
              ? 'animate-pulse2 animate-pulse4 bg-black dark:bg-[#D9DADB]' // current step active dot
              : 'bg-gradient-to-b from-gray-600 to-gray-400 dark:bg-gray-800' // Inactive
          }`}
        />

        {/* The current step progress */}
        <div
          className={`flex h-[2px] w-1/3 items-center 
          ${
            currentStep > 0
              ? 'bg-black dark:bg-[#D9DADB]' // Active
              : 'bg-gradient-to-b from-gray-600 to-gray-400 dark:bg-gray-800' // Inactive
          }`}
        />

        {/* Intermediate steps with dots */}
        {steps.slice(0, steps.length - 2).map((_, index) => {
          // console.log(step)
          return (
            <div
              key={index}
              className={`relative flex h-[2px] w-1/3 items-center justify-between ${
                currentStep > index + 1
                  ? 'bg-black dark:bg-[#D9DADB]' // Active
                  : 'bg-gradient-to-b from-gray-600 to-gray-400 dark:bg-gray-800' // Inactive
              }`}
            >
              {/* The dot color */}
              <div
                className={`${
                  currentStep > index || currentStep === 0
                    ? 'animate-pulse2 animate-pulse4 bg-black dark:bg-[#D9DADB]' // current step active dot
                    : 'bg-gradient-to-b from-gray-600 to-gray-400 dark:bg-gray-800' // Inactive
                } -ml-2 flex h-3 w-3 items-center justify-center rounded-full shadow `}
              />
            </div>
          )
        })}

        {/* The last step */}
        <div
          className={`relative flex h-[2px] w-1/3 items-center ${
            currentStep >= steps.length 
              ? 'bg-black dark:bg-[#D9DADB]' // Active
              : 'justify-between bg-gradient-to-b from-gray-600 to-gray-400 dark:bg-gray-800' // Inactive with space for dot
          }`}
        >
          {/* Dot before the last step */}
          <div
            className={`flex h-3 w-3 items-center justify-center rounded-full shadow ${
              currentStep >= steps.length - 1 || currentStep === 0
                ? 'animate-pulse2 animate-pulse4 bg-black dark:bg-[#D9DADB]' // current step active dot
                : 'bg-gradient-to-b from-gray-600 to-gray-400 dark:bg-gray-800' // Inactive
            }`}
          />
        </div>

        {/* Dot at the end */}
        <div
          className={`flex h-3 w-4 items-center justify-center rounded-full shadow ${
            currentStep === steps.length || currentStep === 0
              ? 'animate-pulse2 animate-pulse4 bg-black dark:bg-[#D9DADB]' // current step active dot
              : 'bg-gradient-to-b from-gray-600 to-gray-400 dark:bg-gray-800' // Inactive
          }`}
        />
      </div>

      {/* Text labels section */}
      <div className={`grid auto-cols-fr grid-flow-col font-dosis text-sm`}>
        {steps.map((step, index) => (
          <p
            key={index}
            className={`pt-1 text-center font-bold ${
              currentStep - 1 >= index
                ? 'text-slate-900 dark:text-[#D9DADB]' // Active
                : 'text-gray-600 opacity-70 dark:text-gray-600' // Inactive
            }`}
          >
            {step}
          </p>
        ))}
      </div>
    </div>
  )
}

export default ProgressBar
