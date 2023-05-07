import {mono} from "./fonts";

export default function Home() {
    return (
        <main className="select-none">
            <section className={"m-auto w-5/6 h-screen flex flex-col justify-center items-baseline"}>
                <h1 className={mono.className + " text-green-400 text-9xl"}>#2023CTF_hackathon</h1>
                <div className={"absolute bg-zinc-900 h-[150px] w-[2000px] consoleUnderline"}><div className={"animate-pulse"}><div className={"w-[75px] h-[20px] bg-zinc-100 translate-y-[80px]"}></div></div></div>
                <h2 className={"text-5xl text-zinc-100 relative"}>Hack your way to the flag.</h2>
            </section>
        </main>
    )
}
