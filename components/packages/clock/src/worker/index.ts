import { Payload } from './types'

let timer: NodeJS.Timer

self.onmessage = function (message: MessageEvent<Payload>) {
  if (message.data.event === 'start' || message.data.event === 'stop') {
    clearInterval(timer)
  }

  if (message.data.event === 'start') {
    let time = message.data.initialTime

    timer = setInterval(() => {
      time += 1000
      postMessage(time)
    }, 1000)
  }
}
