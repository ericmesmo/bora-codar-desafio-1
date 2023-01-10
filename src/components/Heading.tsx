interface HeadingProps {
    title: string;
    subtitle: string; 
}

export function Heading({title, subtitle}: HeadingProps){
    return(
        <div className="my-7">
            <h1
                className="text-[#E1E1E6] text-2xl font-bold"
            >
                {title}
            </h1>
            <span
                className="text-[#E1E1E6] text-lg"
            >
                {subtitle}
            </span>
        </div>
    )
}