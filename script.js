 // Color Changing Button Logic
    function changeColor() {
      const btn = document.getElementById("colorButton");
    //   btn.style.background = btn.style.background === "rgb(0, 184, 148)" ? "#ff7675" : "#00b894";

      let random_color = "#";
      const num_possible = "1234567890abcdef";
      for(var i=0;i<6;i++){
        let random = (Math.random()*100)%16;
        let pick_num = num_possible.at(random);
        random_color += pick_num;
      }
      console.log(random_color);
      
      btn.style.background = random_color;

    }

    // Greeting Based on Time
    function showGreeting() {
      const hour = new Date().getHours();
      const min = new Date().getMinutes();
      let greeting = "";

      if (hour < 12) {
        greeting = "Good Morning!";
      } else if (hour < 18) {
        greeting = "Good Afternoon!";
      } else {
        greeting = "Good Evening!";
      }

      const msg = `${greeting} Tushar \nThe Time is - ${hour}:${min}  `;
      alert(msg);
    }

    // Calculator Logic
    function addNumbers() {
      const num1 = parseFloat(document.getElementById("num1").value);
      const num2 = parseFloat(document.getElementById("num2").value);

      if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
      } else {
        const sum = num1 + num2;
        document.getElementById("result").textContent = `Result: ${sum}`;
      }
    }