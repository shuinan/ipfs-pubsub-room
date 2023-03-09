/* eslint-env mocha */
/* eslint max-nested-callbacks: ["error", 5] */

import Room from '../src/index.js'
//const Room = require('ipfs-pubsub-room')
//const IPFS = require('ipfs')
import IPFS from 'ipfs-core/dist/index.min.js'

let ipfs = await IPFS.create({
    repo: "pproom" + Math.random(),
    EXPERIMENTAL: {
      pubsub: true
    },
    config: {
      Addresses: {
        Swarm: config.swarmAddresses || [
          '/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/',
          '/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star/',
          '/dns4/webrtc-star.discovery.libp2p.io/tcp/443/wss/p2p-webrtc-star/'
        ]
      }
    }
  })
  
  
 const roomID = "room"

const room = Room(ipfs, roomID, 'user1')

room.on('peer joined', (peer) => {
  console.log('Peer joined the room', peer)
})

room.on('peer left', (peer) => {
  console.log('Peer left...', peer)
})

// now started to listen to room
room.on('subscribed', () => {
  console.log('Now connected!')
})

room.on('message', (msg) => {
  console.log('received msg: ', msg)
})

room.broadcast(msg);

room.pulishTo('user2', "good");



const room2 = Room(ipfs, roomID, 'user2')

room2.on('peer joined', (peer) => {
  console.log('Peer joined the room', peer)
})

room2.on('peer left', (peer) => {
  console.log('Peer left...', peer)
})

// now started to listen to room
room2.on('subscribed', () => {
  console.log('Now connected!')
})

room2.on('message', (msg) => {
  console.log('received msg: ', msg)
})


