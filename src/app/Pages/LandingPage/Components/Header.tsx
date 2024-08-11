import Image from 'next/image';


export default function Header() {
    return (
        <div className="h-screen">
            <div className="h-5/6 w-1/2 flex flex-col mb-64 justify-center">
                <div className="flex flex-wrap w-9/12 justify-center items-center gap-5">
                    <div className="flex gap-5 text-5xl font-black leading-snug w-9/12 flex-wrap">
                        Learn <div className="bg-indigo-700 w-fit rounded-lg pr-2 pl-2 text-white">Smarter</div> and <div className="bg-red-500 w-fit rounded-lg pr-2 pl-2 text-white">Faster</div> with <div className="">EduSync</div> 
                    </div>
                    <div className="w-9/12 text-xl font-medium">EduSync helps manage your school day with learning and planning tools.</div>
                    <div className="w-9/12">
                        <div className="w-fit p-4 pr-10 pl-10 rounded-xl cursor-pointer bg-white border-2 text-xl font-semibold hover:bg-slate-100">Join for Free</div>
                    </div>

                </div>
                
                
            </div>
            <div className="h-screen w-1/2 flex justify-center items-center flex-col mb-64">
                <div className="rounded-2xl">
                    <Image src={} alt="Logo"/>
                </div>
            </div>
        </div>
    );
  }