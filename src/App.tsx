import user from "./assets/images/avatar-michelle.jpg";
import drawers from "./assets/images/drawers.jpg";
import share from "./assets/images/icon-share.svg";
import shareWhite from "./assets/images/icon-share-white.svg";
import facebook from "./assets/images/icon-facebook.svg";
import twitter from "./assets/images/icon-twitter.svg";
import pintrest from "./assets/images/icon-pinterest.svg";
import { useState } from "react";

function App() {
    const [shareAct, setShareAct] = useState(false);

    function toggleShare() {
        setShareAct((prev) => !prev);
    }
    return (
        <main className="w-full min-h-screen flex justify-center items-center bg-c-Light-Grayish-Blue">
            <div className="w-9/10 rounded-xl overflow-hidden">
                <img
                    src={drawers}
                    alt="image of a green drawer"
                    className="h-50 w-full object-cover"
                />
                <article className="px-9 pt-8 pb-4 bg-white relative">
                    <h1 className="font-bold text-c-Very-Dark-Grayish-Blue text-base mb-4">
                        Shift the overall look and feel by adding these
                        wonderful touches to furniture in your home
                    </h1>
                    <p className="font-bold text-[0.8125rem] text-c-Desaturated-Dark-Blue mb-8">
                        Ever been in a room and felt like something was missing?
                        Perhaps it felt slightly bare and uninviting. I’ve got
                        some simple tips to help you make any room feel
                        complete.
                    </p>

                    <div className="flex justify-between items-center ">
                        <div className="flex gap-4">
                            <img
                                className="w-12.5 h-12.5 rounded-full"
                                src={user}
                                alt="profile photo of Michelle Appleton"
                            />
                            <div className="text-[0.8125rem] ">
                                <h2 className="text-c-Very-Dark-Grayish-Blue font-bold">
                                    Michelle Appleton
                                </h2>
                                <p className="text-c-Desaturated-Dark-Blue font-medium">
                                    28 Jun 2020
                                </p>
                            </div>
                        </div>
                        <button
                            type="button"
                            className={`${shareAct ? "bg-c-Grayish-blue" : "bg-c-Light-Grayish-Blue"} w-8 h-8 flex justify-center items-center rounded-full cursor-pointer`}
                            onClick={toggleShare}
                        >
                            <img src={share} alt="share icon" />
                        </button>
                        <div
                            className={` ${shareAct ? "" : "hidden"} absolute bg-c-Very-Dark-Grayish-Blue w-full h-16 left-0 bottom-0 px-9 flex items-center gap-5`}
                        >
                            <p className="uppercase text-c-Grayish-blue text-xs tracking-[0.4rem]">
                                Share
                            </p>
                            <div className="flex gap-4">
                                <img src={facebook} alt="facebook logo" />
                                <img src={twitter} alt="twitter logo" />
                                <img src={pintrest} alt="pintrest logo" />
                            </div>
                            <button
                                type="button"
                                className="bg-c-Grayish-blue w-8 h-8 flex justify-center items-center rounded-full z-50 cursor-pointer ms-auto"
                                onClick={toggleShare}
                            >
                                <img src={shareWhite} alt="share icon" />
                            </button>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
}

export default App;
