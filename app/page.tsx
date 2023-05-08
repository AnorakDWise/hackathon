import {mono} from "./fonts";

const Home = () => {
    return (
        <main className="select-none">
            <section className={"m-auto w-5/6 h-screen flex flex-col justify-center items-baseline"}>
                <h1 className={mono.className + " text-green-400 text-9xl font-medium"}>#2023CTF_hackathon</h1>
                <div className={"absolute bg-zinc-900 h-[150px] w-[2000px] -translate-y-20 consoleUnderline"}><div className={"animate-pulse"}><div className={"w-[75px] h-[20px] bg-zinc-100 translate-y-[95px]"}></div></div></div>
                <h2 className={"text-3xl text-zinc-600 relative"}>Hack your way to the flag.</h2>
                <div className={"flex justify-center items-baseline text-zinc-100 text-3xl space-x-16 mt-20"}><button type={"button"} className={"border-2 border-zinc-100 px-4 py-3 rounded-xl hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-200 ease-in-out hover:transition-all hover:duration-200 hover:ease-in-out"}>Learn more</button><button type={"button"} className={"border-2 border-green-400 px-4 py-3 rounded-xl hover:bg-green-400 hover:text-zinc-900 text-green-400 transition-all duration-200 ease-in-out hover:transition-all hover:duration-200 hover:ease-in-out"}>Join wait-list</button></div>
            </section>
        </main>
    )
}

export default Home;