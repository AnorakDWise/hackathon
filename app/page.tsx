"use client";
import {mono, sans} from "./fonts";
import Link from "next/link";
import {useState} from "react";
import {supabase} from "@/app/supabaseClient";

const Home = () => {
    const [visible, setVisible] = useState("flex");
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const {data, error} = await supabase
            .from('users')
            .insert([{name: name, email: email}])

        if (error) {
            console.error('Error: ', error)
        } else {
            console.log('Success: ', data)
            setName('')
            setEmail('')
        }
    }

    const handleReset = () => {
        setName('')
        setEmail('')
    }

    return (
        <main className="select-none">
            <section className={"m-auto w-5/6 h-screen flex flex-col justify-center items-baseline phone:w-11/12"}>
                <h1 className={mono.className + " text-green-400 text-8xl font-medium whitespace-nowrap"}>〜$
                    #2023CTF_hackathon</h1>
                <div
                    className={"absolute bg-slate-800 h-[150px] w-[2000px] -translate-y-20 translate-x-[200px] consoleUnderline"}>
                    <div className={"animate-pulse"}>
                        <div className={"w-[75px] h-[20px] bg-slate-100 translate-y-[82px]"}></div>
                    </div>
                </div>
                <h2 className={"text-3xl text-slate-600 relative phone:text-5xl"}>Hack your way to the flag.</h2>
                <div
                    className={"flex justify-center items-baseline text-slate-100 text-3xl space-x-16 mt-20 phone:text-5xl"}>
                    <button type={"button"}
                            className={"border-2 border-slate-100 px-4 py-3 rounded-xl hover:bg-slate-100 hover:text-slate-800 transition-all duration-200 ease-in-out hover:transition-all hover:duration-200 hover:ease-in-out phone:rounded-2xl phone:px-6 phone:py-6"}>
                        <Link href={"#info"}>Learn more</Link></button>
                    <button type={"button"}
                            className={"border-2 border-green-400 px-4 py-3 rounded-xl hover:bg-green-400 hover:text-slate-800 text-green-400 transition-all duration-200 ease-in-out hover:transition-all hover:duration-200 hover:ease-in-out phone:rounded-2xl phone:px-6 phone:py-6"}>
                        <Link href={"#waitlist"}>Join wait-list</Link></button>
                </div>
            </section>

            <section id={"info"}
                     className={"h-screen m-auto w-11/12 flex justify-center items-left flex-col space-y-10 cursor-default phone:overflow-x-scroll"}>
                <h2 className={mono.className + " text-5xl text-green-400 font-medium phone:text-7xl"}>metadata.dat</h2>
                <div
                    className={"flex justify-center items-center w-full phone:w-[175vw]"}>
                    <div
                        className={"text-slate-100 text-base whitespace-break-spaces w-72 phone:w-2/3 h-full border-2 border-slate-100 border-r-0 rounded-l-md phone:rounded-l-xl phone:text-5xl"}>
                        <div
                            className={"border-b-2 border-slate-100 px-4 phone:px-8 py-2 phone:py-4 font-medium"}>whoami
                            ?
                        </div>
                        <div className={"px-4 phone:px-8 py-2 phone:py-6 phone:tracking-wider phone:leading-[60px]"}>A
                            Capture-The-Flag
                            (CTF)
                            hackathon
                            event is a
                            type of
                            cyber
                            security competition where participants, often in teams, compete to solve a variety of
                            security-related challenges. These challenges could involve exploiting vulnerabilities in a
                            system, reverse engineering, cracking codes, or performing other types of cyber attacks
                            to &quot;capture the flag,&quot; a prize representing a sum of<br/>25,000.00 czk in this
                            case.
                        </div>
                    </div>

                    <div
                        className={"text-slate-100 text-base whitespace-break-spaces w-72 phone:w-2/3 h-full border-2 border-r-0 border-slate-100 phone:text-5xl"}>
                        <div
                            className={"border-b-2 border-slate-100 px-4 py-2 phone:px-8 phone:py-4 font-medium"}>place&time
                        </div>
                        <div className={"px-4 py-2 phone:px-8 phone:py-6 phone:tracking-wider phone:leading-[60px]"}>The
                            event will take place in the <Link
                                href={"https://goo.gl/maps/QtWQNaPbCfDcWrp6A"}
                                className={"hover:underline decoration-2"}
                                title={"Open in Google Maps"}>Culture Club of Uherské Hradiště, Czechia</Link>. A
                            precise
                            date hasn&apos;t been specified for now, but the event will take place between August-7-2023
                            and August-12-2023.
                        </div>
                    </div>

                    <div
                        className={"text-slate-100 text-base whitespace-break-spaces w-72 phone:w-2/3 h-full rounded-r-md border-2 border-slate-100 phone:rounded-r-xl phone:text-5xl"}>
                        <div
                            className={"border-b-2 border-slate-100 px-4 py-2 phone:px-8 phone:py-4 font-medium text-red-400"}>405
                            : Method
                            not allowed
                        </div>
                        <div
                            className={"px-4 py-2 phone:px-8 phone:py-6 flex flex-col justify-start items-left space-y-3 phone:tracking-wider phone:leading-[60px] phone:space-y-6"}>Although
                            anarchy
                            is our leading value, in order to maintain a likeable
                            event for everyone, we have a few rules you&apos;ll have to agree on,<br/>if you&apos;d like
                            to participate :
                            <div
                                className={"flex flex-col justify-start items-left space-y-1 text-red-400 phone:space-y-3"}>
                                <p><span className={"text-green-400"}>./ </span>The
                                    prize will be
                                    granted only to the first person / team who acquires the flag ;</p><p><span
                                className={"text-green-400"}>./ </span>Physical
                                violence
                                will not be tolerated and will result in expulsion from this and future hackathons ;</p>
                            </div></div>
                    </div>
                </div>

                <div
                    className={"w-full flex justify-center items-baseline text-green-400 translate-y-32 phone:text-4xl"}>Please
                    Aknowledge,
                    that the event will only be held, if the minimum participants will be reached. And the prize value,
                    will increase in case the participants number will exceed the minimum.
                </div>
            </section>

            <section id={"waitlist"}
                     className={mono.className + " h-screen w-5/6 phone:w-11/12 m-auto flex justify-center items-start flex-col space-y-10"}>
                <h2 className={"text-5xl phone:text-7xl text-green-400 font-medium"}>wait-list.json</h2>
                <div className={"w-full flex justify-center items-center"}>
                    <form onSubmit={handleSubmit}
                          className={"flex justify-center items-center flex-col w-1/2 phone:w-10/12 phone:text-5xl text-base border-2 border-slate-100 text-zinc-100 rounded-md phone:rounded-xl"}>
                        <div
                            className={"flex justify-start items-center w-full border-b-2 border-slate-100 group"}>
                            <p
                                className={"whitespace-nowrap pl-4 phone:pl-8 group-focus-within:text-green-400 transition-all duration-200 ease-in-out group-focus-within:transition-all group-focus-within:duration-200 group-focus-within:ease-in-out"}>username
                                〜$</p><input type={"text"} value={name} onChange={(e) =>
                            setName(e.target.value)
                        }
                                             placeholder={"type here ..."}
                                             className={"w-full h-9 phone:h-28 px-4 phone:px-8 bg-transparent outline-none placeholder-slate-300 group-focus-within:text-green-400 transition-all duration-200 ease-in-out group-focus-within:transition-all group-focus-within:duration-200 group-focus-within:ease-in-out"}
                                             required/>
                        </div>

                        <div className={"flex justify-start items-center w-full border-b-2 border-slate-100 group"}><p
                            className={"whitespace-nowrap pl-4 phone:pl-8 group-focus-within:text-green-400 transition-all duration-200 ease-in-out group-focus-within:transition-all group-focus-within:duration-200 group-focus-within:ease-in-out"}>email
                            〜$</p><input type={"email"} value={email} onChange={(e) => setEmail(e.target.value)}
                                         placeholder={"type here ..."}
                                         className={"w-full h-9 phone:h-28 px-4 phone:px-8 bg-transparent outline-none placeholder-slate-300 group-focus-within:text-green-400 transition-all duration-200 ease-in-out group-focus-within:transition-all group-focus-within:duration-200 group-focus-within:ease-in-out autofill:bg-slate-800"}
                                         required/>
                        </div>

                        <div
                            className={visible + " justify-start items-center w-full border-b-2 border-slate-100 group"}>
                            <div
                                className={"w-full flex justify-around items-center px-6 py-6 phone:px-12 phone:py-12"}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30"
                                     className={"fill-amber-400 w-32 phone:w-1/4"}>
                                    <path
                                        d="M 15.080078 1.3789062 C 14.181078 1.3979062 13.279047 1.6004063 12.498047 2.0664062 L 13.525391 3.7832031 C 13.985391 3.5072031 14.513969 3.3499062 15.042969 3.3789062 C 15.553969 3.3879062 16.053328 3.5347344 16.486328 3.8027344 L 17.537109 2.1015625 C 16.799109 1.6455625 15.949078 1.3949062 15.080078 1.3789062 z M 10.208984 4.8574219 L 7.9902344 8.6835938 L 9.7207031 9.6875 L 11.939453 5.8613281 L 10.208984 4.8574219 z M 19.876953 4.9824219 L 18.146484 5.9863281 L 20.365234 9.8125 L 20.367188 9.8125 L 20.605469 10.222656 L 22.332031 9.2167969 L 22.095703 8.8085938 L 22.097656 8.8085938 L 19.876953 4.9824219 z M 15.011719 6.1035156 C 14.371719 6.1035156 13.822031 6.4827344 13.582031 7.0527344 L 5.2421875 21.613281 C 5.0921875 21.863281 5.0117188 22.143594 5.0117188 22.433594 C 5.0117188 23.293594 5.6929687 23.992188 6.5429688 23.992188 C 6.5829688 23.992188 6.6223437 23.992422 6.6523438 23.982422 L 6.6523438 23.992188 L 23.361328 23.992188 L 23.371094 23.982422 C 23.401094 23.992422 23.442422 23.992187 23.482422 23.992188 C 24.322422 23.992188 25.011719 23.293594 25.011719 22.433594 C 25.011719 22.143594 24.93125 21.863281 24.78125 21.613281 L 24.761719 21.59375 L 16.431641 7.0527344 C 16.201641 6.4827344 15.651719 6.1035156 15.011719 6.1035156 z M 6.7128906 10.880859 L 4.3984375 14.871094 L 6.1289062 15.875 L 8.4433594 11.886719 L 6.7128906 10.880859 z M 23.373047 11.005859 L 21.642578 12.009766 L 23.957031 16 L 25.689453 14.996094 L 23.373047 11.005859 z M 14.011719 11.992188 L 16.011719 11.992188 L 15.841797 17.992188 L 14.181641 17.992188 L 14.011719 11.992188 z M 3.2929688 16.777344 L 1.2285156 20.544922 L 2.9824219 21.505859 L 5.046875 17.738281 L 3.2929688 16.777344 z M 26.792969 16.902344 L 25.039062 17.863281 L 27.103516 21.628906 L 28.857422 20.667969 L 26.792969 16.902344 z M 15.011719 19.992188 C 15.631719 19.992188 16.011719 20.362188 16.011719 20.992188 C 16.011719 21.622187 15.631719 21.992188 15.011719 21.992188 C 14.381719 21.992188 14.011719 21.622187 14.011719 20.992188 C 14.011719 20.362188 14.381719 19.992188 15.011719 19.992188 z M 3.0117188 23.984375 L 2.0117188 23.992188 L 1.0117188 23.992188 C 1.0117188 25.600188 2.0767188 27.992188 5.0117188 27.992188 L 5.0117188 25.992188 C 3.1857188 25.992188 3.0197187 24.456375 3.0117188 23.984375 z M 27.011719 23.992188 C 27.011719 24.326187 26.914719 25.992188 25.011719 25.992188 L 25.011719 27.992188 C 27.946719 27.992188 29.011719 25.599187 29.011719 23.992188 L 27.011719 23.992188 z M 7.0117188 25.992188 L 7.0117188 27.992188 L 11.011719 27.992188 L 11.011719 25.992188 L 7.0117188 25.992188 z M 13.011719 25.992188 L 13.011719 27.992188 L 17.011719 27.992188 L 17.011719 25.992188 L 13.011719 25.992188 z M 19.011719 25.992188 L 19.011719 27.992188 L 23.011719 27.992188 L 23.011719 25.992188 L 19.011719 25.992188 z"></path>
                                </svg>
                                <div
                                    className={sans.className + " flex flex-col justify-center items-start w-72 phone:w-2/3 phone:space-y-3"}>
                                    <h3
                                        className={"text-xl phone:text-6xl font-medium text-amber-400"}>Warning</h3><p
                                    className={"font-base phone:text-5xl phone:leading-[60px] phone:tracking-wider"}>By
                                    ticking the box below, you confirm, that you&apos;ll be willing to pay up to<br/>1,000
                                    czk,
                                    when the ticket sale will start (July-2023). You&apos;ll also be
                                    notified when the shop will be
                                    open by email which you provided above.</p></div>
                            </div>
                        </div>

                        <div
                            className={sans.className + " flex justify-center items-center w-full border-b-2 border-slate-100 group h-9 phone:h-28 px-4 space-x-3 phone:space-x-6"}>
                            <input type={"checkbox"} onClick={() => {
                                if (visible === "flex") {
                                    setVisible("hidden")
                                } else {
                                    setVisible("flex")
                                }
                            }}
                                   className={"transition duration-200 ease-in-out peer checked:transition checked:duration-200 checked:ease-in-out appearance-none border-2 border-slate-100 w-4 phone:w-14 h-4 phone:h-14 rounded-sm phone:rounded-2xl checked:bg-green-400 cursor-pointer checked:border-green-400"}
                                   required/>
                            <p
                                className={"peer-checked:text-green-400 text-base phone:text-5xl whitespace-nowrap transition-all duration-200 ease-in-out peer-checked:transition-all peer-checked:duration-200 peer-checked:ease-in-out"}>I
                                agree with the stated condition.</p>
                        </div>

                        <div className={mono.className + " flex justify-start items-center w-full group"}>
                            <button type={"button"} onClick={handleReset}
                                    className={"w-1/2 h-9 phone:h-28 px-4 hover:bg-red-400 transition-all duration-200 ease-in-out hover:transition-all hover:duration-200 hover:ease-in-out border-r-2 border-slate-100 hover:text-slate-800"}>reset
                            </button>
                            <button type={"submit"}
                                    className={"w-1/2 h-9 phone:h-28 px-4 hover:bg-green-400 transition-all duration-200 ease-in-out hover:transition-all hover:duration-200 hover:ease-in-out hover:text-slate-800 font-medium"}>submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Home;