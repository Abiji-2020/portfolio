import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"

const FeatuedProjct = ({type,title,summary,img,link,github}) =>{
    return(
        <article className='w-full
        flex items-center
        justify-between 
        p-6
        rounded-3xl border border-solid border-dark
        bg-light shadow-2xl '>
          
            <Link href={link} target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg
            '>
                <Image src={img} alt={title} className='w-full  h-auto'/>

            </Link>
            
            <div className='w-1/2 flex flex-col
            items-start justify-between pl-6 '>
                <span className='text-primary font-medium text-xl'>
                    {type}
                </span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left
                    text-4xl font-bold '>{title}</h2>
                </Link>
                <p className= " my-2 font-medium text-dark ">{summary}</p>
                <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10'> <GithubIcon /> </Link>
                <Link href={link} target='_blank' className='
                ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg
                font-semibold'> Visit Project</Link>
                </div>
            </div>
        
        </article>
    )
}

const Project = ({type, title,img,link,github}) =>{
    return(
        <article className='w-full  flex-col flex items-center justify-center
        rounded-2xl border border-solid border-dark bg-light p-6 relative shadow-2xl '>
            <Link href={link} target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg
            '>
                <Image src={img} alt={title} className='w-full  h-auto'/>

            </Link>
            <div className='w-full flex flex-col
            items-start justify-between mt-4 '>
                <span className='text-primary font-medium text-xl'>
                    {type}
                </span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left
                    text-4xl font-bold '>{title}</h2>
                </Link>
              
                <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10'> <GithubIcon /> </Link>
                <Link href={link} target='_blank' className='
                ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg
                font-semibold'> Visit</Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
    <Head>
      <title> Abinand | Projects</title>
      <meta
        name="description"
        content="This a webpage about myself. Abinand P which consists of my projects and all other detials of me "
      ></meta>
    </Head>

    <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'> 
            <AnimatedText text = "Imagination Trumps Knowledge!" className='mb-16'/>
            <div className="grid gird-cols-12 gap-24 items-center">
                <div className = 'col-span-12 items center '>
                    <FeatuedProjct
                    title="Learnative"
                    summary="Learnative combines cutting-edge AI technologies with interactive learning experiences, providing students with personalized and efficient study support. Whether you're tackling complex subjects, preparing for exams, or exploring new interests, Learnative is here to enhance your learning journey."
                    link = "https://learnative.vercel.app/"
                    type="Featured Project"
                    img={project1}
                    github="https://github.com/Abiji-2020/DuHacks3.0-Learnative"
                    />
                </div>
                <div className='col-span-6'>
                    <Project
                    title="Learnative"
                   
                    link = "https://learnative.vercel.app/"
                    type="Featured Project"
                    img={project1}
                    github="https://github.com/Abiji-2020/DuHacks3.0-Learnative"
                    />
                </div>
                <div className='col-span-6'>
                    Project 2
                </div>

            </div>


        </Layout>
    </main>
    </>
  )
}

export default projects
