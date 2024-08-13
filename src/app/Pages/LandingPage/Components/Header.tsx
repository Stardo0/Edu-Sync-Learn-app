import Image from 'next/image';
import Software from '@/app/Imgs/Software.png';
import React from 'react';


export default function Header() {


    return (
        <div className="h-screen flex">
            <div className="h-5/6 w-5/12 flex flex-col mb-20 justify-center">
                <div className="flex flex-wrap w-full justify-center items-center gap-5">
                    <div className="flex gap-5 text-5xl font-black leading-snug w-9/12 flex-wrap">
                        Learn <div className="bg-indigo-700 w-fit rounded-lg pr-2 pl-2 text-white ">Smarter</div> and <div className="bg-red-500 w-fit rounded-lg pr-2 pl-2 text-white">Faster</div> with <div className="">EduSync</div> 
                    </div>
                    <div className="w-9/12 text-xl font-medium">EduSync helps manage your school day with learning and planning tools.</div>
                    <div className="w-9/12">
                        <div className="w-fit p-4 pr-10 pl-10 rounded-xl cursor-pointer bg-white border-2 text-xl font-semibold hover:bg-slate-100">Join for Free</div>
                    </div>

                </div>
                
                
            </div>
            <div className="h-5/6 w-6/12 flex justify-center items-center flex-col mb-64 ml-36">
            <iframe className='rounded-xl' width="800" height="415" src="https://www.youtube.com/embed/3VZFpwlXKpg?si=RqbnbMpEDYAOt2xB" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    );
  }