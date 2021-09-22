import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// test code
const EventListenerMode = {capture: true};

function preventGlobalMouseEvents () {
  document.body.style['pointer-events'] = 'none';
}

function restoreGlobalMouseEvents () {
  document.body.style['pointer-events'] = 'auto';
}

function mousemoveListener (e) {
  e.stopPropagation ();
  // do whatever is needed while the user is moving the cursor around
}

function mouseupListener (e) {
  restoreGlobalMouseEvents ();
  document.removeEventListener ('mouseup',   mouseupListener,   EventListenerMode);
  document.removeEventListener ('mousemove', mousemoveListener, EventListenerMode);
  e.stopPropagation ();
}

function captureMouseEvents (e) {
  preventGlobalMouseEvents ();
  document.addEventListener ('mouseup',   mouseupListener,   EventListenerMode);
  document.addEventListener ('mousemove', mousemoveListener, EventListenerMode);
  e.preventDefault ();
  e.stopPropagation ();
}

//test code end

createApp(App).use(router).mount('#app')
