export function addKeyboardControls() {
  document.addEventListener("keydown", onDocumentKeyDown, false);
}

function onDocumentKeyDown(event) {

  switch (event.code) {
    case 'Space':
      App.TimeControl.togglePlayPause();
      break;
    case 'ArrowLeft':
    case 'KeyA':
      App.TimeControl.fasterBackward();
      break;
    case 'ArrowRight':
    case 'KeyD':
      App.TimeControl.fasterForward();
      break;
    case 'KeyC':
      App.CameraControl.toggleFollowMode();
  }
}
