import {
  // AlarmClock,
  // AlertTriangle,
  // BarChart3,
  // CalendarDays,
  // Check,
  // ChevronDown,
  // ChevronLeft,
  // ChevronRight,
  // ChevronsLeft,
  // ChevronsRight,
  // ChevronsUpDown,
  // ChevronUp,
  // Circle,
  // CreditCard,
  // Crop,
  // DollarSign,
  // Download,
  // Edit,
  // Eye,
  // EyeOff,
  // FileTerminal,
  // Filter,
  // Footprints,
  // HardHat,
  // Image,
  // Loader2,
  // LogOut,
  // Menu,
  // MessageSquare,
  // MoreHorizontal,
  // MoreVertical,
  // Package,
  // Plus,
  // PlusCircle,
  // RefreshCw,
  // Search,
  // Settings,
  // Shirt,
  // ShoppingBag,
  // ShoppingCart,
  // Sliders,
  // SlidersHorizontal,
  Moon,
  SunMedium,
  type LucideProps,
} from 'lucide-react'

export const LucideIcons = {
  sun: SunMedium,
  moon: Moon,
  logo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="7" cy="15" r="2" />
      <circle cx="17" cy="15" r="2" />
      <path d="M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1" />
    </svg>
  ),

  nextjs: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
      />
    </svg>
  ),

  github: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" className={`${props.size ?? ''}`} width="20" height="20">
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),

  google: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="google"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 488 512"
      width="20"
      height="20"
      className={`${props.size ?? ''}`}
    >
      <path
        fill="currentColor"
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
      ></path>
    </svg>
  ),

  facebook: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className={`${props.size ?? ''}`}>
      <path
        fill="currentColor"
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      />
    </svg>
  ),
  apple: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
      <path
        fill="currentColor"
        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
      />
    </svg>
  ),

  vscode: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={`${props.size ?? ''}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 3v18l4 -2.5v-13z" />
      <path d="M9.165 13.903l-4.165 3.597l-2 -1l4.333 -4.5m1.735 -1.802l6.932 -7.198v5l-4.795 4.141" />
      <path d="M16 16.5l-11 -10l-2 1l13 13.5" />
    </svg>
  ),

  figma: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={`${props.size ?? ''}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" />
      <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />
    </svg>
  ),

  gitkraken: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 592 512" className={`${props.size ?? ''}`}>
      <path d="M565.7 118.1c-2.3-6.1-9.3-9.2-15.3-6.6-5.7 2.4-8.5 8.9-6.3 14.6 10.9 29 16.9 60.5 16.9 93.3 0 134.6-100.3 245.7-230.2 262.7V358.4c7.9-1.5 15.5-3.6 23-6.2v104c106.7-25.9 185.9-122.1 185.9-236.8 0-91.8-50.8-171.8-125.8-213.3-5.7-3.2-13-.9-15.9 5-2.7 5.5-.6 12.2 4.7 15.1 67.9 37.6 113.9 110 113.9 193.2 0 93.3-57.9 173.1-139.8 205.4v-92.2c14.2-4.5 24.9-17.7 24.9-33.5 0-13.1-6.8-24.4-17.3-30.5 8.3-79.5 44.5-58.6 44.5-83.9V170c0-38-87.9-161.8-129-164.7-2.5-.2-5-.2-7.6 0C251.1 8.3 163.2 132 163.2 170v14.8c0 25.3 36.3 4.3 44.5 83.9-10.6 6.1-17.3 17.4-17.3 30.5 0 15.8 10.6 29 24.8 33.5v92.2c-81.9-32.2-139.8-112-139.8-205.4 0-83.1 46-155.5 113.9-193.2 5.4-3 7.4-9.6 4.7-15.1-2.9-5.9-10.1-8.2-15.9-5-75 41.5-125.8 121.5-125.8 213.3 0 114.7 79.2 210.8 185.9 236.8v-104c7.6 2.5 15.1 4.6 23 6.2v123.7C131.4 465.2 31 354.1 31 219.5c0-32.8 6-64.3 16.9-93.3 2.2-5.8-.6-12.2-6.3-14.6-6-2.6-13 .4-15.3 6.6C14.5 149.7 8 183.8 8 219.5c0 155.1 122.6 281.6 276.3 287.8V361.4c6.8.4 15 .5 23.4 0v145.8C461.4 501.1 584 374.6 584 219.5c0-35.7-6.5-69.8-18.3-101.4zM365.9 275.5c13 0 23.7 10.5 23.7 23.7 0 13.1-10.6 23.7-23.7 23.7-13 0-23.7-10.5-23.7-23.7 0-13.1 10.6-23.7 23.7-23.7zm-139.8 47.3c-13.2 0-23.7-10.7-23.7-23.7s10.5-23.7 23.7-23.7c13.1 0 23.7 10.6 23.7 23.7 0 13-10.5 23.7-23.7 23.7z" />
    </svg>
  ),
}

import { BsGit } from 'react-icons/bs'
import { MdHttp } from 'react-icons/md'
import { FaNpm, FaPython } from 'react-icons/fa'
import { VscTerminalBash }  from 'react-icons/vsc'
import { RiCss3Line, RiHtml5Line, RiJavascriptLine } from 'react-icons/ri'
import { SiMongodb, SiPrisma, SiReact, SiRedux, SiTailwindcss } from 'react-icons/si'
import { TbBrandCpp, TbBrandKotlin, TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb'

type TechToIconType = {
  [key: string]: React.ReactNode
}

/* Usage: timeline, project page */
export const techToIcon: TechToIconType = {
  'Git'        : <BsGit size={20}/>,
  'Npm'        : <FaNpm size={20}/>,
  'Python'     : <FaPython size={20}/>,
  'CSS3'       : <RiCss3Line size={20}/>,
  'HTML5'      : <RiHtml5Line size={20}/>,
  'JavaScript' : <RiJavascriptLine size={20}/>,
  'C++'        : <TbBrandCpp size={20}/>,
  'Kotlin'     : <TbBrandKotlin size={20}/>,
  'TypeScript' : <TbBrandTypescript size={20}/>,
  'Bash'       : <VscTerminalBash size={20}/>,
  'Prisma'     : <SiPrisma size={20}/>,
  'React'      : <SiReact size={20}/>,
  'Redux'      : <SiRedux size={20}/>,
  'TailwindCSS': <SiTailwindcss size={20}/>,
  'Nextjs'     : <TbBrandNextjs size={20}/>,
  'MongoDB'    : <SiMongodb size={20}/>,
  'HTTP'       : <MdHttp size={30}/>,
}

import clipboard from '../../../public/icons-json/clipboard.json'
import code      from '../../../public/icons-json/code.json'
import customer  from '../../../public/icons-json/customer-io.json'
import download  from '../../../public/icons-json/download.json'
import email     from '../../../public/icons-json/email.json'
import heart     from '../../../public/icons-json/heart.json'
import home      from '../../../public/icons-json/home.json'
import podcasts  from '../../../public/icons-json/podcasts.json'
import projects  from '../../../public/icons-json/projects.json'
import source    from '../../../public/icons-json/source.json'
import uses      from '../../../public/icons-json/uses.json'
import fig       from '../../../public/icons-json/fig.json'

/* Make to a map */
export const ICONS = {
  home     : home,
  code     : code,
  heart    : heart,
  projects : projects,
  podcasts : podcasts,
  clipboard: clipboard,
  download : download,
  email    : email,
  source   : source,
  uses     : uses,
  customer : customer,
  fig      : fig,
}