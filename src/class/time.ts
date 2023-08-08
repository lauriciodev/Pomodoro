export class Time {
  private Time: number = 0;

  startTime() {
    const myTime = new Date("Thu, 01 Jan 1970 00:00:00 GMT");
    console.log(myTime.getSeconds());
  }

  cicleTime() {
    setInterval(() => {
      this.startTime();
    }, 1000);
  }
}
