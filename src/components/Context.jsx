import '../App.css'

function Context({content, author}) {
    return(
        <div className='my-5 flex flex-col gap-10'>
            <div className='bg-[#1F2937] w-5/6 mx-auto flex flex-col items-center gap-3 px-8 py-10 rounded-lg'>
                <p className='font-bold text-3xl text-white text-center'>{content}</p>
                <p className='text-lg text-[#9ca3af]'>{author}</p>
            </div>
        </div>
    )
}

export default Context;
