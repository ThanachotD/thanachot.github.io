import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { FaFile } from 'react-icons/fa'
import Link from 'next/link';
import { useRouter } from 'next/router'

import { SiGithub ,SiLinkedin , SiNextdotjs , SiFastapi , SiMongodb, SiReact, SiNodedotjs, SiGo, SiGooglecloud, SiExpress, SiSwagger, SiDocker} from 'react-icons/si'
import {FaNodeJs ,FaReact , FaPython} from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();

  function getResume() {
    router.push(`/resume.pdf`);
  }
  return (
    <>
      <Head>
        <title>Thanachot</title>
        <meta name="firstpage" content="introduce myself by thanachot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/thanachot.ico" />
        <meta name="description" content="A web portfolio is a digital collection showcasing professional or creative skills, experiences, and achievements. It is presented on a website and can include resumes and work samples. It is used to showcase abilities and accomplishments to potential employers, clients, or partners."></meta>
      </Head>
      <main className='scroll-smooth font-sans antialiased  d:h-full h-screen'>
      <div className="grid grid-flow-row auto-rows-max bg-[#101925]">
        
        <div className="container mx-auto">
        <div className="grid justify-items-center content-center items-center  d:h-full h-screen">
        <div><Image
            className={styles.profile}
            src="/profile_Thanachot.jpg"
            alt="Picture of the author"
            width={300}
            height={300}/></div> 
            <div className='text-[#CFD1D3] text-xs m-2 mb-4 font-thin  '>Hello , I am </div>
            <div className='text-[#08FDD8] text-lg   font-bold md:text-4xl' >Thanachot Wongmetin</div>
            <div className='text-[#CFD1D3] text-xs  max-[300px]:hidden m-2 font-thin md:text-sm sm:text-sm'>Software Engineering · UX/UI Design · Photographer </div>
            
            <div className='text-[#CFD1D3] text-sm m-2 font-thin'> </div>
            <div className="flex items-center">
           <Link aria-label="Read more about Github" className=" text-[#CFD1D3]  mx-3" href={"https://github.com/ThanachotD"}><SiGithub size={25} className='hover:text-[#000]'/></Link>
           <Link aria-label="Read more about Linked" className=" text-[#CFD1D3]  mx-3" href={'https://www.linkedin.com/in/thanachot-wongmetin-94bb49210/'}><SiLinkedin  size={25} className='hover:text-[#007AEA]'/>  </Link>
            <button onClick={getResume} className="bg-[#08FDD8] mx-4 mr-2 hover:bg-[#FFF]  text-[#000000] font-bold text-sm py-2 px-6 rounded-full  flex flex-row animate-bounce">
            <FaFile size={18} className='mx-1 '/> Resume </button> 
            </div>
          </div>
          </div>
          <div className="container mx-auto ">
          <div className="grid justify-items-center content-center items-center  d:h-full h-screen">
        
          <div className="flex flex-wrap flex-row justify-items-center content-center items-center bg-[#101925]">
          <div className="basis-full grid grid-flow-row auto-rows-max sm:basis-1/2 p-6">
          <div className='text-[#08FDD8] text-xl font-xl  font-bold sm:text-2xl mb-3' >Profile Summary</div>
            <div className='text-white text-sm text-justify break-words'> A Software Engineer with excellent problem-solving and troubleshooting skills and the ability to perform well in a team having hands-on experience working on projects and looking for new challenges and opportunities to make innovations.</div>
            <div className='text-[#08FDD8] text-xl font-xl  font-bold sm:text-2xl my-3' >Skills</div>
            <div className='flex flex-column flex-wrap'> 

            <div className='m-2 text-white '>
              <SiReact size={44}></SiReact>
            </div>
            <div className='m-2 text-white '>
            <SiNextdotjs size={44}></SiNextdotjs>
            </div>
            <div className='m-2 text-white '>
            <SiNodedotjs size={44}></SiNodedotjs>
            </div>
            <div className='m-2 text-white '>
            <SiExpress size={44}></SiExpress >
            </div>
            <div className='m-2 text-white '>
            <SiMongodb size={44}></SiMongodb>
            </div>
            <div className='m-2 text-white '>
            <SiGo size={44}></SiGo>
            </div>
            <div className='m-2 text-white '>
            <SiFastapi size={44}></SiFastapi>
            </div>
            <div className='m-2 text-white '>
            <SiGooglecloud size={44}></SiGooglecloud>
            </div>
            <div className='m-2 text-white '>
            <SiDocker size={44}></SiDocker>
            </div>

            </div>
          </div>
          <div className="basis-full grid grid-flow-row auto-rows-max sm:basis-1/2 p-6"> 
            <div className='text-[#08FDD8] text-xl font-xl   font-bold sm:text-2xl mb-3 pl-2' >Work Experiences</div>
          
            <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl  bg-[#162B45] mb-6">
              <div className="md:flex">
                <div className="md:shrink-0">
                  </div>
                <div className="p-8 bg-[#162B45]">
                  <div className="uppercase tracking-wide text-lg text-[#08FDD8]  font-semibold ">WEDO  SCG </div>
                  <h1 className="block mt-1 text-sm leading-tight text-white font-semibold hover:underline">Present</h1>
                  <p className="mt-2 text-slate-500 text-sm text-justify break-words text-white font-thin ">Developed an electricity service for EV users in condominiums that allows everyone to use a portable charger with a smart outlet.Our work has been presented at renowned events such as the Teachsauce Global Summit 2022 Tech Showcase Stage, SX EXPO 2022, Thailand HR Tech 2022.</p>
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl bg-[#162B45]">
              <div className="md:flex">
                <div className="md:shrink-0">
                  </div>
                <div className="p-8 bg-[#162B45]">
                  <div className="uppercase tracking-wide text-lg text-[#08FDD8]  font-semibold">GDSC@TU</div>
                  <h1 className="block mt-1 text-sm leading-tight font-semibold text-white hover:underline">Present</h1>
                  <p className="mt-2  text-sm text-justify break-words text-white font-thin">As passionate volunteers, we aim to support individuals and friends in acquiring new technological skills.Alongside members of the club, we have plans to conduct workshops for students at Thammasat University </p>
                                                                                            
                </div>
              </div>
            </div>
            </div>
          </div>
          </div>
          </div>
          </div>
          
          
         
        
      </main>
    </>     
  )
}
