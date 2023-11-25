import React from 'react'
import ReactPlayer from 'react-player/youtube'

export const Dashboard = () => {
  return (
    <div className='flex h-screen w-full bg-slate-200'>
    <div className='flex justify-center items-center'>
        <div className='flex border-box h-[600px] w-[80%] rounded-[10px] bg-white border-4 border-black'>

            <div className='w-[5%] rounded-l-lg bg-slate-100'>
            <div className=''><img src="/logo.png" alt="" /></div>
            <div><img className='py-2' src="/menu.png" alt="" /></div>
            <div><img className='py-2 ' src="notification.png" alt="" /></div>
            <div><img className='py-2' src="timer.png" alt="" /></div>
            <div><img className='p-2 ' src="done.png" alt="" /></div>
            <div><img className='p-2 my-2' src="eye3.png" alt="" /></div>
            <div><img className='p-2 my-2' src="people.png" alt="" /></div>
            <div><img className='p-2 my-2' src="graph.png" alt="" /></div>
            <div><img className='pt-[50px]' src="profile.png" alt="" /></div>
            </div>

            <div className='w-[95%] p-5 mx-[20px]'>
                <div className='flex justify-between h-[20px]'>
                    <div className='flex'>
                        <div className='px-5'><img className='h-[25px] bg-slate-100 rounded-[10px] h-[40px] p-1' src="/left-arrow.png" alt="" /></div>
                        <div className='font-bold text-[25px] px-5'>Basic Mathematics 101</div>
                    </div>
                    <div className='flex mr-[40px]'>
                        <div className='flex font-bold'><img className='h-[30px]' src="/telephone.png" alt="" />Call Teacher</div>
                        <div className='flex font-bold px-5'><img className='h-[30px]' src="/support.png" alt="" />Support</div>
                    </div>
                </div>

                <div className='flex bg-slate-100 rounded-[30px] m-5 h-[50px] my-[30px] w-[90%] items-center'>
                    <div className='px-[20px] font-bold text-slate-400 text-[18px] hover:bg-white rounded-[20px] h-[40px] flex items-center'>Classroom</div>
                    <div className='px-[20px] font-bold text-slate-400 text-[18px] hover:bg-white rounded-[20px] h-[40px] flex items-center'>Whiteboard</div>
                    <div className='px-[20px] font-bold text-slate-400 text-[18px] hover:bg-white rounded-[20px] h-[40px] flex items-center'>Videos</div>
                    <div className='px-[20px] font-bold text-slate-400 text-[18px] hover:bg-white rounded-[20px] h-[40px] flex items-center'>Slide Show</div>
                    <div className='px-[20px] font-bold text-slate-400 text-[18px] hover:bg-white rounded-[20px] h-[40px] flex items-center'>Documents</div>
                    <div className='px-[20px] font-bold text-slate-400 text-[18px] hover:bg-white rounded-[20px] h-[40px] flex items-center'>Doc.Cam</div>
                </div>

                <div className='flex'>
                    <div>
                    <div><img className='h-[130px] w-[150px] rounded-[30px] mx-5' src="/student.png" alt="" /></div>
                    <div><img className='h-[130px] w-[150px] my-[10px] rounded-[30px] mx-5' src="/teacher.png" alt="" /></div>
                    <div className='grid grid-cols-3 mx-5'>
                        <div><img className='h-[30px] p-1 m-1 bg-slate-100 rounded-[10px]' src="cam.png" alt="" />Cam</div>
                        <div><img className='h-[30px] p-1 m-1 bg-slate-100 rounded-[10px]' src="/mic.png" alt="" />Mic</div>
                        <div><img className='h-[30px] p-1 m-1 bg-slate-100 rounded-[10px]' src="share.png" alt="" />Share</div>
                        <div><img className='h-[30px] p-1 m-1 bg-slate-100 rounded-[10px]' src="chat.png" alt="" />Chat</div>
                        <div><img className='h-[30px] p-1 m-1 bg-cyan-600 rounded-[10px]' src="leave.png" alt="" />Leave</div>
                    </div>
                    </div>
                    
                    <div className='mx-[30px]'>
                     <ReactPlayer url={"https://www.youtube.com/watch?v=SDyn18ajxrg&t=2s"} controls="true"/>
                    </div>

                </div>
            </div>
        </div>
    </div>    
        
    </div>
  )
}
