
import { useSelector } from 'react-redux';
import './App.scss';

import { useDispatch } from 'react-redux';
import React, { useRef } from 'react';
import Key from './key';

function App() {

const dispatch = useDispatch();

let audioRef = useRef<HTMLAudioElement>(null);
let audioRef2 = useRef<HTMLAudioElement>(null);
let audioRef3 = useRef<HTMLAudioElement>(null);
let audioRef4 = useRef<HTMLAudioElement>(null);
let audioRef5 = useRef<HTMLAudioElement>(null);
let audioRef6 = useRef<HTMLAudioElement>(null);
let audioRef7 = useRef<HTMLAudioElement>(null);
let audioRef8 = useRef<HTMLAudioElement>(null);
let audioRef9 = useRef<HTMLAudioElement>(null);
let audioRef10 = useRef<HTMLAudioElement>(null);
let audioRef11= useRef<HTMLAudioElement>(null);
let audioRef12= useRef<HTMLAudioElement>(null);
let audioRef13= useRef<HTMLAudioElement>(null);
let audioRef14 = useRef<HTMLAudioElement>(null);
let audioRef15 = useRef<HTMLAudioElement>(null);
let audioRef16 = useRef<HTMLAudioElement>(null);
let audioRef17 = useRef<HTMLAudioElement>(null);
let audioRef18 = useRef<HTMLAudioElement>(null);
let audioRef19 = useRef<HTMLAudioElement>(null);
let audioRef20 = useRef<HTMLAudioElement>(null);
let audioRef21 = useRef<HTMLAudioElement>(null);
let audioRef22 = useRef<HTMLAudioElement>(null);
let audioRef23 = useRef<HTMLAudioElement>(null);
let audioRef24 = useRef<HTMLAudioElement>(null);


document.addEventListener('keydown', (event) => {

 

  switch (event.key) {
    case 'a':  audioRef.current.currentTime = 0.01;
    audioRef.current?.play();
    dispatch({ type: 'PRESSKEY', payload: event.key });

      
      break;

      case 'z':  audioRef2.current.currentTime = 0.01;
      audioRef2.current?.play();
      dispatch({ type: 'PRESSKEY', payload: event.key });

        
        break;

        case 'e':  audioRef3.current.currentTime = 0.01;
        audioRef3.current?.play();
        dispatch({ type: 'PRESSKEY', payload: event.key });


          
          break;

          case 'r':  audioRef4.current.currentTime = 0.01;
          audioRef4.current?.play();
          dispatch({ type: 'PRESSKEY', payload: event.key });
            
            break;

            case 't':  audioRef5.current.currentTime = 0.01;
            audioRef5.current?.play();
            dispatch({ type: 'PRESSKEY', payload: event.key });
              
              break;

              case 'y':  audioRef6.current.currentTime = 0.01;
              audioRef6.current?.play();
              dispatch({ type: 'PRESSKEY', payload: event.key });
                
                break;

                case 'u':  audioRef7.current.currentTime = 0.01;
                audioRef7.current?.play();
                dispatch({ type: 'PRESSKEY', payload: event.key });
                  
                  break;

                  case 'i':  audioRef8.current.currentTime = 0.01;
                  audioRef8.current?.play();
                  dispatch({ type: 'PRESSKEY', payload: event.key });
                    
                    break;

                    case 'o':  audioRef9.current.currentTime = 0.01;
                    audioRef9.current?.play();
                    dispatch({ type: 'PRESSKEY', payload: event.key });
                      
                      break;

                      case 'p':  audioRef10.current.currentTime = 0.01;
                      audioRef10.current?.play();
                      dispatch({ type: 'PRESSKEY', payload: event.key });
                        
                        break;

                        case 'q':  audioRef11.current.currentTime = 0.01;
                        audioRef11.current?.play();
                        dispatch({ type: 'PRESSKEY', payload: event.key });
                          
                          break;

                          case 's':  audioRef12.current.currentTime = 0.01;
                          audioRef12.current?.play();
                          dispatch({ type: 'PRESSKEY', payload: event.key });
                            
                            break;

                            case 'd':  audioRef13.current.currentTime = 0.01;
                            audioRef13.current?.play();
                            dispatch({ type: 'PRESSKEY', payload: event.key });
                              
                              break;

                              case 'f':  audioRef14.current.currentTime = 0.01;
                              audioRef14.current?.play();
                              dispatch({ type: 'PRESSKEY', payload: event.key });
                                
                                break;

                                case 'g':  audioRef15.current.currentTime = 0.01;
                                audioRef15.current?.play();
                                dispatch({ type: 'PRESSKEY', payload: event.key });
                                  
                                  break;

                                  case 'h':  audioRef16.current.currentTime = 0.01;
                                  audioRef16.current?.play();
                                  dispatch({ type: 'PRESSKEY', payload: event.key });
                                    
                                    break;

                                    case 'j':  audioRef17.current.currentTime = 0.01;
                                    audioRef17.current?.play();
                                    dispatch({ type: 'PRESSKEY', payload: event.key });
                                      
                                      break;

                                      case 'k':  audioRef18.current.currentTime = 0.01;
                                      audioRef18.current?.play();
                                      dispatch({ type: 'PRESSKEY', payload: event.key });
                                        
                                        break;

                                        case 'l':  audioRef19.current.currentTime = 0.01;
                                        audioRef19.current?.play();
                                        dispatch({ type: 'PRESSKEY', payload: event.key });
                                          
                                          break;

                                          case 'm':  audioRef20.current.currentTime = 0.01;
                                          audioRef20.current?.play();
                                          dispatch({ type: 'PRESSKEY', payload: event.key });
                                            
                                            break;

                                            case 'w':  audioRef21.current.currentTime = 0.01;
                                            audioRef21.current?.play();
                                            dispatch({ type: 'PRESSKEY', payload: event.key });
                                              
                                              break;

                                              case 'x':  audioRef22.current.currentTime = 0.01;
                                              audioRef22.current?.play();
                                              dispatch({ type: 'PRESSKEY', payload: event.key });
                                                
                                                break;

                                                case 'c':  audioRef23.current.currentTime = 0.01;
                                                audioRef23.current?.play();
                                                dispatch({ type: 'PRESSKEY', payload: event.key });
                                                  
                                                  break;

                                                  case 'v':  audioRef24.current.currentTime = 0.01;
                                                  audioRef24.current?.play();
                                                  dispatch({ type: 'PRESSKEY', payload: event.key });
                                                    
                                                    break;

  
    default:
      break;
  }


});


document.addEventListener('keyup', (event) => {

  dispatch({ type: 'RELEASEKEY', payload: event.key });

});



  return (

    <div style={{marginLeft:'15vw', marginTop:'30vh',display:'flex',flexDirection:'row'}}>



     <Key pianokey={'a'}></Key>
     <Key pianokey={'z'}></Key>
     <Key pianokey={'e'}></Key>
     <Key pianokey={'r'}></Key>
     <Key pianokey={'t'}></Key>
     <Key pianokey={'y'}></Key>
     <Key pianokey={'u'}></Key>
     <Key pianokey={'i'}></Key>
     <Key pianokey={'o'}></Key>
     <Key pianokey={'p'}></Key>
     <Key pianokey={'q'}></Key>
     <Key pianokey={'s'}></Key>
     <Key pianokey={'d'}></Key>
     <Key pianokey={'f'}></Key>
     <Key pianokey={'g'}></Key>
     <Key pianokey={'h'}></Key>
     <Key pianokey={'j'}></Key>
     <Key pianokey={'k'}></Key>
     <Key pianokey={'l'}></Key>
     <Key pianokey={'m'}></Key>
     <Key pianokey={'w'}></Key>
     <Key pianokey={'x'}></Key>
     <Key pianokey={'c'}></Key>
     <Key pianokey={'v'}></Key>


      <audio 
        ref={audioRef}
        src={'./Pianokeys/key01.mp3'}
      />

      <audio 
        ref={audioRef2}
        src={'./Pianokeys/key02.mp3'}
      />

    <audio 
        ref={audioRef3}
        src={'./Pianokeys/key03.mp3'}
      />

    <audio 
        ref={audioRef4}
        src={'./Pianokeys/key04.mp3'}
      />
    
    <audio 
        ref={audioRef5}
        src={'./Pianokeys/key05.mp3'}
      />

<audio 
        ref={audioRef6}
        src={'./Pianokeys/key06.mp3'}
      />

<audio 
        ref={audioRef7}
        src={'./Pianokeys/key07.mp3'}
      />

<audio 
        ref={audioRef8}
        src={'./Pianokeys/key08.mp3'}
      />

<audio 
        ref={audioRef9}
        src={'./Pianokeys/key09.mp3'}
      />

<audio 
        ref={audioRef10}
        src={'./Pianokeys/key10.mp3'}
      />

<audio 
        ref={audioRef11}
        src={'./Pianokeys/key11.mp3'}
      />

<audio 
        ref={audioRef12}
        src={'./Pianokeys/key12.mp3'}
      />

<audio 
        ref={audioRef13}
        src={'./Pianokeys/key13.mp3'}
      />


<audio 
        ref={audioRef14}
        src={'./Pianokeys/key14.mp3'}
      />

<audio 
        ref={audioRef15}
        src={'./Pianokeys/key15.mp3'}
      />

<audio 
        ref={audioRef16}
        src={'./Pianokeys/key16.mp3'}
      />

<audio 
        ref={audioRef17}
        src={'./Pianokeys/key17.mp3'}
      />

<audio 
        ref={audioRef18}
        src={'./Pianokeys/key18.mp3'}
      />

<audio 
        ref={audioRef19}
        src={'./Pianokeys/key19.mp3'}
      />

<audio 
        ref={audioRef20}
        src={'./Pianokeys/key20.mp3'}
      />

<audio 
        ref={audioRef21}
        src={'./Pianokeys/key21.mp3'}
      />

<audio 
        ref={audioRef22}
        src={'./Pianokeys/key22.mp3'}
      />

<audio 
        ref={audioRef23}
        src={'./Pianokeys/key23.mp3'}
      />

<audio 
        ref={audioRef24}
        src={'./Pianokeys/key24.mp3'}
      />




    </div>
  );
}

export default App;
