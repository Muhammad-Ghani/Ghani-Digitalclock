function showTime() {
    return new Promise((resolve) => {
      const date = new Date();
      const h = date.getHours(); // 0 - 23
      const m = date.getMinutes(); // 0 - 59
      const s = date.getSeconds(); // 0 - 59
      const session = "AM";
      
      if(h == 0){
          h = 12;
      }
      
      if(h > 12){
          h = h - 12;
          session = "PM";
      }
      
      const formattedH = (h < 10) ? "0" + h : h;
      const formattedM = (m < 10) ? "0" + m : m;
      const formattedS = (s < 10) ? "0" + s : s;
      
      const time = `${formattedH}:${formattedM}:${formattedS} ${session}`;
      console.log(time);

      
      setTimeout(() => resolve(), 1000);
    });
  }
  
  async function runClock() {
    while (true) {
      await showTime();
    }
  }
  
  runClock();





