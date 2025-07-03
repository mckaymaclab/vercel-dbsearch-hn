import Image from "next/image";

export function LibraryHeader() {
    return (
        <header className="bg-black text-white">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3">
                            <div className="text-white font-bold text-lg">
                                <div className="leading-tight">
                                    <a
                                        href="https://library.byui.edu"
                                        target="_blank"
                                    >
                                        <Image
                                            src="/byui-logo.png"
                                            alt="BYU-Idaho Logo"
                                            width={70}
                                            height={40}
                                            className="inline-block mr-2"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="w-px h-8 bg-white/30"></div>
                            <a href="https://library.byui.edu" target="_blank">
                                <h1 className="text-2xl font-normal text-white">
                                    McKay Library
                                </h1>
                            </a>
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <div className="flex items-center space-x-1 text-white hover:text-gray-300 cursor-pointer">
                            <span className="text-base font-medium tracking-wide">
                                <a
                                    href="https://library.byui.edu"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    Return Home
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
                                        ></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
