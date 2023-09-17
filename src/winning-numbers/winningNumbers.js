import React,  {useState, useEffect} from 'react';
import './css/index.css';
import img_loto_mayor from './assets/logo_loto_mayor.png';
import img_logo_mega_millions from './assets/logo_mega_millions.png';
import img_lareal from './assets/lareal.png';
import img_gana from './assets/gana.png';
import img_chance from './assets/chance.png';
import img_megachance from './assets/megachance.png';
import img_pega2 from './assets/pega2.png';
import img_pega3 from './assets/pega3.png';
import img_pega4 from './assets/pega4.png';
import img_pega5 from './assets/pega5.png';

import changeDateAudio from './audio/changeDateAudio.wav';

import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';



function WinningNumbers() {

    const [date, setDate] = useState(new Date());
    const [dateMode, setDateMode] = useState('Hoy');
    const [currentDataIndex, setCurrentDataIndex] = useState(0);
    const [isAnimationFinished, setIsAnimationFinished] = useState(false);
    const [audio] = useState(new Audio(changeDateAudio));
    audio.volume = 0.1;

    const imageImports = {
        'img_lareal': img_lareal,
        'img_gana': img_gana,
        'img_chance': img_chance,
        'img_megachance': img_megachance,
        'img_pega2': img_pega2,
        'img_pega3': img_pega3,
        'img_pega4': img_pega4,
        'img_pega5': img_pega5,
      };

      const options = {
        weekday: 'short', // Short weekday name (e.g., "sab" for Saturday)
        day: 'numeric',   // Day of the month (e.g., "7")
        month: 'long',    // Long month name (e.g., "septiembre")
        year: 'numeric',  // Year (e.g., "2023")
        locale: 'es-ES'   // Spanish locale for Spain
      };

      const playAudio = () => {
        if (!audio.paused) {
            // If the audio is currently playing, pause it and reset to the beginning
            audio.pause();
            audio.currentTime = 0;
          }
          audio.play();
      };


    const [lotteryData, setLotteryData] = useState(
        [
            {
                "th" :[
                    {"label":"La real", "image": 'img_lareal'},
                    {"label":"Gana", "image": 'img_gana'},
                    {"label":"Chance", "image": 'img_chance'},
                    {"label":"Mega chance", "image": 'img_megachance'},
                    {"label":"Pega 2", "image": 'img_pega2'},
                    {"label":"Pega 3", "image": 'img_pega3'},
                    {"label":"Pega 4", "image": 'img_pega4'},
                    {"label":"Pega 5", "image": 'img_pega5'},
                ],
                "tr": [
                    {
        
                        "lottery": "Valle del Cauca AM",
                        "time": "9:00 AM",
                        "lottery_houses": [
                            {
                                "type": "lareal",
                                "separator": "-",
                                "numbers": [
                                    { "value": 67 },
                                    { "value": 68 },
                                ]
                            },
        
                            {
                                "type": "gana",
                                "separator": "-",
                                "numbers": [
                                    { "value": 12 },
                                    { "value": 34 },
                                    { "value": 83 },
                                ]
                            },
        
                            {
                                "type": "chance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 14 },
                                    { "value": 16 },
                                    { "value": 46 },
        
                                ]
                            },
        
        
                            {
                                "type": "megachance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 78 },
                                    { "value": 27 },
                                    { "value": 30 },
                                ]
                            },
                            {
                                "type": "pega2",
                                "separator": "",
                                "numbers": [
                                    { "value": 5 },
                                    { "value": 6 },
                                ]
                            },
                            {
                                "type": "pega3",
                                "separator": "",
                                "numbers": [
                                    { "value": 3 },
                                    { "value": 5 },
                                    { "value": 6 },
                                ]
                            },
                            {
                                "type": "pega4",
                                "separator": "",
                                "numbers": [
                                    { "value": 1 },
                                    { "value": 9 },
                                    { "value": 4 },
                                    { "value": 6 },
                                ]
                            },
                            {
                                "type": "pega5",
                                "separator": "",
                                "numbers": [
                                    { "value": 6 },
                                    { "value": 3 },
                                    { "value": 7 },
                                    { "value": 8 },
                                    { "value": 4 },
                                ]
                            },
        
                        ]
                    },
                    {
        
                        "lottery": "Valle del Cauca PM",
                        "time": "9:00 AM",
                        "lottery_houses": [
                            {
                                "type": "lareal",
                                "separator": "-",
                                "numbers": [
                                    { "value": 67 },
                                    { "value": 68 },
                                ]
                            },
        
                            {
                                "type": "gana",
                                "separator": "-",
                                "numbers": [
                                    { "value": 12 },
                                    { "value": 34 },
                                    { "value": 83 },
                                ]
                            },
        
                            {
                                "type": "chance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 14 },
                                    { "value": 16 },
                                    { "value": 46 },
        
                                ]
                            },
        
        
                            {
                                "type": "megachance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 78 },
                                    { "value": 27 },
                                    { "value": 30 },
                                ]
                            },
                            {
                                "type": "pega2",
                                "separator": "",
                                "numbers": [
                                    { "value": 5 },
                                    { "value": 6 },
                                ]
                            },
                            {
                                "type": "pega3",
                                "separator": "",
                                "numbers": [
                                    { "value": 3 },
                                    { "value": 5 },
                                    { "value": 6 },
                                ]
                            },
                            {
                                "type": "pega4",
                                "separator": "",
                                "numbers": [
                                    { "value": 1 },
                                    { "value": 9 },
                                    { "value": 4 },
                                    { "value": 6 },
                                ]
                            },
                            {
                                "type": "pega5",
                                "separator": "",
                                "numbers": [
                                    { "value": 6 },
                                    { "value": 3 },
                                    { "value": 7 },
                                    { "value": 8 },
                                    { "value": 4 },
                                ]
                            },
        
                        ]
                    },
                    {
        
                        "lottery": "Antioquia AM",
                        "time": "9:00 AM",
                        "lottery_houses": [
                            {
                                "type": "lareal",
                                "separator": "-",
                                "numbers": [
                                    { "value": 67 },
                                    { "value": 68 },
                                ]
                            },
        
                            {
                                "type": "gana",
                                "separator": "-",
                                "numbers": [
                                    { "value": 12 },
                                    { "value": 34 },
                                    { "value": 83 },
                                ]
                            },
        
                            {
                                "type": "chance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 14 },
                                    { "value": 16 },
                                    { "value": 46 },
        
                                ]
                            },
        
        
                            {
                                "type": "megachance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 78 },
                                    { "value": 27 },
                                    { "value": 30 },
                                ]
                            },
                            {
                                "type": "pega2",
                                "separator": "",
                                "numbers": [
                                    { "value": 5 },
                                    { "value": 6 },
                                ]
                            },
                            {
                                "type": "pega3",
                                "separator": "",
                                "numbers": [
                                    { "value": 3 },
                                    { "value": 5 },
                                    { "value": 6 },
                                ]
                            },
                            {
                                "type": "pega4",
                                "separator": "",
                                "numbers": [
                                    { "value": 1 },
                                    { "value": 9 },
                                    { "value": 4 },
                                    { "value": 6 },
                                ]
                            },
                            {
                                "type": "pega5",
                                "separator": "",
                                "numbers": [
                                    { "value": 6 },
                                    { "value": 3 },
                                    { "value": 7 },
                                    { "value": 8 },
                                    { "value": 4 },
                                ]
                            },
        
                        ]
                    },
                    {
        
                        "lottery": "Antioquia PM",
                        "time": "9:00 AM",
                        "lottery_houses": [
                            {
                                "type": "lareal",
                                "separator": "-",
                                "numbers": [
                                    { "value": 67 },
                                    { "value": 68 },
                                ]
                            },
        
                            {
                                "type": "gana",
                                "separator": "-",
                                "numbers": [
                                    { "value": 12 },
                                    { "value": 34 },
                                    { "value": 83 },
                                ]
                            },
        
                            {
                                "type": "chance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 14 },
                                    { "value": 16 },
                                    { "value": 46 },
        
                                ]
                            },
        
        
                            {
                                "type": "megachance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 78 },
                                    { "value": 27 },
                                    { "value": 30 },
                                ]
                            },
                            {
                                "type": "pega2",
                                "separator": "",
                                "numbers": [
                                    { "value": 5 },
                                    { "value": 6 },
                                ]
                            },
                            {
                                "type": "pega3",
                                "separator": "",
                                "numbers": [
                                    { "value": 3 },
                                    { "value": 5 },
                                    { "value": 6 },
                                ]
                            },
                            {
                                "type": "pega4",
                                "separator": "",
                                "numbers": [
                                    { "value": 1 },
                                    { "value": 9 },
                                    { "value": 4 },
                                    { "value": 6 },
                                ]
                            },
                            {
                                "type": "pega5",
                                "separator": "",
                                "numbers": [
                                    { "value": 6 },
                                    { "value": 3 },
                                    { "value": 7 },
                                    { "value": 8 },
                                    { "value": 4 },
                                ]
                            },
        
                        ]
                    },
                    {
        
                        "lottery": "Santander AM",
                        "time": "9:00 AM",
                        "lottery_houses": [
                            {
                                "type": "lareal",
                                "separator": "-",
                                "numbers": [
                                    { "value": 67 },
                                    { "value": 68 },
                                ]
                            },
        
                            {
                                "type": "gana",
                                "separator": "-",
                                "numbers": [
                                    { "value": 12 },
                                    { "value": 34 },
                                    { "value": 83 },
                                ]
                            },
        
                            {
                                "type": "chance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 14 },
                                    { "value": 16 },
                                    { "value": 46 },
        
                                ]
                            },
        
        
                            {
                                "type": "megachance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 78 },
                                    { "value": 27 },
                                    { "value": 30 },
                                ]
                            },
                            {
                                "type": "pega2",
                                "separator": "",
                                "numbers": [
                                    { "value": 5 },
                                    { "value": 6 },
                                ]
                            },
                            {
                                "type": "pega3",
                                "separator": "",
                                "numbers": [
                                    { "value": 3 },
                                    { "value": 5 },
                                    { "value": 6 },
                                ]
                            },
                            {
                                "type": "pega4",
                                "separator": "",
                                "numbers": [
                                    { "value": 1 },
                                    { "value": 9 },
                                    { "value": 4 },
                                    { "value": 6 },
                                ]
                            },
                            {
                                "type": "pega5",
                                "separator": "",
                                "numbers": [
                                    { "value": 6 },
                                    { "value": 3 },
                                    { "value": 7 },
                                    { "value": 8 },
                                    { "value": 4 },
                                ]
                            },
        
                        ]
                    },
                    {
        
                        "lottery": "Santander PM",
                        "time": "9:00 AM",
                        "lottery_houses": [
                            {
                                "type": "lareal",
                                "separator": "-",
                                "numbers": [
                                    { "value": 67 },
                                    { "value": 68 },
                                ]
                            },
        
                            {
                                "type": "gana",
                                "separator": "-",
                                "numbers": [
                                    { "value": 12 },
                                    { "value": 34 },
                                    { "value": 83 },
                                ]
                            },
        
                            {
                                "type": "chance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 14 },
                                    { "value": 16 },
                                    { "value": 46 },
        
                                ]
                            },
        
        
                            {
                                "type": "megachance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 78 },
                                    { "value": 27 },
                                    { "value": 30 },
                                ]
                            },
                            {
                                "type": "pega2",
                                "separator": "",
                                "numbers": [
                                    { "value": 5 },
                                    { "value": 6 },
                                ]
                            },
                            {
                                "type": "pega3",
                                "separator": "",
                                "numbers": [
                                    { "value": 3 },
                                    { "value": 5 },
                                    { "value": 6 },
                                ]
                            },
                            {
                                "type": "pega4",
                                "separator": "",
                                "numbers": [
                                    { "value": 1 },
                                    { "value": 9 },
                                    { "value": 4 },
                                    { "value": 6 },
                                ]
                            },
                            {
                                "type": "pega5",
                                "separator": "",
                                "numbers": [
                                    { "value": 6 },
                                    { "value": 3 },
                                    { "value": 7 },
                                    { "value": 8 },
                                    { "value": 4 },
                                ]
                            },
        
                        ]
                    }
                ]
            },
            {
                "th": [
                    { "label": "La real", "image": 'img_lareal' },
                    { "label": "Gana", "image": 'img_gana' },
                    { "label": "Chance", "image": 'img_chance' },
                    { "label": "Mega chance", "image": 'img_megachance' },
                    { "label": "Pega 2", "image": 'img_pega2' },
                    { "label": "Pega 3", "image": 'img_pega3' },
                    { "label": "Pega 4", "image": 'img_pega4' },
                    { "label": "Pega 5", "image": 'img_pega5' },
                ],
                "tr": [
                    {

                        "lottery": "Valle del Cauca AM",
                        "time": "9:00 AM",
                        "lottery_houses": [
                            {
                                "type": "lareal",
                                "separator": "-",
                                "numbers": [
                                    { "value": 89 },
                                    { "value": 33 },
                                ]
                            },

                            {
                                "type": "gana",
                                "separator": "-",
                                "numbers": [
                                    { "value": 56 },
                                    { "value": 45 },
                                    { "value": 32 },
                                ]
                            },

                            {
                                "type": "chance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 46 },
                                    { "value": 67 },
                                    { "value": 56 },

                                ]
                            },


                            {
                                "type": "megachance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 56 },
                                    { "value": 46 },
                                    { "value": 51 },
                                ]
                            },
                            {
                                "type": "pega2",
                                "separator": "",
                                "numbers": [
                                    { "value": 7 },
                                    { "value": 8 },
                                ]
                            },
                            {
                                "type": "pega3",
                                "separator": "",
                                "numbers": [
                                    { "value": 5 },
                                    { "value": 9 },
                                    { "value": 8 },
                                ]
                            },
                            {
                                "type": "pega4",
                                "separator": "",
                                "numbers": [
                                    { "value": 2 },
                                    { "value": 3 },
                                    { "value": 6 },
                                    { "value": 7 },
                                ]
                            },
                            {
                                "type": "pega5",
                                "separator": "",
                                "numbers": [
                                    { "value": 2 },
                                    { "value": 4 },
                                    { "value": 6 },
                                    { "value": 7 },
                                    { "value": 2 },
                                ]
                            },

                        ]
                    },
                    {

                        "lottery": "Valle del Cauca PM",
                        "time": "9:00 AM",
                        "lottery_houses": [
                            {
                                "type": "lareal",
                                "separator": "-",
                                "numbers": [
                                    { "value": 89 },
                                    { "value": 33 },
                                ]
                            },

                            {
                                "type": "gana",
                                "separator": "-",
                                "numbers": [
                                    { "value": 56 },
                                    { "value": 45 },
                                    { "value": 32 },
                                ]
                            },

                            {
                                "type": "chance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 46 },
                                    { "value": 67 },
                                    { "value": 56 },

                                ]
                            },


                            {
                                "type": "megachance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 56 },
                                    { "value": 46 },
                                    { "value": 51 },
                                ]
                            },
                            {
                                "type": "pega2",
                                "separator": "",
                                "numbers": [
                                    { "value": 7 },
                                    { "value": 8 },
                                ]
                            },
                            {
                                "type": "pega3",
                                "separator": "",
                                "numbers": [
                                    { "value": 5 },
                                    { "value": 9 },
                                    { "value": 8 },
                                ]
                            },
                            {
                                "type": "pega4",
                                "separator": "",
                                "numbers": [
                                    { "value": 2 },
                                    { "value": 3 },
                                    { "value": 6 },
                                    { "value": 7 },
                                ]
                            },
                            {
                                "type": "pega5",
                                "separator": "",
                                "numbers": [
                                    { "value": 2 },
                                    { "value": 4 },
                                    { "value": 6 },
                                    { "value": 7 },
                                    { "value": 2 },
                                ]
                            },

                        ]
                    },
                    {

                        "lottery": "Antioquia AM",
                        "time": "9:00 AM",
                        "lottery_houses": [
                            {
                                "type": "lareal",
                                "separator": "-",
                                "numbers": [
                                    { "value": 89 },
                                    { "value": 33 },
                                ]
                            },

                            {
                                "type": "gana",
                                "separator": "-",
                                "numbers": [
                                    { "value": 56 },
                                    { "value": 45 },
                                    { "value": 32 },
                                ]
                            },

                            {
                                "type": "chance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 46 },
                                    { "value": 67 },
                                    { "value": 56 },

                                ]
                            },


                            {
                                "type": "megachance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 56 },
                                    { "value": 46 },
                                    { "value": 51 },
                                ]
                            },
                            {
                                "type": "pega2",
                                "separator": "",
                                "numbers": [
                                    { "value": 7 },
                                    { "value": 8 },
                                ]
                            },
                            {
                                "type": "pega3",
                                "separator": "",
                                "numbers": [
                                    { "value": 5 },
                                    { "value": 9 },
                                    { "value": 8 },
                                ]
                            },
                            {
                                "type": "pega4",
                                "separator": "",
                                "numbers": [
                                    { "value": 2 },
                                    { "value": 3 },
                                    { "value": 6 },
                                    { "value": 7 },
                                ]
                            },
                            {
                                "type": "pega5",
                                "separator": "",
                                "numbers": [
                                    { "value": 2 },
                                    { "value": 4 },
                                    { "value": 6 },
                                    { "value": 7 },
                                    { "value": 2 },
                                ]
                            },

                        ]
                    },
                    {

                        "lottery": "Antioquia PM",
                        "time": "9:00 AM",
                        "lottery_houses": [
                            {
                                "type": "lareal",
                                "separator": "-",
                                "numbers": [
                                    { "value": 89 },
                                    { "value": 33 },
                                ]
                            },

                            {
                                "type": "gana",
                                "separator": "-",
                                "numbers": [
                                    { "value": 56 },
                                    { "value": 45 },
                                    { "value": 32 },
                                ]
                            },

                            {
                                "type": "chance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 46 },
                                    { "value": 67 },
                                    { "value": 56 },

                                ]
                            },


                            {
                                "type": "megachance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 56 },
                                    { "value": 46 },
                                    { "value": 51 },
                                ]
                            },
                            {
                                "type": "pega2",
                                "separator": "",
                                "numbers": [
                                    { "value": 7 },
                                    { "value": 8 },
                                ]
                            },
                            {
                                "type": "pega3",
                                "separator": "",
                                "numbers": [
                                    { "value": 5 },
                                    { "value": 9 },
                                    { "value": 8 },
                                ]
                            },
                            {
                                "type": "pega4",
                                "separator": "",
                                "numbers": [
                                    { "value": 2 },
                                    { "value": 3 },
                                    { "value": 6 },
                                    { "value": 7 },
                                ]
                            },
                            {
                                "type": "pega5",
                                "separator": "",
                                "numbers": [
                                    { "value": 2 },
                                    { "value": 4 },
                                    { "value": 6 },
                                    { "value": 7 },
                                    { "value": 2 },
                                ]
                            },

                        ]
                    },
                    {

                        "lottery": "Santander AM",
                        "time": "9:00 AM",
                        "lottery_houses": [
                            {
                                "type": "lareal",
                                "separator": "-",
                                "numbers": [
                                    { "value": 89 },
                                    { "value": 33 },
                                ]
                            },

                            {
                                "type": "gana",
                                "separator": "-",
                                "numbers": [
                                    { "value": 56 },
                                    { "value": 45 },
                                    { "value": 32 },
                                ]
                            },

                            {
                                "type": "chance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 46 },
                                    { "value": 67 },
                                    { "value": 56 },

                                ]
                            },


                            {
                                "type": "megachance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 56 },
                                    { "value": 46 },
                                    { "value": 51 },
                                ]
                            },
                            {
                                "type": "pega2",
                                "separator": "",
                                "numbers": [
                                    { "value": 7 },
                                    { "value": 8 },
                                ]
                            },
                            {
                                "type": "pega3",
                                "separator": "",
                                "numbers": [
                                    { "value": 5 },
                                    { "value": 9 },
                                    { "value": 8 },
                                ]
                            },
                            {
                                "type": "pega4",
                                "separator": "",
                                "numbers": [
                                    { "value": 2 },
                                    { "value": 3 },
                                    { "value": 6 },
                                    { "value": 7 },
                                ]
                            },
                            {
                                "type": "pega5",
                                "separator": "",
                                "numbers": [
                                    { "value": 2 },
                                    { "value": 4 },
                                    { "value": 6 },
                                    { "value": 7 },
                                    { "value": 2 },
                                ]
                            },

                        ]
                    },
                    {

                        "lottery": "Santander PM",
                        "time": "9:00 AM",
                        "lottery_houses": [
                            {
                                "type": "lareal",
                                "separator": "-",
                                "numbers": [
                                    { "value": 89 },
                                    { "value": 33 },
                                ]
                            },

                            {
                                "type": "gana",
                                "separator": "-",
                                "numbers": [
                                    { "value": 56 },
                                    { "value": 45 },
                                    { "value": 32 },
                                ]
                            },

                            {
                                "type": "chance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 46 },
                                    { "value": 67 },
                                    { "value": 56 },

                                ]
                            },


                            {
                                "type": "megachance",
                                "separator": "X",
                                "numbers": [
                                    { "value": 56 },
                                    { "value": 46 },
                                    { "value": 51 },
                                ]
                            },
                            {
                                "type": "pega2",
                                "separator": "",
                                "numbers": [
                                    { "value": 7 },
                                    { "value": 8 },
                                ]
                            },
                            {
                                "type": "pega3",
                                "separator": "",
                                "numbers": [
                                    { "value": 5 },
                                    { "value": 9 },
                                    { "value": 8 },
                                ]
                            },
                            {
                                "type": "pega4",
                                "separator": "",
                                "numbers": [
                                    { "value": 2 },
                                    { "value": 3 },
                                    { "value": 6 },
                                    { "value": 7 },
                                ]
                            },
                            {
                                "type": "pega5",
                                "separator": "",
                                "numbers": [
                                    { "value": 2 },
                                    { "value": 4 },
                                    { "value": 6 },
                                    { "value": 7 },
                                    { "value": 2 },
                                ]
                            },

                        ]
                    }
                ]
            }
        ]
       
    );

    const handleDateChange = (newDate) => {
      setDate(newDate);
      setDateMode('');
      setCurrentDataIndex(3);
      playAudio();
    };

    const handleYesterdayClick = () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        setDate(yesterday);
        setDateMode('Ayer');
        setCurrentDataIndex(1);
        playAudio();
    };

    const handleTodayClick = () => {
        setDate(new Date()); // Set the date back to today
        setDateMode('Hoy');
        setCurrentDataIndex(0);
        playAudio();
      };
  
    useEffect(() => {
        const unhideElement = document.querySelector('.ball');
    
        const handleAnimationEnd = () => {
          setIsAnimationFinished(true);
        };
    
        unhideElement.addEventListener('animationend', handleAnimationEnd);
    
        return () => {
          unhideElement.removeEventListener('animationend', handleAnimationEnd);
        };
      }, []);
      
      



  return (
    <div>
        
  <div class="h-48 w-full header-winning-numbers">
    <div class="flex">
      <div class="w-1/3 flex justify-center">
        <img src={img_loto_mayor} class="object-contain h-48 w-48" alt="Logo"/>
      </div>
      <div class="w-2/3 flex">
        <div></div>

        <div class="w-full flex">
       
          <div class="w-1/3">
            <img src={img_logo_mega_millions} class="object-contain h-48 w-48" alt="Logo"/>
          </div>


          <div class="w-2/3 px-4  border-l-2 border-white my-4">
            <div>
              <p class="text-lg font-semibold text-white text-start">Winning Numbers for {date?.toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit', // Use '2-digit' to get leading zeros for months
  day: '2-digit',   // Use '2-digit' to get leading zeros for days
})}</p>
            </div>

            <div class="flex mt-4">
        
              <div class="w-8 h-8 rounded-full bg-white flex justify-center items-center mr-1 mr-1">
                <span class="text-red-500 text-lg font-bold">1</span>
              </div>
              <div class="w-8 h-8 rounded-full bg-white flex justify-center items-center mr-1">
                <span class="text-red-500 text-lg font-bold">43</span>
              </div>
              <div class="w-8 h-8 rounded-full bg-white flex justify-center items-center mr-1">
                <span class="text-red-500 text-lg font-bold">50</span>
              </div>
              <div class="w-8 h-8 rounded-full bg-white flex justify-center items-center mr-1">
                <span class="text-red-500 text-lg font-bold">51</span>
              </div>
              <div class="w-8 h-8 rounded-full bg-white flex justify-center items-center mr-1">
                <span class="text-red-500 text-lg font-bold">65</span>
              </div>
              <div class="w-8 h-8 rounded-full bg-amber-500 flex justify-center items-center mr-1">
                <span class="text-black  text-lg font-bold">1</span>
              </div>
              <div class="">
                <span class="text-white text-lg font-bold">x 2</span>
              </div>
        
            </div>

      

            <div class="mt-4">
              <p class="text-lg text-white text-start">Next Jackpot $122.0 Million</p>
            </div>

            <div class="mt-4">
          
              <div class="flex items-center text-white">
           
                <p>Drawings : Tuesday and Friday</p>
              </div>
    
            </div>

        

          </div>
        </div>
      </div>




    </div>
  


  </div>

  <div class="container mx-auto px-4 sm:px-8 ">
    <div class="py-8">
    <div class="flex flex-col justify-center ">
        <div class="flex-grow border-2 border-white my-4">
        </div>
    </div>


    
  
     <div className="flex justify-between items-center">
        <h2 class="text-2xl font-semibold text-white">Fecha: {dateMode}  {date?.toLocaleDateString('es-ES', options)}</h2>

        <div className="flex space-x-2">
         
            <button  onClick={handleTodayClick} class="btn-hover color-4 raise">Hoy</button>
            <button  onClick={handleYesterdayClick} class="btn-hover color-4 raise">Ayer</button>
                <DatePicker  className={['bg-white','rounded-lg']} onChange={handleDateChange} value={date} />
        </div>
    </div>
    
    



   
      
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="border border-2 order-gray-200 bg-gray-100 px-2 ">
                  Loteria
                </th>
                <th
                  class="border border-2  border-gray-200 bg-gray-100 px-2 ">
                  Hora de cierre
                </th>

                {lotteryData[currentDataIndex]?.th?.map((th_row, index) => (
                    <th key={'th_'+index} class="border px-5 py-3 border-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">

                    <div className="text-center  col-span-8 sm:col-span-5 " >

                        <div className="relative flex flex-col items-center group">
                        <div class="flex"><div class="flex-shrink-0 w-16 h-16"><img class="w-full h-full rounded-full" src={imageImports[th_row.image]} alt="" /></div></div>
                            <div className=" absolute flex flex-col items-center justify-center hidden  group-hover:flex ">
                                <span className="rounded-lg relative z-10  text-lg leading-none text-white whitespace-no-wrap  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl w-24 h-16 flex items-center justify-center">{th_row.label}</span>
                            </div>
                        </div>
                    </div>
                    </th>
                ))}

              </tr>
            </thead>
            <tbody>
            {lotteryData[currentDataIndex]?.tr?.map((tr_row, tr_index) => (
                <tr key={'tr_' + tr_index}>
                    <td
                        class="border-r-2 border-gray-200 bg-gray-100 px-2 ">
                        {tr_row.lottery}
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">{tr_row.time}</p>
                    </td>

                    {tr_row.lottery_houses.map((lottery_house, lottery_index) => (
                        <td key={'lottery_house' + lottery_index} class="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                            <div class="ball-group flex justify-center">
                                {lottery_house.numbers.map((number, index_lottery) => (
                                    <React.Fragment key={lottery_house.type + index_lottery}>
                                        <div key={'ball'+number.value} class="ball"><span class="ball-number text-black">{number.value}</span> </div>
                                        {index_lottery >= 0 && index_lottery < lottery_house.numbers.length - 1 && <span class="text-black px-1">{lottery_house.separator}</span>}
                                    </React.Fragment>
                                ))}
                            </div>

                        </td>

                    ))}


                </tr>

            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default WinningNumbers;
