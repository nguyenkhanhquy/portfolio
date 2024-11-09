const Welcome = () => {
    return (
        <div className="max-w-6xl m-auto">
            {/* About me */}
            <section className="mt-20">
                <div className="pt-2">
                    <div className="relative">
                        <div className="relative z-10">
                            <div className="w-full lg:w-3/5">
                                <div
                                    className="mb-1 flex items-center gap-1 text-2xl text-slate-600 md:mb-0 md:gap-2 md:text-4xl dark:text-slate-400">
                                    Hi!
                                </div>
                                <span className="text-slate-700 dark:text-slate-300">
                                    <span className="mb-1 block text-[2.1rem] font-extrabold leading-none md:text-5xl">
                                        {"I'm Nguyễn Khánh Quy"}&nbsp;
                                    </span>
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 md:flex">
                                <div
                                    className="w-full lg:w-1/3 pt-5 text-base text-slate-600 md:text-xl dark:text-slate-400">
                                    <div>
                                        <p>
                                            A{" "}
                                            <strong className="text-slate-700 dark:text-slate-300">
                                                Web Developer {"</>"}
                                            </strong>
                                        </p>
                                        <p className="text-base md:text-lg font-normal text-gray-700 dark:text-white">
                                            <span>
                                                I'm always eager to expand my skill set and stay current with the latest
                                                technology trends.
                                            </span>
                                        </p>
                                        <p className="text-base md:text-lg font-normal text-gray-700 dark:text-white">
                                            <i>"With Small Steps, I Will Go Very Far."</i>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Tech stack/tools */}
                            <div className="mt-4 lg:mt-8 lg:w-2/4">
                                <div className="w-full">
                                    <p
                                        className="mb-2.5 text-sm text-slate-600 dark:text-slate-400"
                                        style={{opacity: 1, transform: "none"}}
                                    >
                                        Tech stack/tools:
                                    </p>
                                    <ul className="w-full flex flex-wrap items-center gap-3.5 text-slate-500 dark:text-slate-500">
                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="transition duration-200 hover:text-[#61DAFB]">
                                                <img
                                                    loading="lazy"
                                                    className="h-6 w-6"
                                                    src="/svg/react.svg"
                                                    alt="react"
                                                />
                                            </div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="transition duration-200 hover:text-[#3178C6]">
                                                <img
                                                    loading="lazy"
                                                    className="h-6 w-6"
                                                    src="/svg/tailwindcss.svg"
                                                    alt="tailwindcss"
                                                />
                                            </div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="transition duration-200 hover:text-[#3178C6]">
                                                <img
                                                    loading="lazy"
                                                    className="h-6 w-6"
                                                    src="/svg/bootstrap.svg"
                                                    alt="bootstrap"
                                                />
                                            </div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="transition duration-200 hover:text-[#61DAFB]">
                                                <img loading="lazy" className="h-6 w-6" src="/svg/npm.svg" alt="npm"/>
                                            </div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="transition duration-200 hover:text-[#06B6D4]">
                                                <img
                                                    loading="lazy"
                                                    className="h-6 w-6"
                                                    src="/svg/figma.svg"
                                                    alt="figma"
                                                />
                                            </div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="transition duration-200 hover:text-[#0055FF]">
                                                <img
                                                    loading="lazy"
                                                    className="h-6 w-6"
                                                    src="/svg/firebase.svg"
                                                    alt="firebase"
                                                />
                                            </div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div
                                                className="transition duration-200 hover:text-[#000000] dark:hover:text-[#FFFFFF]">
                                                <img loading="lazy" className="h-6 w-6" src="/svg/git.svg" alt="git"/>
                                            </div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="transition duration-200 hover:text-[#007ACC]">
                                                <img
                                                    loading="lazy"
                                                    className="h-6 w-6"
                                                    src="/svg/java.svg"
                                                    alt="java"
                                                />
                                            </div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="transition duration-200 hover:text-[#007ACC]">
                                                <img
                                                    loading="lazy"
                                                    className="h-6 w-6"
                                                    src="/svg/springboot.svg"
                                                    alt="springboot"
                                                />
                                            </div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="transition duration-200 hover:text-[#007ACC]">
                                                <img
                                                    loading="lazy"
                                                    className="h-6 w-6"
                                                    src="/svg/html5.svg"
                                                    alt="html5"
                                                />
                                            </div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="transition duration-200 hover:text-[#007ACC]">
                                                <img
                                                    loading="lazy"
                                                    className="h-6 w-6"
                                                    src="/svg/css3.svg"
                                                    alt="css3"
                                                />
                                            </div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="transition duration-200 hover:text-[#007ACC]">
                                                <img
                                                    loading="lazy"
                                                    className="h-6 w-6"
                                                    src="/svg/javascript.svg"
                                                    alt="javascript"
                                                />
                                            </div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="transition duration-200 hover:text-[#007ACC]">
                                                <img
                                                    loading="lazy"
                                                    className="h-6 w-6"
                                                    src="/svg/typescript.svg"
                                                    alt="TypeScript"
                                                />
                                            </div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="transition duration-200 hover:text-[#007ACC]">
                                                <img
                                                    loading="lazy"
                                                    className="h-6 w-6"
                                                    src="/svg/nodejs.svg"
                                                    alt="nodejs"
                                                />
                                            </div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="transition duration-200 hover:text-[#007ACC]">
                                                <img
                                                    loading="lazy"
                                                    className="h-6 w-6"
                                                    src="/svg/vitejs.svg"
                                                    alt="Vitejs"
                                                />
                                            </div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="transition duration-200 hover:text-[#007ACC]">
                                                <img
                                                    loading="lazy"
                                                    className="h-6 w-6"
                                                    src="/svg/vscode.svg"
                                                    alt="vscode"
                                                />
                                            </div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="transition duration-200 hover:text-[#007ACC]">
                                                <img
                                                    loading="lazy"
                                                    className="h-6 w-6"
                                                    src="/svg/mongodb.svg"
                                                    alt="mongodb"
                                                />
                                            </div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="transition duration-200 hover:text-[#007ACC]">
                                                <img
                                                    loading="lazy"
                                                    className="h-6 w-6"
                                                    src="/svg/postman.svg"
                                                    alt="postman"
                                                />
                                            </div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                                        </li>

                                        <li style={{opacity: 1, transform: "none"}}>
                                            <div className="transition duration-200 hover:text-[#007ACC]">
                                                <img
                                                    loading="lazy"
                                                    className="h-6 w-6"
                                                    src="/svg/docker.svg"
                                                    alt="docker"
                                                />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Avatar */}
                        <div className="pointer-events-none absolute -top-8 right-0 z-0 hidden select-none lg:block">
                            <div className="relative h-[590px] w-[603px]">
                                <div
                                    className="absolute top-20 right-0 h-[320px] w-[320px] rounded-full bg-gradient-to-t from-accent-400/20 dark:from-accent-600/10">
                                    <div className="absolute right-0 bottom-0 overflow-hidden hidden lg:block">
                                        <img
                                            alt="me"
                                            src="/images/avatar.jpg"
                                            className="hidden lg:block dark:brightness-[.82] rounded-3xl"
                                            style={{color: "transparent"}}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Welcome;
