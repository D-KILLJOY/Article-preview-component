import user from "./assets/images/avatar-michelle.jpg";
import drawers from "./assets/images/drawers.jpg";
import share from "./assets/images/icon-share.svg";
import facebook from "./assets/images/icon-facebook.svg";
import twitter from "./assets/images/icon-twitter.svg";
import pintrest from "./assets/images/icon-pinterest.svg";

function App() {
    return (
        <main className="w-full min-h-screen flex justify-center items-center ">
            <div>
                <img src={drawers} alt="image of a green drawer" />
                <article>
                    <h1>
                        Shift the overall look and feel by adding these
                        wonderful touches to furniture in your home
                    </h1>
                    <p>
                        Ever been in a room and felt like something was missing?
                        Perhaps it felt slightly bare and uninviting. I’ve got
                        some simple tips to help you make any room feel
                        complete.
                    </p>

                    <div>
                        <div>
                            <img
                                src={user}
                                alt="profile photo of Michelle Appleton"
                            />
                            <div>
                                <h2>Michelle Appleton</h2>
                                <p>28 Jun 2020</p>
                            </div>
                        </div>
                        <button type="button">
                            <img src={share} alt="share icon" />
                        </button>
                        <div>
                            <p>Share</p>
                            <div>
                                <img src={facebook} alt="facebook logo" />
                                <img src={twitter} alt="twitter logo" />
                                <img src={pintrest} alt="pintrest logo" />
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
}

export default App;
