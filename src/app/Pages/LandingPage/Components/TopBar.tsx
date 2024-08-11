import logo from '@/app/Imgs/EduSync.png';
import Image from 'next/image';

export default function TopBar() {
    return (
        <div className='bg-white fixed h-20 w-full'>
            <Image src={logo} alt="Logo" className='h-16 w-auto flex content-center fixed mt-2 ml-10 '/>
            <div className='flex justify-center content-center mt-4 fixed w-full '>
                <div className="flex gap-5 border-solid border border-slate-200 rounded-full justify-center content-center p-1">
                    <div className="pt-2 pb-2 pr-4 pl-4 cursor-pointer hover:bg-slate-50 rounded-full">Home</div>
                    <div className="pt-2 pb-2 pr-4 pl-4 cursor-pointer hover:bg-slate-50 rounded-full">Price</div>
                    <div className="pt-2 pb-2 pr-4 pl-4 cursor-pointer hover:bg-slate-50 rounded-full">Recources</div>
                    <div className="bg-indigo-700 text-white rounded-full pt-2 pb-2 pr-5 pl-5 cursor-pointer font-semibold	">Login</div>
                </div>
            </div>
        </div>
    );
  }