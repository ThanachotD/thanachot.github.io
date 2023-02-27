import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { SiGithub ,SiLinkedin} from 'react-icons/si'
import { FaFile } from 'react-icons/fa'
import Link from 'next/link';
import { useRouter } from 'next/router'

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
      <main className='bg-[#101925]'>

        <div className="container mx-auto">
        <div className="grid justify-items-center content-center items-center  d:h-full h-screen">
        <div><Image
            className={styles.profile}
            src="/profile_Thanachot.jpg"
            alt="Picture of the author"
            width={300}
            height={300}/></div> 
            <div className='text-[#CFD1D3] text-xs m-2 mb-4 font-thin'>Hello , I am </div>
            <div className='text-[#08FDD8] text-2xl font-2xl  font-bold sm:text-4xl' >Thanachot Wongmetin</div>
            {/* <div className='text-[#CFD1D3] text-sm m-2 font-thin sm:text-sm' >A Software Engineer with excellent problem-solving and troubleshooting skills and the ability to perform well in a team, having hands-on experience working on projects as a full-stack developer and looking for new challenges and opportunities to make innovations.</div>  */}
            <div className='text-[#CFD1D3] text-sm m-2 font-thin sm:text-sm'>Software Engineering · UX/UI Design · Photographer </div>
            <div className='text-[#CFD1D3] text-sm m-2 font-thin'> </div>
            
            <div className="flex items-center ...">
            <button className="text-[#CFD1D3] mx-3" ><Link href={"https://github.com/ThanachotD"}><SiGithub size={25} className='hover:text-[#000]'/></Link></button>
            <button  className="text-[#CFD1D3]  mx-3"><Link href={'https://www.linkedin.com/in/thanachot-wongmetin-94bb49210/'}><SiLinkedin  size={25} className='hover:text-[#007AEA]'/>  </Link></button>
            <button onClick={getResume} className="bg-[#08FDD8] mx-4 mr-2 hover:bg-[#FFF]  text-[#000000] font-bold text-sm py-2 px-6 rounded-full  flex flex-row">
            <FaFile size={18} className='mx-1'/> Resume </button> 
            </div>
        </div>
        </div>
      </main>
    </>     
  )
}
