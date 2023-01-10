interface PlayerControlProps {
    title: string;
    subtitle: string; 
}

export function PlayerControl(){
    return(
        <div className='my-7'>
            <div className="bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div className="bg-[#D9D9D9] h-1.5 rounded-full dark:bg-[#D9D9D9]" style={{width: "75%"}}></div>
            </div>

            <div className="flex flex-row items-center justify-between">
                <div>
                    <span className="text-sm text-[#C4C4CC]">03:20</span>
                </div>
                <div>
                    <span className="text-sm text-[#C4C4CC]">00:12</span>
                </div>
            </div>
        </div>
    )
}