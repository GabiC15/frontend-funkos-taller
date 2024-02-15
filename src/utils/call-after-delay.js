export class CallAfterDelay {
  callFunctionAfterDelay({ functionCall, seconds, functionArgs }) {
    // Si hay un temporizador en ejecución, cancelarlo
    if (this.timer) {
      clearTimeout(this.timer);
    }

    // Establecer un nuevo temporizador
    this.timer = setTimeout(() => functionCall(functionArgs), seconds * 1000);
  }
}
