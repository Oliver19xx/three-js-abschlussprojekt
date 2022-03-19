export class TimeControl {
  /**
   * -  -1 Rückwärts
   * -  0 Pause DEFAULT
   * -  1 Abspielen
   * -  2 Vorwärts
   * @type {number}
   */
  mode;

  constructor() {
    this.mode = 0;
    document.querySelector('#play-pause-switch').addEventListener('click', function () {
      App.TimeControl.togglePlayPause();
    });
    document.querySelector('#play-forward').addEventListener('click', function () {
      App.TimeControl.fasterForward();
    });
    document.querySelector('#play-backward').addEventListener('click', function () {
      App.TimeControl.fasterBackward();
    });
  }

  fasterForward() {
    this.mode = 2;
  }

  togglePlayPause() {
    this.mode = this.mode === 0 ? 1 : 0;
  }

  fasterBackward() {
    this.mode = -1;
  }
}
