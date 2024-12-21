import 'phaser'
import '@babel/polyfill/noConflict'
import Loader from './scenes/Loader';
import Game from './scenes/Game';
import InputTextPlugin from 'phaser3-rex-plugins/plugins/inputtext-plugin.js';

import PreLoader from './scenes/Preloader';
import { isMobile,isMobileOnly } from 'mobile-device-detect';

import './style.scss';
import { Global } from './objects/global';

let DEFAULT_WIDTH = 1280;
let DEFAULT_HEIGHT = 720;
Global.isMobile=false;//isMobile;
Global.isMobileOnly=isMobile;
Global.viewMode="landscape";
Global.dpr=1;
/* if(isMobile){
  Global.viewMode="portrait";
  DEFAULT_WIDTH = 720;
  DEFAULT_HEIGHT = 1280;
} */






(async () => {

  const game = new Phaser.Game({type: Phaser.CANVAS,
    transparent: false,
    scale: {
      parent: 'game-sec',
      mode: (Global.isMobile)?Phaser.Scale.ENVELOP:Phaser.Scale.ENVELOP,
      autoCenter: Phaser.Scale.CENTER_BOTH,//CENTER_HORIZONTALLY,
      width: DEFAULT_WIDTH,
      height: DEFAULT_HEIGHT
    },
    pixelArt: false,
    dom: {
      createContainer: false
  },
    scene: [PreLoader,Loader,Game],
    physics: {
      default: 'matter',
      matter:{
        gravity: {
          y: 9.8
        },
        debug: false
        
      }
    },
    /* fps: {
        target: 60,
        forceSetTimeOut: true,
        smoothStep:false,
    }, */plugins: {
      
      global: [{
        key: 'rexInputTextPlugin',
        plugin: InputTextPlugin,
        start: true
    }
    // ...
    ],
    scene:[
      {
        key: 'rexDebugDraw',
        plugin: RexPlugins.GameObjects.DebugDrawPlugin,
        start: true
      }
    ]
    }})

})();
