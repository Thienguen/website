import { BsGit } from 'react-icons/bs'
import { FaNpm, FaPython } from 'react-icons/fa'
import { RiCss3Line, RiHtml5Line, RiJavascriptLine } from 'react-icons/ri'
import { SiPrisma, SiReact, SiRedux, SiTailwindcss, SiMongodb } from 'react-icons/si'
import { TbBrandCpp, TbBrandKotlin, TbBrandTypescript, TbBrandNextjs } from 'react-icons/tb'
import { VscTerminalBash } from 'react-icons/vsc'

const SkillIssues = () => {
  const icons = [
    <BsGit />,
    <FaNpm />,
    <FaPython />,
    <RiCss3Line />,
    <RiHtml5Line />,
    <RiJavascriptLine />,
    <TbBrandCpp />,
    <TbBrandKotlin />,
    <TbBrandTypescript />,
    <VscTerminalBash />,
    <SiPrisma />,
    <SiReact />,
    <SiRedux />,
    <SiTailwindcss />,
    <TbBrandNextjs />,
    <SiMongodb />,
  ]

  return (
    <>
      <div className="pt-3">
        <div className="flex  translate-y-[-1rem] animate-fade-in flex-wrap items-center justify-center text-3xl opacity-0 [--animation-delay:600ms]">
          {icons.map((icon, index) => (
            <div key={index} className="m-2">
              {icon}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SkillIssues
