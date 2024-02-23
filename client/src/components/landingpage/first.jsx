import { useEffect } from "react";
import { Button } from "../ui/button";
import Reveal from "../framerMotion/Reveal";

const phrases = [
    'Bridging healthcare',
    'Unifying health solutions',
    'Empowering lives',
]

function First() {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    useEffect(() => {
        const el = document.getElementById("typewriter");
        let phraseIndex = 0;
        const loop = true;
        const writeLoop = async () => {
            while (loop) {
                const word = phrases[phraseIndex];
                for (let i = 0; i < word.length; i++) {
                    el.innerText = word.substring(0, i + 1);
                    await sleep(150);
                }
                await sleep(1500);
                for (let i = word.length; i >= 0; i--) {
                    el.innerText = word.substring(0, i - 1);
                    await sleep(70);
                }
                await sleep(500);
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
        }
        writeLoop();

    }, [])
    return (
        <div className="grid grid-cols-2 place-items-center h-screen bg-gradient-to-t from-green-300 to-white">
            <div className="flex flex-col gap-2 text-4xl font-bold">
                <div>
                    <Reveal>
                        <h1>
                            Your Nexus to Seamless Healthcare
                        </h1>
                    </Reveal>
                    <span id="typewriter" className="text-green-950 font-extrabold">Bridging healthcare</span>
                    <span id="cursor">|</span>
                </div>
                <div className="pt-2" >
                    <Button className='font-semibold text-lg p-6'>Join now</Button>
                </div>
            </div>
            <div>
                <img src="/l3.png" alt="" />
            </div>
        </div>
    )
}

export default First