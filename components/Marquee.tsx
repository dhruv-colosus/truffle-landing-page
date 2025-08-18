export default function Marquee() {
    const items = [
        "The Detail Lover",
        "The Lifestyle Seeker",
        "The Renovator",
        "The Remote Relocator",
    ];

    return (
        <div className="text-truffle-green-dark overflow-hidden -mt-4 relative [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex gap-8 animate-marquee-scroll">
                <div className="flex gap-8">
                    {items.map((item, idx) => (
                        <span className="whitespace-nowrap w-fit h-fit py-1 px-4 text-sm font-medium text-black/50 bg-white border border-truffle-green-light rounded-full" key={`${idx}+${item}`}>{item}</span>
                    ))}
                </div>
                <div className="flex gap-8">
                    {items.map((item, idx) => (
                        <span aria-hidden={true} className="whitespace-nowrap w-fit h-fit py-1 px-4 text-sm font-medium text-black/50 bg-white border border-truffle-green-light rounded-full" key={`${idx}+${item}`}>{item}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

