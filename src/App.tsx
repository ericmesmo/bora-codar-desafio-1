import { Heading } from './components/Heading'

import './styles/main.css'

import playButton from './assets/play.svg'; 
import playForward from './assets/play-forward.svg'; 
import playBack from './assets/play-back.svg'; 

import { PlayerControl } from './components/PlayerControl';

function App() {

    return (
        <div className='flex items-center justify-center p-8 w-screen h-screen'>
            <div className='w-72 h-[498px] bg-[#2A2141] rounded-lg flex flex-col items-center'>
                <div className='w-full p-10'>
                    <div className='rounded-md flex flex-col items-center justify-center'>
                        <img src="../cover.jpg" className='rounded-md h-full w-full'  />
                    </div>
                    <Heading 
                        title='Acorda Devinho'
                        subtitle='Banda RocketSeat'
                    />
                    <div className='flex flex-row items-center justify-between'>
                        <div>
                            <button title='retroceder'>
                                <img src={playBack}/>
                            </button>
                        </div>
                        <div>
                            <button title='retroceder'>
                                <img src={playButton} />
                            </button>
                        </div>
                        <div>
                            <button title='retroceder'>
                                <img src={playForward} />
                            </button>
                        </div>
                    </div>

                    <PlayerControl />
                </div>
            </div>
        </div>
    )
}

export default App
