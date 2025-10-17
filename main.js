function loadPage(page) {
    const content = document.getElementById('content');
    if (page === 'chapter1') {
        content.innerHTML = `
            <div id="simple">
                <div class="breadcumb-area">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12 text-center">
                                <div class="breadcumb-content">
                                    <div class="breadcumb-title">
                                        <h4>Chapter 1</h4>
                                    </div>
                                    <ul>
                                        <li><a href="#">ch1</a></li>
                                        <li>Programs</li><br>
                                        <li><a href="#" onclick="loadPage('chapters')">Go To Chapters Page</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content2">
                    <h2>Chapter One Programs</h2><br><br>
                    <div id="home1Button" class="flex-container">
                        <h3>1.Displaying Hello World Statement.</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num1" class="output"></p>
                </div>
            </div><br><br><br><br><br>
        `;
        home1Button.onclick = function() {
            let hellow = "Hello World!";
            const output = document.getElementById('num1');
            output.innerHTML = hellow;
            output.classList.toggle('show');
        };
    }
    
    else if (page === 'chapter2') {
        content.innerHTML = `
            <div id="simple">
                <div class="breadcumb-area">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12 text-center">
                                <div class="breadcumb-content">
                                    <div class="breadcumb-title">
                                        <h4>Chapter 2</h4>
                                    </div>
                                    <ul>
                                        <li><a href="#">ch2</a></li>
                                        <li>Programs</li><br>
                                        <li><a href="#" onclick="loadPage('chapters')">Go To Chapters Page</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content2">
                    <h2>Chapter Two Programs</h2><br><br>
                    <div id="home2Button1" class="flex-container">
                        <h3>1. Number Data Type.</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="num2" class="output"></p>
                    <p id="num3" class="output"></p>
                    
                    <div id="home2Button2" class="flex-container">
                        <h3>2. String Data Type.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="num4" class="output"></p>

                    <div id="home2Button3" class="flex-container">
                        <h3>3. Boolean Data Type.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="num5" class="output"></p>

                    <div id="home2Button4" class="flex-container">
                        <h3>4. Arithmetic Operator.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="num6" class="output"></p>

                    <div id="home2Button5" class="flex-container">
                        <h3>5. Comparison Operators.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="num7" class="output"></p>

                    <div id="home2Button6" class="flex-container">
                        <h3>6. Logical Operator.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="num8" class="output"></p>

                    <div id="home2Button7" class="flex-container">
                        <h3>7. Assignment Operator.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="num9" class="output"></p>

                    <div id="home2Button8" class="flex-container">
                        <h3>8. Ternary Operator.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="num10" class="output"></p>

                    <div id="home2Button9" class="flex-container">
                        <h3>9. String Implicit Conversion.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="num11" class="output"></p>
                </div>
            </div><br><br><br><br><br>
        `;
        home2Button1.onclick = function() {
            let agech2 = 30;
            let price = 19.99;
            const output = document.getElementById('num2');
            output.innerHTML = agech2;
            output.classList.toggle('show');
            const output2 = document.getElementById('num3');
            output2.innerHTML = price;
            output2.classList.toggle('show');
        };
        home2Button2.onclick = function() {
            let namech2 = "Mohammed"
            const output = document.getElementById('num4');
            output.innerHTML = namech2;
            output.classList.toggle('show');
        };
        home2Button3.onclick = function() {
            let vis = true;
            let log = false;
            const output = document.getElementById('num5');
            output.innerHTML = vis;
            output.classList.toggle('show');
        };
        home2Button4.onclick = function() {
            let result = 5 + 3;
            const output = document.getElementById('num6');
            output.innerHTML = result;
            output.classList.toggle('show');
        };
        home2Button5.onclick = function() {
            let isequal = 2 === 3;
            const output = document.getElementById('num7');
            output.innerHTML = isequal;
            output.classList.toggle('show');
        };
        home2Button6.onclick = function() {
            let isTrue = true && false;
            const output = document.getElementById('num8');
            output.innerHTML = isTrue;
            output.classList.toggle('show');
        };
        home2Button7.onclick = function() {
            let count = 20;
            count += 5;
            const output = document.getElementById('num9');
            output.innerHTML = count;
            output.classList.toggle('show');
        };
        home2Button8.onclick = function() {
            let agech2_2 = 20;
            let messa = agech2_2 > 15 ? "Adult" : "Junior";
            const output = document.getElementById('num10');
            output.innerHTML = messa;
            output.classList.toggle('show');
        };
        home2Button9.onclick = function() {
            let agech2_3 = 25;
            let messa2 = `I Am  ${agech2_3}  Years Old.`;
            const output = document.getElementById('num11');
            output.innerHTML = messa2;
            output.classList.toggle('show');
        };
    } 

    else if (page === 'chapter3') {
        content.innerHTML = `
            <div id="simple">
                <div class="breadcumb-area">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12 text-center">
                                <div class="breadcumb-content">
                                    <div class="breadcumb-title">
                                        <h4>Chapter 3</h4>
                                    </div>
                                    <ul>
                                        <li><a href="#">ch3</a></li>
                                        <li>Programs</li><br>
                                        <li><a href="#" onclick="loadPage('chapters')">Go To Chapters Page</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content2">
                    <h2>Chapter Three Programs</h2><br><br>
                    <div id="home3Button1" class="flex-container">
                        <h3>1. Adult Teller.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="num12" class="output"></p>

                    <!-- Predefined "Hide Content" button, hidden by default -->
                    <button id="hideContentButton1" class="custom-hide-button" style="display: none;">Hide Content</button>


                    <div id="home3Button2" class="flex-container">
                        <h3>2. Adult And Minor Teller.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="num13" class="output"></p>
                    <p id="num132" class="output"></p>

                    <!-- Predefined "Hide Content" button, hidden by default -->
                    <button id="hideContentButton2" class="custom-hide-button" style="display: none;">Hide Content</button>

                    <div id="home3Button3" class="flex-container">
                        <h3>3. Grades.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="num14a" class="output"></p>
                    <p id="num14b" class="output"></p>
                    <p id="num14c" class="output"></p>

                    <!-- Predefined "Hide Content" button, hidden by default -->
                    <button id="hideContentButton" class="custom-hide-button" style="display: none;">Hide Content</button>


                    <div id="home3Button4" class="flex-container">
                        <h3>4. Ternary Operator.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="ageOutput" class="output"></p>

                    <!-- Predefined "Hide Content" button, hidden by default -->
                    <button id="hideContentButton4" class="custom-hide-button" style="display: none;">Hide Content</button>


                    <div id="home3Button5" class="flex-container">
                        <h3>5. Days Of The Week (By Letter !(Number).</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="num16a" class="output"></p>
                    <p id="num16b" class="output"></p>
                    <p id="num16c" class="output"></p>

                    <!-- Predefined "Hide Content" button, hidden by default -->
                    <button id="hideContentButton5" class="custom-hide-button" style="display: none;">Hide Content</button>


                    <div id="home3Button6" class="flex-container">
                        <h3>6. Outputting 5 Numbers Using For Loop.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="num17" class="output"></p>

                    <div id="home3Button7" class="flex-container">
                        <h3>7. Outputting 5 Numbers Using While Loop.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="num18" class="output"></p>

                    <div id="home3Button8" class="flex-container">
                        <h3>8. Outputting 5 Numbers Using Do While Loop.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="num19" class="output"></p>

                    <div id="home3Button9" class="flex-container">
                        <h3>9. Break Statement With For Loop.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="num20" class="output"></p>

                    <div id="home3Button10" class="flex-container">
                        <h3>10. Continue Statement With For Loop.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="num21" class="output"></p>

                    <div id="home3Button11" class="flex-container">
                        <h3>11. Nested Loop.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="num22" class="output"></p>

                    <div id="home3Button12" class="flex-container">
                        <h3>12. Multiplication Table.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div><br><br>

                    <p id="num23" class="output"></p>
                </div>
            </div><br><br><br><br><br>
        `;
    
        home3Button1.onclick = function () {
            let age;
        
            // Keep asking for a valid age until it's a number or user cancels
            while (true) {
                age = prompt("Enter Your Age: ");
                
                // If the user clicks "Cancel" (null is returned)
                if (age === null) {
                    return; // Exit the function if "Cancel" is clicked
                }
        
                age = parseInt(age, 10);
        
                // Validate input: check if it's a valid number
                if (!isNaN(age)) {
                    break;  // Exit the loop if the input is a valid number
                }
                
                // If the input is invalid, alert the user and ask again
                alert("Please enter a valid number for age.");
            }
        
            // Clear existing output
            const output = document.getElementById("num12");
            output.classList.remove("show");
        
            // Determine if the user is an adult and display result
            if (age >= 15) {
                const message = "You Are Adult.";
                output.innerHTML = message;
                output.classList.add("show");
        
                // Show "Hide Content" button
                const hideButton = document.getElementById("hideContentButton1");
                hideButton.style.display = "inline-block";
            }
        };                
        // Function to hide content and button
        document.getElementById("hideContentButton1").onclick = function () {
            const output = document.getElementById("num12");
            output.classList.remove("show"); // Hide output
            this.style.display = "none"; // Hide button
        };   
        
        
        home3Button2.onclick = function () {
            let age;
        
            // Keep asking the user for a valid age until it's a number or the user cancels
            while (true) {
                age = prompt("Enter Your Age: ");
                
                // If the user clicks "Cancel" (null is returned)
                if (age === null) {
                    return; // Exit the function if "Cancel" is clicked
                }
        
                age = parseInt(age, 10);
        
                // Validate input: check if it's a valid number
                if (!isNaN(age)) {
                    break;  // Exit the loop if the input is a valid number
                }
        
                // If the input is invalid, alert the user and ask again
                alert("Please enter a valid number for age.");
            }
        
            // Clear existing outputs
            document.getElementById("num13").classList.remove("show");
            document.getElementById("num132").classList.remove("show");
            document.getElementById("hideContentButton2").style.display = "none"; // Hide "Hide Content" button by default
        
            // Determine if the user is an adult or minor and display result
            if (age >= 15) {
                const output = document.getElementById("num13");
                output.innerHTML = "You Are Adult.";
                output.classList.add("show");
            } else {
                const output = document.getElementById("num132");
                output.innerHTML = "You Are A Minor.";
                output.classList.add("show");
            }
        
            // Show the "Hide Content" button after the output is displayed
            document.getElementById("hideContentButton2").style.display = "inline-block";
        };               
        // Function to hide content and button
        document.getElementById("hideContentButton2").onclick = function () {
            document.getElementById("num13").classList.remove("show");
            document.getElementById("num132").classList.remove("show");
            this.style.display = "none"; // Hide button
        };


        document.getElementById("home3Button3").onclick = function () {
            let grad;
        
            // Keep asking the user for a valid grade until it's within the valid range
            while (true) {
                grad = prompt("Enter Your Grade: ");
        
                // Check if the user clicked "Cancel" or closed the prompt
                if (grad === null) {
                    alert("You cancelled the input.");
                    break;  // Exit the loop if user clicked "Cancel"
                }
        
                // Convert the grade to an integer
                grad = parseInt(grad, 10);
        
                // Validate input: check if it's a number and between 0 and 100
                if (!isNaN(grad) && grad >= 0 && grad <= 100) {
                    break;  // Exit the loop if the input is valid
                }
        
                // If the input is invalid, alert the user and ask again
                alert("Please enter a valid grade between 0 and 100.");
            }
        
            // If the user clicked "Cancel", we do not proceed with the rest of the code
            if (grad === null) return;
        
            // Clear existing outputs
            const outputs = document.querySelectorAll(".output");
            outputs.forEach(output => output.classList.remove("show"));
        
            // Determine grade and display result
            let selectedOutput;
            if (grad >= 90) {
                selectedOutput = document.getElementById("num14a");
                selectedOutput.innerHTML = "A";
            } else if (grad >= 80) {
                selectedOutput = document.getElementById("num14b");
                selectedOutput.innerHTML = "B";
            } else {
                selectedOutput = document.getElementById("num14c");
                selectedOutput.innerHTML = "C";
            }
        
            selectedOutput.classList.add("show");
        
            // Show "Hide Content" button
            const hideButton = document.getElementById("hideContentButton");
            hideButton.style.display = "inline-block"; // Make button visible
        
            // Add event listener to hide the content when the "Hide Content" button is clicked
            hideButton.onclick = function () {
                selectedOutput.classList.remove("show"); // Hide the grade output
                hideButton.style.display = "none"; // Hide the "Hide Content" button
            };
        };               
        // Function to hide content and button
        document.getElementById("hideContentButton").onclick = function () {
            const outputs = document.querySelectorAll(".output");
            outputs.forEach(output => output.classList.remove("show")); // Hide outputs
            this.style.display = "none"; // Hide button
        };    

        
        home3Button4.onclick = function() {
            let isadult;
            
            // Keep prompting the user until a valid age is entered or they click "Cancel"
            while (true) {
                let input = prompt("Enter Your Age: ");
                
                // If the user clicks "Cancel" or closes the prompt
                if (input === null) {
                    alert("You cancelled the input.");
                    return;  // Exit the function
                }
        
                // Convert the input to a number
                isadult = parseInt(input, 10);
                
                // Validate the input (should be a number greater than 0)
                if (isNaN(isadult) || isadult <= 0) {
                    alert("Please enter a valid number for age greater than 0.");
                } else {
                    break; // Exit the loop when valid input is received
                }
            }
        
            // Determine if the user is an adult or minor and display the result
            const output = document.getElementById('ageOutput'); 
            
            // Using a ternary operator to display the appropriate message
            output.innerHTML = (isadult >= 15) ? "You Are Adult." : "You Are A Minor.";
            output.classList.add('show'); // Make the output visible
            
            // Show the "Hide Content" button after the output is displayed
            document.getElementById("hideContentButton4").style.display = "inline-block"; 
        };               
        // Function to hide content and button
        document.getElementById("hideContentButton4").onclick = function () {
            document.getElementById("ageOutput").classList.remove('show');
            this.style.display = "none"; // Hide button
        };

        
        home3Button5.onclick = function() {
            let day;
            
            // List of valid days
            const validDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
            
            // Keep prompting the user until a valid day is entered or the prompt is canceled
            while (true) {
                let input = prompt("Enter Any Day Of The Week By Letter !(Number): ");
                
                // If the user clicks "Cancel" or closes the prompt
                if (input === null) {
                    alert("You cancelled the input.");
                    return;  // Exit the function
                }
                
                day = input.toLowerCase();
                
                // Validate input
                if (!day || !isNaN(day) || !validDays.includes(day)) {  // Check if it's a valid day of the week
                    alert("Please enter a valid day of the week (e.g., monday, tuesday, etc.), not a number or invalid string.");
                } else {
                    break; // Exit the loop when valid input is received
                }
            }
        
            // Clear existing outputs
            document.getElementById('num16a').classList.remove('show');
            document.getElementById('num16b').classList.remove('show');
            document.getElementById('num16c').classList.remove('show');
            
            switch (day) {
                case "saturday":
                    let g = "It's the start of the week.";
                    const output = document.getElementById('num16a');
                    output.innerHTML = g;
                    output.classList.add('show');
                    break;
                case "wednesday":
                    let h = "It's almost the weekend.";
                    const output2 = document.getElementById('num16b');
                    output2.innerHTML = h;
                    output2.classList.add('show');
                    break;
                default:
                    let i = "It's a regular day.";
                    const output3 = document.getElementById('num16c');
                    output3.innerHTML = i;
                    output3.classList.add('show');
            }
            
            // Show the "Hide Content" button after the output is displayed
            document.getElementById("hideContentButton5").style.display = "inline-block"; 
        };              
        // Function to hide content and button
        document.getElementById("hideContentButton5").onclick = function () {
            document.getElementById("num16a").classList.remove('show');
            document.getElementById("num16b").classList.remove('show');
            document.getElementById("num16c").classList.remove('show');
            this.style.display = "none"; // Hide button
        };
        

        home3Button6.onclick = function(){
            let output = "";
            for (let i = 1; i <= 5; i++) {
                output += i + "<br>";
            }
            const output2 = document.getElementById('num17');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home3Button7.onclick = function(){
            let output = "";
            let i = 1;
            while (i <= 5) {
                output += i + "<br>";
                i++;
            }
            const output2 = document.getElementById('num18');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home3Button8.onclick = function(){
            let output = "";
            let i2 = 1;
            do {
                output += i2 + "<br>";
                i2++;
            } while (i2 <= 5);
            const output2 = document.getElementById('num19');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home3Button9.onclick = function() {
            let output = "";
            for (let i = 1; i <= 5; i++) {
                if (i === 3) {
                    break;
                }
                output += i + "<br>";
            }
            const output2 = document.getElementById('num20');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home3Button10.onclick = function(){
            let output = "";
            for (let i = 1; i <= 5; i++) {
                if (i === 3) {
                    continue;
                }
                output += i + "<br>";
            }
            const output2 = document.getElementById('num21');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home3Button11.onclick = function(){
            let output = "";
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    output += `(${i}, ${j})<br>`;
                }
            }
            const output2 = document.getElementById('num22');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home3Button12.onclick = function(){
            let output = "";
            const size = 10;
            for (let i = 1; i <= size; i++) {
                for (let j = 1; j <= size; j++) {
                    output += `${i} * ${j} = ${i * j}<br>`;
                }
            }
            const output2 = document.getElementById('num23');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
    }

    else if (page === 'chapter4') {
        content.innerHTML = `
            <div id="simple">
                <div class="breadcumb-area">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12 text-center">
                                <div class="breadcumb-content">
                                    <div class="breadcumb-title">
                                        <h4>Chapter 4</h4>
                                    </div>
                                    <ul>
                                        <li><a href="#">ch4</a></li>
                                        <li>Programs</li><br>
                                        <li><a href="#" onclick="loadPage('chapters')">Go To Chapters Page</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content2">
                    <h2>Chapter Four Programs</h2><br><br>
                    <div id="home4Button1" class="flex-container">
                        <h3>1. Function Without Parameters.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num24" class="output"></p>
            
                    <div id="home4Button2" class="flex-container">
                        <h3>2. Greeting With Parameters.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num25" class="output"></p>
            
                    <div id="home4Button3" class="flex-container">
                        <h3>3. Value Returning Function.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num26" class="output"></p>
            
                    <div id="home4Button4" class="flex-container">
                        <h3>4. Variable Scope.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num27" class="output"></p>
            
                    <div id="home4Button5" class="flex-container">
                        <h3>5. Block Scope.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num28" class="output"></p>
            
                    <div id="home4Button6" class="flex-container">
                        <h3>6. Function Parameters.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num29" class="output"></p>
            
                    <div id="home4Button7" class="flex-container">
                        <h3>7. Arrow Function.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num30" class="output"></p>
            
                    <div id="home4Button8" class="flex-container">
                        <h3>8. Arrow Function 2#.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num31" class="output"></p>
            
                    <div id="home4Button9" class="flex-container">
                        <h3>9. Arrow Function 3#.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num32" class="output"></p>
            
                    <div id="home4Button11" class="flex-container">
                        <h3>10. Anonymous Callback.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num34" class="output"></p>
                </div>
            </div><br><br><br><br><br>
        `;
    
        home4Button1.onclick = function(){
            function hellow() {
                return "Hello world!";
            }
            const output = document.getElementById('num24');
            output.innerHTML = hellow();
            output.classList.toggle('show');
        };
        home4Button2.onclick = function(){
            function greet(name) {
                return `Hello, ${name}`;
            }
            const output = document.getElementById('num25');
            output.innerHTML = greet("Abdullahi Abdiweli Adam");
            output.classList.toggle('show'); 
        };   
        home4Button3.onclick = function(){
            function add(a, b) {
                return a + b;
            }
            const result = add(3, 5);
            const output = document.getElementById('num26');
            output.innerHTML = `The sum is: ${result}`;
            output.classList.toggle('show');
        };   
        home4Button4.onclick = function(){
            var gvariable = "Global Variable: well done";
            function glfunction() {
                var msg = "Local Variable: Local Scope";
                const output = document.getElementById('num27');
                output.innerHTML = msg + "<br>" + gvariable;
                output.classList.toggle('show');
            }
            glfunction();
            document.getElementById('num27').innerHTML += "<br>" + gvariable;
        };   
        home4Button5.onclick = function(){
            let blockvariable = "I'm in block scope";
            const output = document.getElementById('num28');
            if (true) {
                output.innerHTML = blockvariable;
            }
            output.classList.toggle('show');
        };   
        home4Button6.onclick = function(){
            function add(a, b) {
                return a + b;
            }
            const result1 = add(78, 67);
            const output = document.getElementById('num29');
            output.innerHTML = `Result is: ${result1}`;
            output.classList.toggle('show');
        };  
        home4Button7.onclick = function(){
            const sayhelo = () => "hello world";
            const output = document.getElementById('num30');
            output.innerHTML = sayhelo();
            output.classList.toggle('show');
        };   
        home4Button8.onclick = function(){
            const tripleNumber = (number) => number * 3;
            const output = document.getElementById('num31');
            output.innerHTML = `Triple of 3 is: ${tripleNumber(3)}`;
            output.classList.toggle('show');
        };
        home4Button9.onclick = function(){
            const add1 = (a, b) => a + b;
            const output = document.getElementById('num32');
            output.innerHTML = `Sum is: ${add1(8, 9)}`;
            output.classList.toggle('show');
        };
        home4Button11.onclick = function(){
            setTimeout(function() {
                const output = document.getElementById('num34');
                output.innerHTML = "This callback is executed after two seconds!";
                output.classList.toggle('show'); 
            }, 2000);
        };
    }

    else if (page === 'chapter5') {
        content.innerHTML = `
            <div id="simple">
                <div class="breadcumb-area">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12 text-center">
                                <div class="breadcumb-content">
                                    <div class="breadcumb-title">
                                        <h4>Chapter 5</h4>
                                    </div>
                                    <ul>
                                        <li><a href="#">ch5</a></li>
                                        <li>Programs</li><br>
                                        <li><a href="#" onclick="loadPage('chapters')">Go To Chapters Page</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content2">
                    <h2>Chapter Five Programs</h2><br><br>
                    <div id="home5Button1" class="flex-container">
                        <h3>1. Array literal.</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num35" class="output"></p>

                    <div id="home5Button2" class="flex-container">
                        <h3>2. Array constructor</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num36" class="output"></p>

                    <div id="home5Button3" class="flex-container">
                        <h3>3. Empty array with elements added</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num37" class="output"></p>

                    <div id="home5Button4" class="flex-container">
                        <h3>4. Array from a string</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num38" class="output"></p>

                    <div id="home5Button5" class="flex-container">
                        <h3>5. Array with a fixed size</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num39" class="output"></p>

                    <div id="home5Button6" class="flex-container">
                        <h3>6. Spread operator</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num40" class="output"></p>

                    <div id="home5Button7" class="flex-container">
                        <h3>7. Array.of() method</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num41" class="output"></p>

                    <div id="home5Button8" class="flex-container">
                        <h3>8. push() method</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num42" class="output"></p>

                    <div id="home5Button9" class="flex-container">
                        <h3>9. unshift() method</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num43" class="output"></p>

                    <div id="home5Button10" class="flex-container">
                        <h3>10. Updating an element</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num44" class="output"></p>

                    <div id="home5Button11" class="flex-container">
                        <h3>11. pop() method</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num45" class="output"></p>

                    <div id="home5Button12" class="flex-container">
                        <h3>12. shift() method</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num46" class="output"></p>

                    <div id="home5Button13" class="flex-container">
                        <h3>13. splice() method</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num47" class="output"></p>

                    <div id="home5Button14" class="flex-container">
                        <h3>14. For Loop</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num48" class="output"></p>

                    <div id="home5Button15" class="flex-container">
                        <h3>15. ForEach Method</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num49" class="output"></p>

                    <div id="home5Button16" class="flex-container">
                        <h3>16. For...Of Loop</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num50" class="output"></p>

                    <div id="home5Button17" class="flex-container">
                        <h3>17. Map() Method</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num51" class="output"></p>

                    <div id="home5Button18" class="flex-container">
                        <h3>18. Accessisng Index With ForEach</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num52" class="output"></p>

                    <div id="home5Button19" class="flex-container">
                        <h3>19. Accessing Elements In Multidimensional Array</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num53" class="output"></p>

                    <div id="home5Button20" class="flex-container">
                        <h3>20. Iterating Through Multidimensional Array</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num54" class="output"></p>

                    <div id="home5Button21" class="flex-container">
                        <h3>21. object literal notation</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num55" class="output"></p>

                    <div id="home5Button22" class="flex-container">
                        <h3>22. constructor function</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num56" class="output"></p>

                    <div id="home5Button23" class="flex-container">
                        <h3>23. Class Syantax</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num57" class="output"></p>

                    <div id="home5Button24" class="flex-container">
                        <h3>24. accessing object properties</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num58" class="output"></p>

                    <div id="home5Button25" class="flex-container">
                        <h3>25. adding and modifying properties</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num59" class="output"></p>

                    <div id="home5Button26" class="flex-container">
                        <h3>26. methods in object</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num60" class="output"></p>

                    <div id="home5Button27" class="flex-container">
                        <h3>27. object iteration</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num61" class="output"></p>

                    <div id="home5Button28" class="flex-container">
                        <h3>28. key and value results from literal object</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num62" class="output"></p>

                    <div id="home5Button29" class="flex-container">
                        <h3>29. JSON syntax</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num63" class="output"></p>

                    <div id="home5Button30" class="flex-container">
                        <h3>30. JSON with Array</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num64" class="output"></p>

                    <div id="home5Button31" class="flex-container">
                        <h3>31. Parsing Json Into Javascript Object</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num65" class="output"></p>

                    <div id="home5Button32" class="flex-container">
                        <h3>32. Converting Objects Into Json Strings</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num66" class="output"></p>

                    <div id="home5Button33" class="flex-container">
                        <h3>33. filter() Example</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num67" class="output"></p>

                    <div id="home5Button34" class="flex-container">
                        <h3>34. reduce() Example</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num68" class="output"></p>

                    <div id="home5Button35" class="flex-container">
                        <h3>35. some() Example</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num69" class="output"></p>

                    <div id="home5Button36" class="flex-container">
                        <h3>36. every() Example</h3>
                        <button  class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num70" class="output"></p>
                </div>
            </div><br><br><br><br><br>
        `;
        home5Button1.onclick = function() {
            let names = ["Ahmed", "Mohammed", "Ali"];
            const output = document.getElementById('num35');
            output.innerHTML = names;
            output.classList.toggle('show');
        };
        home5Button2.onclick = function() {
            const names2 = new Array("Ahmed", "Mohammed", "Ali");
            const output = document.getElementById('num36');
            output.innerHTML = names2;
            output.classList.toggle('show');
        };
        home5Button3.onclick = function() {
            const myArray = [];
            myArray[0] = "first";
            myArray[1] = "second";
            const output = document.getElementById('num37');
            output.innerHTML = myArray;
            output.classList.toggle('show');
        };
        home5Button4.onclick = function() {
            const arrayFrom = Array.from("hellow");
            const output = document.getElementById('num38');
            output.innerHTML = arrayFrom;
            output.classList.toggle('show');
        };
        home5Button5.onclick = function() {
            const newArray = new Array(3);
            const output = document.getElementById('num39');
            output.innerHTML = newArray;
            output.classList.toggle('show');
        };
        home5Button6.onclick = function() {
            const sourceArray = [1, 2, 3];
            const newArray2 = [...sourceArray];
            const output = document.getElementById('num40');
            output.innerHTML = newArray2;
            output.classList.toggle('show');
        };
        home5Button7.onclick = function() {
            const myArray2 = Array.of(1, 2, 3);
            const output = document.getElementById('num41');
            output.innerHTML = myArray2;
            output.classList.toggle('show');
        };
        home5Button8.onclick = function() {
            const fruits = ["apple", "Mango"];
            fruits.push("mango");
            const output = document.getElementById('num42');
            output.innerHTML = fruits;
            output.classList.toggle('show');
        };
        home5Button9.onclick = function() {
            const fruits2 = ["apple", "Mango"];
            fruits2.unshift("mango");
            const output = document.getElementById('num43');
            output.innerHTML = fruits2;
            output.classList.toggle('show');
        };
        home5Button10.onclick = function() {
            const fruits3 = ["apple", "Mango"];
            fruits3[1] = "mango";
            const output = document.getElementById('num44');
            output.innerHTML = fruits3;
            output.classList.toggle('show');
        };
        home5Button11.onclick = function() {
            const fruits4 = ["apple", "Mango", "cherry"];
            fruits4.pop();
            const output = document.getElementById('num45');
            output.innerHTML = fruits4;
            output.classList.toggle('show');
        };
        home5Button12.onclick = function() {
            const fruits5 = ["apple", "Mango", "cherry"];
            fruits5.shift();
            const output = document.getElementById('num46');
            output.innerHTML = fruits5;
            output.classList.toggle('show');
        };
        home5Button13.onclick = function() {
            const fruits6 = ["apple", "Mango", "cherry", "tomato"];
            fruits6.splice(1, 2); 
            const output = document.getElementById('num47');
            output.innerHTML = fruits6;
            output.classList.toggle('show');
        };
        home5Button14.onclick = function() {
            let output = "";
            const fruits7 = ["apple", "banana", "mango"];
            for (let i = 0; i < fruits7.length; i++) {
                output += fruits7[i] + "<br>";
            }
            const output2 = document.getElementById('num48');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home5Button15.onclick = function() {
            let output = "";
            const fruits8 = ["apple", "banana", "mango"];
            fruits8.forEach(function(fruit) {
                output += fruit + "<br>";
            });
            const output2 = document.getElementById('num49');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home5Button16.onclick = function() {
            let output = "";
            const fruits9 = ["apple", "banana", "mango"];
            for (const fruit of fruits9) {
                output += fruit + "<br>";
            }
            const output2 = document.getElementById('num50');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home5Button17.onclick = function() {
            const numbers = [1, 2, 3];
            const sqrnum = numbers.map((num) => num * num).join("<br>");
            const output2 = document.getElementById('num51');
            output2.innerHTML = sqrnum;
            output2.classList.toggle('show');
        };
        home5Button18.onclick = function() {
            let output = "";
            const fruits10 = ["apple", "banana", "mango"];
            fruits10.forEach((fruit, index) => {
                output += `Fruit at index ${index} is ${fruit}<br>`;
            });
            const output2 = document.getElementById('num52');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home5Button19.onclick = function() {
            const matrix = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ];
            const elementarr = matrix[1][2];
            const output2 = document.getElementById('num53');
            output2.innerHTML = elementarr;
            output2.classList.toggle('show');
        };
        home5Button20.onclick = function() {
            let output = "";
            const matrix = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ];
            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix[row].length; col++) {
                    output += matrix[row][col] + "<br>";
                }
            }
            const output2 = document.getElementById('num54');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home5Button21.onclick = function() {
            let output = "";
            const Person = {
                firstname: "mohammed",
                lastname: "ali",
                age: 30,
            };
            output = `First Name: ${Person.firstname}<br>Last Name: ${Person.lastname}<br>Age: ${Person.age}`;
            const output2 = document.getElementById('num55');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home5Button22.onclick = function() {
            let output = "";
            function person2(firstname, lastname, age) {
                this.firstname = firstname;
                this.lastname = lastname;
                this.age = age;
            }
            const person3 = new person2("mohammed", "ali", 30);
            output = `First Name: ${person3.firstname}<br>Last Name: ${person3.lastname}<br>Age: ${person3.age}`;
            const output2 = document.getElementById('num56');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home5Button23.onclick = function() {
            let output = "";
            class person4 {
                constructor(firstname, lastname, age) {
                    this.firstname = firstname;
                    this.lastname = lastname;
                    this.age = age;
                }
            }
            const person5 = new person4("mohammed", "ali", 30);
            output = `First Name: ${person5.firstname}<br>Last Name: ${person5.lastname}<br>Age: ${person5.age}`;
            const output2 = document.getElementById('num57');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home5Button24.onclick = function() {
            let output = "";
            const person5 = {
                firstname: "mohammed",
                lastname: "ali",
                age: 30
            };
            output += `First Name: ${person5.firstname}<br>`;
            output += `Last Name: ${person5["lastname"]}<br>`;
            const output2 = document.getElementById('num58');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home5Button25.onclick = function() {
            let output = "";
            const person5 = {
                firstname: "mohammed",
                lastname: "ali",
                age: 30
            };
            person5.email = "mohame@gmail.com";
            person5.age = 31;
            output = `First Name: ${person5.firstname}<br>Last Name: ${person5.lastname}<br>Age: ${person5.age}<br>Email: ${person5.email}`;
            const output2 = document.getElementById('num59');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home5Button26.onclick = function() {
            let output = "";
            const persons = {
                firstname: "mohammed",
                lastname: "ali",
                getfullname: function() {
                    return this.firstname + " " + this.lastname;
                },
            };
            output = `Full Name: ${persons.getfullname()}`;
            const output2 = document.getElementById('num60');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home5Button27.onclick = function() {
            let output = "";
            const persons = {
                firstname: "mohammed",
                lastname: "ali",
                age: 30
            };
            for (const key in persons) {
                output += `${key}: ${persons[key]}<br>`;
            }
            const output2 = document.getElementById('num61');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home5Button28.onclick = function() {
            let output = "";
            const student = {
                name: "Abdullahi",
                edu_level: "bachelor",
                gra_status: "active"
            };
            for (let index in student) {
                output += `${index}: ${student[index]}<br>`;
            }
            const output2 = document.getElementById('num62');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };  
        home5Button29.onclick = function() {
            let output = "";
            const test = {
                name: "mohamed",
                age: 30,
                city: "mogadishu"
            };
            for (let key in test) {
                output += `${key}: ${test[key]}<br>`;
            }
            const output2 = document.getElementById('num63');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home5Button30.onclick = function() {
            let output = "";
            const test2 = {
                person: {
                    name: "mohammed ali",
                    age: 30
                },
                hobbies: ["reciting quran", "praying", "reading", "swimming"]
            };
            output += `Name: ${test2.person.name}<br>Age: ${test2.person.age}<br>`;
            output += `Hobbies: ${test2.hobbies.join(", ")}`;
            const output2 = document.getElementById('num64');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home5Button31.onclick = function() {
            let output = "";
            const jsonstring = '{"name": "mohamed ali", "age": 30}';
            const jsonobject = JSON.parse(jsonstring);
            output = `Name: ${jsonobject.name}<br>Age: ${jsonobject.age}`;
            const output2 = document.getElementById('num65');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home5Button32.onclick = function() {
            let output = "";
            const person = { name: "mohamed ali", age: 30 };
            const jsonString = JSON.stringify(person);
            output = `JSON String: ${jsonString}`;
            const output2 = document.getElementById('num66');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home5Button33.onclick = function() {
            let output = "";
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const evenNumbers = numbers.filter(number => number % 2 === 0);
            output = `Even Numbers: ${evenNumbers.join(", ")}`;
            const output2 = document.getElementById('num67');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home5Button34.onclick = function() {
            let output = "";
            const numbers = [1, 2, 3, 4, 5];
            const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            output = `Sum of Numbers: ${sum}`;
            const output2 = document.getElementById('num68');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home5Button35.onclick = function() {
            let output = "";
            const numbers = [1, 2, 3, 4, 5];
            const hasGreaterThanFour = numbers.some(number => number > 4);
            output = `Is there a number greater than 4? ${hasGreaterThanFour}`;
            const output2 = document.getElementById('num69');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
        home5Button36.onclick = function() {
            let output = "";
            const numbers = [2, 4, 6, 8];
            const allEven = numbers.every(number => number % 2 === 0);
            output = `Are all numbers even? ${allEven}`;
            const output2 = document.getElementById('num70');
            output2.innerHTML = output;
            output2.classList.toggle('show');
        };
    }

    else if (page === "chapter6") {
        content.innerHTML = `
            <div id="simple">
                <div class="breadcumb-area">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12 text-center">
                                <div class="breadcumb-content">
                                    <div class="breadcumb-title">
                                        <h4>Chapter 6</h4>
                                    </div>
                                    <ul>
                                        <li><a href="#">ch6</a></li>
                                        <li>Programs</li><br>
                                        <li><a href="#" onclick="loadPage('chapters')">Go To Chapters Page</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content2">
                    <h2>Chapter Six Programs</h2><br><br>
                    <div id="home6Button1" class="flex-container">
                        <h3>1. Change Font And Background Color Using JavaScript (Id).</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num71" class="output6">This Is a Paragraph within the container</p>
            
                    <div id="home6Button12" class="flex-container">
                        <h3>2. Change Border Style of Boxes Using JavaScript.</h3>
                        <button id="home6Button2" class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p class="output6_2">This Is the content of the box</p>
                    <p class="output6_2">Another paragraph content</p>

                    <div id="home6Button3" class="flex-container">
                        <h3>3. Single Element Query Selector.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num80" class="output6_3"></p>

                    <div id="home6Button4" class="flex-container">
                        <h3>4. All Element Query Selector.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="num81" class="output6_3"></p>

                    <div id="home6Button7" class="flex-container">
                        <h3>5. Removing The Text Decoration Using JavaScript.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <a class="output6" href="" id="mylink">This is the link!</a>
            
                    <div id="home6Button8" class="flex-container">
                        <h3>6. Set The Text Of Paragraph Element Or P Tag.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="paragraph" class="output6"></p>
            
                    <div id="home6Button9" class="flex-container">
                        <h3>7. Set The Class Name Anchor Element.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <a id="my_link" href="" class="output6">The text decoration removed by attribute that created as setattribute</a>

                    <div id="home6ButtonReplace" class="flex-container">
                        <h3>8. Replace an Element Using JavaScript</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="pragraph" class="output6">This is the old text of this paragraph</p>
                </div>
            </div><br><br><br><br><br>
         `;
        home6Button1.onclick = function () {
            const output = document.getElementById("num71");
            output.classList.toggle("show");
    
            output.style.background = "blue";
            output.style.color = "white";
            output.style.margin = "10px";
            output.style.fontFamily = "serif";
        };
        home6Button2.onclick = function () {
            const outputs = document.getElementsByClassName("output6_2");
    
            for (let i = 0; i < outputs.length; i++) {
                const output = outputs[i];
                output.style.border = "3px dashed black";
                output.classList.toggle("show");
            }
        };
        home6Button3.onclick = function () {
            const output = document.getElementById("num80");
            output.innerHTML = `
                <p>This is the original first paragraph.</p>
                <p>This is the second paragraph.</p>
                <p>This is the third paragraph.</p>
            `;
            output.classList.toggle("show");
            const firstParagraph = output.querySelector("p"); 
            if (firstParagraph) {
                firstParagraph.style.display = "block";
                firstParagraph.style.background = "brown";
                firstParagraph.style.color = "white";
                firstParagraph.style.padding = "10px";
                firstParagraph.style.borderRadius = "10px";
            }
        };
        home6Button4.onclick = function () {
            const output = document.getElementById("num81");
            output.innerHTML = `
                <p>This is the original first paragraph.</p>
                <p>This is the second paragraph.</p>
                <p>This is the third paragraph.</p>
            `;
            output.classList.toggle("show");
            const allBoxes = output.querySelectorAll("p");
            allBoxes.forEach((box) => {
                box.style.display = "block";
                box.style.background = "gold";
                box.style.color = "black";
                box.style.margin = "10px";
                box.style.padding = "10px";
                box.style.borderRadius = "10px";
            });
        };
        home6Button7.onclick = function () {
            const output = document.getElementById("mylink");
            output.classList.toggle("show");
            output.style.textDecoration = "none";
        };
        home6Button8.onclick = function () {
            let pra = document.getElementById("paragraph");
            pra.innerText = "Setting p tag text using innertext property";
            pra.textContent = "Setting p tag text using textcontent property";
            pra.classList.toggle("show");
        };
        home6Button9.onclick = function () {
            const link = document.getElementById("my_link");
            if (link.classList.contains("show")) {
                link.style.textDecoration = "underline";
                link.innerText = "The text decoration restored!";
            } else {
                link.style.textDecoration = "none";
                link.innerText = "The text decoration removed!";
            }
            link.classList.toggle("show");
        };
        home6ButtonReplace.onclick = function () {
            const old_element = document.getElementById("pragraph");
            const isShowing = old_element.classList.contains("show");
            if (isShowing) {
                old_element.innerText = "This is the old text of this paragraph";
            } else {
                old_element.innerText = "This is the new paragraph element";
            }
            old_element.classList.toggle("show");
        };
    }

    else if (page === "chapter7") {
        content.innerHTML = `
            <div id="simple">
                <div class="breadcumb-area">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12 text-center">
                                <div class="breadcumb-content">
                                    <div class="breadcumb-title">
                                        <h4>Chapter 7</h4>
                                    </div>
                                    <ul>
                                        <li><a href="#">ch7</a></li>
                                        <li>Programs</li><br>
                                        <li><a href="#" onclick="loadPage('chapters')">Go To Chapters Page</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content2">
                    <h2>Chapter Seven Programs</h2><br><br>
                    
                    <!-- Event Listener -->
                    <div id="home7Button1" class="flex-container">
                        <h3>1. Event Listener</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="output1" class="output6_2"></p>
            
                    <!-- Inline Event Handler -->
                    <div id="home7Button2" class="flex-container">
                        <h3>2. Inline Event Handler</h3>
                        <button onclick="func()" class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p id="output2" class="output6_2"></p>
            
                    <!-- Mouse Events -->
                    <div id="home7Button3" class="flex-container">
                        <h3>3. Mouse Events</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <div id="myel" class="output6_2" style="display: none;">Hover Over Me</div>
            
                    <!-- Keyboard Events -->
                    <div id="home7Button4" class="flex-container">
                        <h3>4. Keyboard Events</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <input type="text" id="text" class="output6_2" placeholder="Type Something">
                    <div id="output4" class="output6_2"></div>
            
                    <!-- Focus Events -->
                    <div id="home7Button5" class="flex-container">
                        <h3>5. Focus Events</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <input type="text" id="text2" class="output6_2" placeholder="Type Something">
                    <div id="output5" class="output6_2"></div>
            
                    <!-- Form Focus Events -->
                    <div id="home7Button6" class="flex-container">
                        <h3>6. Focus Element in Form</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <form id="myform" class="output6_2">
                        <input type="text" id="textinp" placeholder="Type Something">
                        <button type="submit" class="custom-button">Submit</button>
                    </form>
                    <div id="foutput" class="output6"></div>
            
                    <!-- Event Delegation -->
                    <div id="home7Button7" class="flex-container">
                        <h3>7. Event Delegation</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <ul id="parentList" class="output6">
                        <li class="li">Item 1</li>
                        <li class="li">Item 2</li>
                        <li class="li">Item 3</li>
                        <li class="li">Item 4</li>
                    </ul>
                </div>
            </div><br><br><br><br><br>
        `;
        home7Button1.onclick = function () {
            const output = document.getElementById("output1");
            output.classList.toggle("show");
            alert("Button Clicked using Event Listener!");
        };
        func = function () {
            const output = document.getElementById("output2");
            output.classList.toggle("show");
            alert("Button Clicked using Inline Event Handler!");
        };
        // Mouse Events
        home7Button3.onclick = function () {
            const output = document.getElementById("myel");
            if (output.style.display === "none" || output.style.display === "") {
                output.style.display = "block";
            } else {
                output.style.display = "none";
            }
            output.addEventListener("mouseover", function () {
                output.style.backgroundColor = "green";
            });
            output.addEventListener("mouseout", function () {
                output.style.backgroundColor = "blue";
            });
        };
        // Keyboard Events
        home7Button4.onclick = function () {
            const input = document.getElementById("text");
            input.classList.toggle("show");
            const output = document.getElementById("output4");
            output.classList.toggle("show");
            input.addEventListener("keydown", function (event) {
                output.innerText = `Keydown: ${event.key}`;
            });
            input.addEventListener("keypress", function (event) {
                output.innerText += `\nKeypress: ${event.key}`;
            });
            input.addEventListener("keyup", function (event) {
                output.innerText += `\nKeyup: ${event.key}`;
            });
        };
        home7Button5.onclick = function () {
            const input = document.getElementById("text2");
            input.classList.toggle("show");
            const output = document.getElementById("output5");
            output.classList.toggle("show");
            input.addEventListener("focus", function (){
                updateOutput("Element Focused","focused");
            });
            input.addEventListener("blur", function (){
                updateOutput("Element Blured","blurred");
            });
            function updateOutput(message , className){
                output.innerText = message;
                output.className = className;
            }
            if (output.classList.contains("show")) {
                output.innerText = "";
            }
        };
        home7Button6.onclick = function () {
            const textinp = document.getElementById("textinp");
            const outdiv = document.getElementById("foutput");
            const form = document.getElementById("myform");
            form.classList.toggle("show")
            textinp.addEventListener("input", function () {
                if (textinp.value != "") {
                    updateOutput2("input changed!", "valid");
                } else {
                    updateOutput2("input changed with empty!", "invalid");
                }
            });
            form.addEventListener("submit", function (event) {
                event.preventDefault();
                updateOutput2("form submitted!", "valid");
            });
            function updateOutput2(message2, classname2) {
                outdiv.innerText = message2;
                outdiv.className = classname2;
            }
            if (!outdiv.classList.contains("show")) {
                outdiv.innerText = "";
            }
        };
        home7Button7.onclick = function () {
            const list = document.getElementById("parentList");
            list.classList.toggle("show");
        };
        const parentList = document.getElementById("parentList");
        parentList.addEventListener("click", function (event) {
            if (event.target.tagName === "LI") {
                alert("Clicked on: " + event.target.innerText);
            }
        });
    }

    else if (page === 'chapter8') {
        content.innerHTML = `
            <div id="simple">
                <div class="breadcumb-area">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12 text-center">
                                <div class="breadcumb-content">
                                    <div class="breadcumb-title">
                                        <h4>Chapter 8</h4>
                                    </div>
                                    <ul>
                                        <li><a href="#">ch8</a></li>
                                        <li>Programs</li><br>
                                        <li><a href="#" onclick="loadPage('chapters')">Go To Chapters Page</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content2">
                    <h2>Chapter Eight Programs</h2><br><br>
                    <div id="home8Button1" class="flex-container">
                        <h3>1. My first Bootstrap.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <div class="output6_2" id="ch8_1" class="container">
                        <h1>My first Bootstrap</h1>
                        <p>This is some text.</p>
                    </div>
            
                    <div id="home8Button2" class="flex-container">
                        <h3>2. Border, Dark, and Primary Backgrounds</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <div class="output8" id="ch8_4">
                        <div class="container p-5 my-5 border">
                            <h1>This is the border bootstrap</h1>
                        </div>
                        <div class="container p-5 my-5 bg-dark text-white">
                            <h1>This is a dark background</h1>
                        </div>
                        <div class="container p-5 my-5 bg-primary text-white">
                            <h1>This is the primary text</h1>
                        </div>
                    </div>

                    <div id="home8Button3" class="flex-container">
                        <h3>3. Columns As Flex</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <div class="output8" id="ch8_5" class="container pt-5">
                        <div class="row">
                            <div class="col-sm-4 bg-dark text-white">Column 1</div>
                            <div class="col-sm-4 bg-primary text-white">Column 1</div>
                            <div class="col-sm-4 bg-secondary text-white">Column 1</div>
                        </div>
                    </div>

                    <div id="home8Button4" class="flex-container">
                        <h3>4. Some Types Of Text</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <div class="output8" id="ch8_6" class="container">
                        <div class="row">
                            <p class="text-muted">This text is muted</p>
                            <p class="text-primary">This text is important</p>
                            <p class="text-success">This text indicates success</p>
                            <p class="text-info">This text reprensents some information</p>
                            <p class="text-warning">This text represents a warninig</p>
                            <p class="text-danger">This text represents danger</p>
                            <p class="text-secondary">This text is secondary text</p>
                            <p class="text-dark">This text is dark grey</p>
                            <p class="text-body">This is body text</p>
                            <p class="text-light">This text is light grey</p>
                        </div>
                    </div>

                    <div id="home8Button5" class="flex-container">
                        <h3>5. Basic Table In Booststrap</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <div class="output8" id="ch8_7" class="container mt-3">
                        <div class="row">
                            <h2>Basic Table</h2>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Firstname</th>
                                        <th>Lastname</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mohammed</td>
                                        <td>Abdi</td>
                                        <td>.com</td>
                                    </tr>
                                    <tr>
                                        <td>Maryan</td>
                                        <td>Ali</td>
                                        <td>.com</td>
                                    </tr>
                                    <tr>
                                        <td>Hussein</td>
                                        <td>Elmi</td>
                                        <td>.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div id="home8Button6" class="flex-container">
                        <h3>6. Rounded, Circle and Thumbnail Images</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <div class="output8" id="ch8_8" class="container">
                        <img width="30%" src="dolphin.jpg" class="rounded" alt="">

                        <img width="30%" src="dolphin.jpg" class="rounded-circle" alt="">

                        <img width="30%" src="dolphin.jpg" class="img-thumbnail" alt="">
                    </div>

                    <div id="home8Button7" class="flex-container">
                        <h3>7. Alerts</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <div class="output8" id="ch8_9">
                        <div class="alert alert-success">
                            <strong>Success!</strong>Indicates a successful or positive action
                        </div>
                        <div class="alert alert-info">
                            <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
                        </div>
                        <div class="alert alert-warning">
                            <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
                        </div>
                        <div class="alert alert-danger">
                            <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
                        </div>
                        <div class="alert alert-primary">
                            <strong>Primary!</strong> Indicates an important action.
                        </div>
                        <div class="alert alert-secondary">
                            <strong>Secondary!</strong> Indicates a slightly less important action.
                        </div>
                        <div class="alert alert-dark">
                            <strong>Dark!</strong> Dark grey alert.
                        </div>
                        <div class="alert alert-light">
                            <strong>Light!</strong> Light grey alert.
                        </div>
                    </div>

                    <div id="home8Button77" class="flex-container">
                        <h3>7.2. Closing Alerts</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <div class="output8" id="ch8_90">
                        <div class="alert alert-success alert-dismissible">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Success!</strong> This alert box could indicate a successful or positive action.
                        </div>
                        <div class="alert alert-info alert-dismissible">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
                        </div>
                        <div class="alert alert-warning alert-dismissible">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
                        </div>
                        <div class="alert alert-danger alert-dismissible">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
                        </div>
                        <div class="alert alert-primary alert-dismissible">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Primary!</strong> Indicates an important action.
                        </div>
                        <div class="alert alert-secondary alert-dismissible">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Secondary!</strong> Indicates a slightly less important action.
                        </div>
                        <div class="alert alert-dark alert-dismissible">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Dark!</strong> Dark grey alert.
                        </div>
                        <div class="alert alert-light alert-dismissible">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Light!</strong> Light grey alert.
                        </div>
                    </div>

                    <div id="home8Button8" class="flex-container">
                        <h3>8. Buttons</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <div class="output8" id="ch8_10" class="">
                        <button type="button" class="btn">Basic</button>
                        <button type="button" class="btn btn-primary">Primary</button>
                        <button type="button" class="btn btn-secondary">secondary</button>
                        <button type="button" class="btn btn-success">Success</button>
                        <button type="button" class="btn btn-info">Information</button>
                        <button type="button" class="btn btn-warning">Warning</button>
                        <button type="button" class="btn btn-danger">Danger</button>
                        <button type="button" class="btn btn-dark">Dark</button>
                        <button type="button" class="btn btn-light">Light</button>
                        <button type="button" class="btn btn-link">Link</button>
                    </div>

                    <div id="home8Button9" class="flex-container">
                        <h3>9. Buttons Outline</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <div class="output8" id="ch8_11" class="">
                        <button type="button" class="btn btn-outline-primary">Primary</button>
                        <button type="button" class="btn btn-outline-secondary">secondary</button>
                        <button type="button" class="btn btn-outline-success">Success</button>
                        <button type="button" class="btn btn-outline-info">Information</button>
                        <button type="button" class="btn btn-outline-warning">Warning</button>
                        <button type="button" class="btn btn-outline-danger">Danger</button>
                        <button type="button" class="btn btn-outline-dark">Dark</button>
                        <button type="button" class="btn btn-outline-light">Light</button>
                        <button type="button" class="btn btn-outline-link">Link</button>
                    </div>

                    <div id="home8Button10" class="flex-container">
                        <h3>10. Spinners</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <div class="output8" id="ch8_12" class="container">
                        <div class="spinner-border text-muted"></div>
                        <div class="spinner-border text-primary"></div>
                        <div class="spinner-border text-success"></div>
                        <div class="spinner-border text-info"></div>
                        <div class="spinner-border text-warning"></div>
                        <div class="spinner-border text-danger"></div>
                        <div class="spinner-border text-secondary"></div>
                        <div class="spinner-border text-dark"></div>
                        <div class="spinner-border text-light"></div>
                    </div>

                    <div id="home8Button11" class="flex-container">
                        <h3>11. Responsive Navbar</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <div class="output8" id="ch8_13" class="">
                        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                            <div class="container-fluid">
                                <a href="" class="navbar-brand">LOGO</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="mynavbar">
                                    <ul class="navbar-nav me-auto">
                                        <li class="nav-item">
                                            <a href="" class="nav-link">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="" class="nav-link">About</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="" class="nav-link">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div id="home8Button13" class="flex-container">
                        <h3>12. Validation Form</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <div class="output8" id="ch8_15" class="container">
                        <div id="body">
                            <div class="form-container">
                                <h2 class="text-center mb-4">Registration Form</h2>
                                <form id="registrationForm" novalidate>
                                    <div class="mb-3">
                                        <label for="username" class="form-label">Username</label>
                                        <input type="text" class="form-control" id="username" placeholder="Enter username" required>
                                        <div class="error" id="usernameError"></div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="email" placeholder="Enter email" required>
                                        <div class="error" id="emailError"></div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="password" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="password" placeholder="Enter password" required>
                                        <div class="error" id="passwordError"></div>
                                    </div>
                                    <button type="submit" class="btn w-100">Register</button>
                                </form>
                                <div class="form-footer">
                                    <a href="" id="forgotPassword">Forgot Password?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br><br><br><br><br>
        `;
        home8Button1.onclick = function() {
            const output = document.getElementById('ch8_1');
            output.classList.toggle('show');
        };
        home8Button2.onclick = function() {
            const output = document.getElementById('ch8_4');
            output.classList.toggle('show');
        };
        home8Button3.onclick = function() {
            const output = document.getElementById('ch8_5');
            output.classList.toggle('show'); 
        };
        home8Button4.onclick = function() {
            const output = document.getElementById('ch8_6');
            output.classList.toggle('show'); 
        };
        home8Button5.onclick = function() {
            const output = document.getElementById('ch8_7');
            output.classList.toggle('show'); 
        };
        home8Button6.onclick = function() {
            const output = document.getElementById('ch8_8');
            output.classList.toggle('show'); 
        };
        home8Button7.onclick = function() {
            const output = document.getElementById('ch8_9');
            output.classList.toggle('show'); 
        };
        home8Button77.onclick = function() {
            const output = document.getElementById('ch8_90');
            output.classList.toggle('show'); 
        };
        home8Button8.onclick = function() {
            const output = document.getElementById('ch8_10');
            output.classList.toggle('show'); 
        };
        home8Button9.onclick = function() {
            const output = document.getElementById('ch8_11');
            output.classList.toggle('show'); 
        };
        home8Button10.onclick = function() {
            const output = document.getElementById('ch8_12');
            output.classList.toggle('show'); 
        };
        home8Button11.onclick = function() {
            const output = document.getElementById('ch8_13');
            output.classList.toggle('show'); 
        };
        home8Button13.onclick = function() {
            const output = document.getElementById('ch8_15');
            output.classList.toggle('show'); 
            document.getElementById('registrationForm').addEventListener('submit', function(event) {
                event.preventDefault();
                let isValid = true;
            
                // Clear previous errors
                document.getElementById('usernameError').textContent = '';
                document.getElementById('emailError').textContent = '';
                document.getElementById('passwordError').textContent = '';
            
                // Validate username
                const username = document.getElementById('username').value.trim();
                if (username.length < 3) {
                    document.getElementById('usernameError').textContent = 'Username must be at least 3 characters long.';
                    isValid = false;
                }
            
                // Validate email
                const email = document.getElementById('email').value.trim();
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
                    isValid = false;
                }
            
                // Validate password
                const password = document.getElementById('password').value;
                if (password.length < 6) {
                    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
                    isValid = false;
                }
            
                // Submit form if valid
                if (isValid) {
                    alert('Form submitted successfully!');
        
                    // Clear form inputs after submission
                    document.getElementById('registrationForm').reset();
                }
            });
        };   
    }
    
    else if (page === 'lab') {
        content.innerHTML = `
            <div id="simple">
                <div class="breadcumb-area2">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12 text-center">
                                <div class="breadcumb-content">
                                    <div class="breadcumb-title">
                                        <h4>Lab</h4>
                                    </div>
                                    <ul>
                                        <li><a href="#">lab</a></li>
                                        <li>Programs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content2">
                    <h2>Lab Programs</h2>
                    <div id="lab1" class="flex-container">
                        <h3>1. Writing My Name In One Line.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>
                        <p id="outputLab1" class="output"></p>


                    <div id="lab2" class="flex-container">
                        <h3>2. What I Do In My Day.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="outputLab2" class="output"></p>

                    <!-- Hide Content Button -->
                    <button id="hideContentButtonLab2" style="display: none;" class="custom-button">Hide Content</button>



                    <div id="lab3" class="flex-container">
                        <h3>3. Calculator Program.</h3>
                        <button class="custom-button">Click To Display <i class="fas fa-arrow-right"></i></button>
                    </div>

                    <p id="outputLab3" class="output"></p>

                    <!-- Hide Content Button -->
                    <button id="hideContentButtonLab3" style="display: none;" class="custom-button">Hide Content</button>

                </div>
            </div><br><br><br><br><br>
        `;
    
        lab1.onclick = function(){
            const output = document.getElementById('outputLab1');
            output.innerHTML = "Abdullahi<br>Abdiweli<br>Adam";
            output.classList.toggle('show'); 
        };
    
        document.getElementById("lab2").onclick = function() {
            let hour;
        
            // Keep asking the user until a valid hour is entered or canceled
            while (true) {
                let input = prompt("Please enter the hour of the day (0-23):");
        
                // If the user clicks "Cancel" or closes the prompt
                if (input === null) {
                    alert("You cancelled the input.");
                    return;  // Exit the function
                }
        
                hour = parseInt(input, 10);
        
                // Validate if the input is a number and within the valid range (0-23)
                if (!isNaN(hour) && hour >= 0 && hour < 24) {
                    break;  // Exit the loop when valid input is received
                } else {
                    alert("Please enter a valid hour between 0 and 23.");
                }
            }
        
            const output = document.getElementById('outputLab2');
            let activity;
        
            switch (true) {
                case (hour >= 5 && hour < 6):
                    activity = "Fajr Prayer: Performing the early morning prayer.";
                    break;
                case (hour >= 6 && hour < 7):
                    activity = "Morning Duas & Quran Recitation: Spending time in remembrance and reading Quran.";
                    break;
                case (hour >= 7 && hour < 9):
                    activity = "Breakfast & Getting Ready: Having breakfast and preparing for the day.";
                    break;
                case (hour >= 9 && hour < 12):
                    activity = "Work/Study: Focusing on work or studies.";
                    break;
                case (hour >= 12 && hour < 13):
                    activity = "Dhuhr Prayer: Midday prayer and taking a short break.";
                    break;
                case (hour >= 13 && hour < 16):
                    activity = "Work/Study: Continuing with work or studies.";
                    break;
                case (hour >= 16 && hour < 17):
                    activity = "Asr Prayer: Late afternoon prayer and short rest.";
                    break;
                case (hour >= 17 && hour < 19):
                    activity = "Free Time: Relaxing, spending time with family, or personal activities.";
                    break;
                case (hour >= 19 && hour < 20):
                    activity = "Maghrib Prayer & Dinner: Sunset prayer followed by evening meal.";
                    break;
                case (hour >= 20 && hour < 21):
                    activity = "Isha Prayer: Final prayer of the day.";
                    break;
                case (hour >= 21 && hour < 22):
                    activity = "Family Time/Reading: Spending time with family or reading.";
                    break;
                case (hour >= 22 || hour < 5):
                    activity = "Sleep: Resting for the night.";
                    break;
                default:
                    activity = "Unknown time: Please enter a valid hour (0-23).";
            }
        
            output.innerHTML = activity;
            output.classList.add('show'); // Show the output
        
            // Show the "Hide Content" button after the output is displayed
            document.getElementById("hideContentButtonLab2").style.display = "inline-block"; 
        
            // Disable the "Click To Display" button to prevent further clicks
            document.querySelector(".custom-button").disabled = true; // Disabling it after it's clicked
        };
        // Hide content functionality for "Hide Content" button
        document.getElementById("hideContentButtonLab2").onclick = function() {
            const output = document.getElementById('outputLab2');
            output.classList.remove('show'); // Hide the output
            document.getElementById("hideContentButtonLab2").style.display = "none"; // Hide the "Hide Content" button
        
            // Re-enable the "Click To Display" button after hiding the content
            document.querySelector(".custom-button").disabled = false; // Enable the button again
        };
        
    
        document.getElementById("lab3").onclick = function() {
            const output = document.getElementById('outputLab3');
            
            let num1, num2, operator;
            
            // Prompt and validate first number
            while (true) {
                num1 = parseFloat(prompt("Enter the first number:"));
                
                // If user cancels the prompt (null), stop
                if (num1 === null) {
                    alert("You cancelled the input.");
                    return;
                }
        
                // Check if the entered value is a valid number
                if (!isNaN(num1)) {
                    break;
                } else {
                    alert("Please enter a valid number.");
                }
            }
        
            // Prompt and validate second number
            while (true) {
                num2 = parseFloat(prompt("Enter the second number:"));
                
                // If user cancels the prompt (null), stop
                if (num2 === null) {
                    alert("You cancelled the input.");
                    return;
                }
        
                // Check if the entered value is a valid number
                if (!isNaN(num2)) {
                    break;
                } else {
                    alert("Please enter a valid number.");
                }
            }
        
            // Prompt for the operator
            while (true) {
                operator = prompt("Choose an operation (+, -, *, /):");
                
                // If user cancels the prompt (null), stop
                if (operator === null) {
                    alert("You cancelled the input.");
                    return;
                }
        
                // Check if the operator is valid
                if (["+", "-", "*", "/"].includes(operator)) {
                    break;
                } else {
                    alert("Please choose a valid operator (+, -, *, /).");
                }
            }
            
            let result;
            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        output.innerHTML = "Error: Division by zero is not allowed.";
                        return;
                    }
                    break;
            }
        
            output.innerHTML = `Result: ${num1} ${operator} ${num2} = ${result}`;
            output.classList.add('show'); // Show the result
            
            // Show the "Hide Content" button after displaying the result
            document.getElementById("hideContentButtonLab3").style.display = "inline-block"; 
            
            // Disable the "Click To Display" button to prevent further clicks
            document.querySelector(".custom-button").disabled = true;
        };
        // Hide content functionality for "Hide Content" button
        document.getElementById("hideContentButtonLab3").onclick = function() {
            const output = document.getElementById('outputLab3');
            output.classList.remove('show'); // Hide the output
            document.getElementById("hideContentButtonLab3").style.display = "none"; // Hide the "Hide Content" button
            
            // Re-enable the "Click To Display" button after hiding the content
            document.querySelector(".custom-button").disabled = false; // Enable the button again
        };
        
    }
     
    else if (page === 'assignment1') {
        content.innerHTML = `
            <div id="simple">
                <div class="breadcumb-area3">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12 text-center">
                                <div class="breadcumb-content">
                                    <div class="breadcumb-title">
                                        <h4>Assignment 1</h4>
                                    </div>
                                    <ul>
                                        <li><a href="#">Assi..1</a></li>
                                        <li>Programs</li><br>
                                        <li><a href="#" onclick="loadPage('Assignments')">Go To Assignments Page</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content2">
                    <div class="container2">
                        <h1>Main Menu</h1>
                        <button id="menu" class="menu-item" class="custom-button" onclick="menu()">Show Menu</button>
                        <button class="menu-item exit-button" onclick="alert('Goodbye!');">Exit</button>
                    </div>
                </div>
            </div><br><br><br><br><br>
        `;

        menu.onclick = function() {
        //-----------------------------------Examples------------------------------------
        //******************************selections****************************** */
        function adult(){
            alert("|1 : Adult Teller|");
            let age = parseInt(prompt("Enter You Age : "),10);
            if (age >= 15){
                alert("You Are Adult.")
            }
        }

        function adultAndMinor(){
            alert("|2 : Adult And Minor Teller|");
            let age = parseInt(prompt("Enter You Age : "),10);
            if (age >= 15){
                alert("You Are Adult.")
            }
            else{
                alert("You Are A Minor.")
            }
        }

        function grade(){
            alert("|3 : Grades|");
            let grad = parseInt(prompt("Enter Your Grade: "),10);
            if (grad >= 90){
                alert("A");
            }
            else if (grad >= 80){
                alert("B")
            }
            else{
                alert("C")
            }
        }

        function ternary(){
            alert("|4 : Ternary Operator|");
            let isadult = parseInt(prompt("Enter Your Age : "));
            isadult >= 15 ? true : false;
            alert(isadult);
        }

        function switches(){
            alert("|5 : Days Of The Week|");
            let day = prompt("Enter Any Day Of The Week: ");
            switch (day){
                case "saturday":
                    alert("it's the start of the week.")
                    break;
                case "wednesday":
                    alert("it's almost weekend.")
                    break;
                default:
                    alert("it's regular day.")
            }
        }
        //******************************iteratons****************************** */
        function out5num (){
            alert("|6 : Outputing 5 Num Using For Loop|");
            for (let i = 1; i <= 5; i++){
                alert(i);
            }
        }

        function out5numwhile (){
            alert("|7 : Outputing 5 Num Using While Loop|");
            let i = 1;
            while(i <= 5){
                alert(i);
                i++;
            }
        }

        function out5numDo (){
            alert("|8 : Outputing 5 Num Using Do While Loop|");
            let i = 1;
            do{
                alert(i);
                i++;
            }
            while(i <= 5)
        }

        function BreakFor (){
            alert("|9 : Break Satement With For Loop|");
            for (let i = 1; i <= 5; i++){
                if(i === 3){
                    break;
                }
                alert(i);
            }
        }

        function ContinueFor (){
            alert("|10 : Continue Satement With For Loop|");
            for (let i = 1; i <= 5; i++){
                if(i === 3){
                    continue;
                }
                alert(i);
            }
        }

        function nestedloop (){
            alert("|11 : Nested Loop|");
            for (let i = 0; i < 3; i++){
                for (let j = 0; j < 3; j++){
                    alert(`(${i}, ${j})`);
                }
            }
        }

        function multiplication (){
            alert("|12 : Multiplication Table|");
            const size = 10;
            for(let i = 1; i <= size; i++){
                for(let j = 1; j <= size; j++){
                    const product = i * j;
                    alert(`${i} * ${j} = ${product}`);
                }
            }
        }


        // Functions for the different program choices
        //---------------------------------C++ Codes To JS-------------------------------
        function numbe() {
            alert("|1 : If Statements|");
            let nmber = parseInt(prompt("Enter An Integer: "), 10);
            if (nmber > 0) {
                alert("You Entered a Positive Integer: " + nmber);
            }
            alert("This Statement Is Always Executed.");
        }

        function numbE() {
            alert("|2 : If...Else Statements|");
            let nmber = parseInt(prompt("Enter An Integer: "), 10);
            if (nmber > 0) {
                alert("You Entered a Positive Integer: " + nmber);
            } else {
                alert("You Entered A Negative Number: " + nmber);
            }
            alert("This Statement Is Always Executed.");
        }

        function out() {
            alert("|3 : Odd Or Even Numbers|");
            let num = parseInt(prompt("Enter a Number: "), 10);
            if (num % 2 === 0) {
                alert("It is an even number");
            } else {
                alert("It is an odd number");
            }
        }

        function printing() {
            alert("|1 : Printing Number From 1 To 5|");
            let output = "Using For Loop\n";
            for (let i = 1; i <= 5; ++i) {
                output += i + " ";
            }
            alert(output);
        }

        function disp() {
            alert("|2 : Display A Text 5 Times|");
            let output = "Using For Loop\n";
            for (let i = 1; i <= 5; ++i) {
                output += "Hello World!\n";
            }
            alert(output);
        }

        function natural() {
            alert("|3 : Sum Of First Natural Numbers|");
            let Nub = parseInt(prompt("Enter A Positive Integer: "), 10);
            let Sub = 0;
            for (let count = 1; count <= Nub; ++count) {
                Sub += count;
            }
            alert("Sum = " + Sub);
        }

        function print() {
            alert("|4 : Displaying Number From 1 To 5|");
            let output = "Using While Loop\n";
            let i = 1;
            while (i <= 5) {
                output += i + " ";
                ++i;
            }
            alert(output);
        }

        function pos() {
            alert("|5 : Sum Of Positive Numbers|");
            let number = 0;
            let summ = 0;
            while (number >= 0) {
                number = parseInt(prompt("Enter A Number: "), 10);
                summ += number;
            }
            alert("The Sum Is: " + summ);
        }

        function only() {
            alert("|6 : Sum Of Positive Numbers do..while|");
            let s = 0;
            let u = 0;
            do {
                u = parseInt(prompt("Enter A Positive Number: "), 10);
                if (u > 0) {
                    s += u;
                }
            } while (u >= 0);
            alert("The sum is: " + s);
        }

        function brf() {
            alert("|7 : Break With For Loop|");
            let output = "";
            for (let i = 1; i <= 5; i++) {
                if (i === 3) {
                    break;
                }
                output += i + "\n";
            }
            alert(output);
        }

        function brw() {
            alert("|8 : Break With While Loop|");
            let sum = 0;
            let number;
            while (true) {
                number = parseInt(prompt("Enter A Number: "), 10);
                if (number < 0) {
                    break;
                }
                sum += number;
            }
            alert("The Sum Is: " + sum);
        }

        function cof() {
            alert("|9 : Continue With For Loop|");
            let output = "";
            for (let i = 1; i <= 5; i++) {
                if (i === 3) {
                    continue;
                }
                output += i + "\n";
            }
            alert(output);
        }

        function cow() {
            alert("|10 : Continue With While Loop|");
            let sum = 0;
            let number = 0;
            while (number >= 0) {
                number = parseInt(prompt("Enter A Number: "), 10);
                if (number > 50) {
                    alert("The Number Is Greater Than 50 And Won't Be Calculated.");
                    number = 0;
                    continue;
                }
                sum += number;
            }
            alert("The Sum Is: " + sum);
        }

        function con() {
            alert("|11 : Continue With Nested Loop|");
            let output = "";
            for (let i = 1; i <= 3; i++) {
                for (let j = 1; j <= 3; j++) {
                    if (j === 2) {
                        continue;
                    }
                    output += "i= " + i + " , j= " + j + "\n";
                }
            }
            alert(output);
        }

        function gto() {
            alert("|12 : Goto Statement|");
            let sum = 0;
            let n = parseInt(prompt("Maximum number Of Inputs: "), 10);
            let i;
            for (i = 1; i <= n; ++i) {
                let num = parseFloat(prompt("Enter n " + i + ": "));
                if (num < 0.0) {
                    break;
                }
                sum += num;
            }
            let average = sum / (i - 1);
            alert("Average = " + average);
        }

        // Main menu

        function menu() {
            let nummenu;
            do {
                alert("M E N U\n'''''''''\n1. Examples Programs\n2. Discien Programs\n3. Iteration Programs\n4. Exit");
                nummenu = parseInt(prompt("Choose The Number That You Want From This Menu: "), 10);

                switch (nummenu) {
                    case 1:
                        Examples();
                        break;
                    case 2:
                        discienMenu();
                        break;
                    case 3:
                        iterationMenu();
                        break;
                    case 4:
                        alert("Program Has Finished! Good Bye");
                        return;
                    default:
                        alert("Sorry! This Number Is Not In This Section");
                        break;
                }
            } while (nummenu !== 4);
        }
        menu();

        function Examples() {
            let num2;
            do {
                alert("1. Examples Programs\n1: Adult Teller\n2: Adult And Minor Teller\n3: Grades\n4: Ternary Operator\n5: Days Of The Week\n6: Outputing 5 Num Using For Loop\n7: Outputing 5 Num Using While Loop\n8: Outputing 5 Num Using Do While Loop\n9: Break Satement With For Loop\n10: Continue Satement With For Loop\n11: Nested Loop\n12: Multiplication Table\n13: Back To Menu");
                num2 = parseInt(prompt("Choice The Number Of The Code That You Want To See: "), 10);

                switch (num2) {
                    case 1:
                        adult();
                        break;
                    case 2:
                        adultAndMinor();
                        break;
                    case 3:
                        grade();
                        break;
                    case 4:
                        ternary();
                        break;
                    case 5:
                        switches();
                        break;
                    case 6:
                        out5num ();
                        break;
                    case 7:
                        out5numwhile ();
                        break;
                    case 8:
                        out5numDo ();
                        break;
                    case 9:
                        BreakFor ();
                        break;
                    case 10:
                        ContinueFor ();
                        break;
                    case 11:
                        nestedloop ();
                        break;
                    case 12:
                        multiplication();
                        break;
                    case 13:
                        return;
                    default:
                        alert("Sorry! This Number Is Not In This Section");
                        break;
                }
            } while (prompt("Do You Want To Do It Again? (Y / N): ").toLowerCase() === 'y');
        }


        function discienMenu() {
            let num3;
            do {
                alert("1. Discien Programs\n1: If Statements\n2: If...Else Statements\n3: Odd Or Even Numbers\n4: Back To Menu");
                num3 = parseInt(prompt("Choice The Number Of The Code That You Want To See: "), 10);

                switch (num3) {
                    case 1:
                        numbe();
                        break;
                    case 2:
                        numbE();
                        break;
                    case 3:
                        out();
                        break;
                    case 4:
                        return;
                    default:
                        alert("Sorry! This Number Is Not In This Section");
                        break;
                }
            } while (prompt("Do You Want To Do It Again? (Y / N): ").toLowerCase() === 'y');
        }

        function iterationMenu() {
            let num4;
            do {
                alert("2. Iteration Programs\n1: Printing Number From 1 To 5\n2: Display A Text 5 Times\n3: Sum Of First Natural Numbers\n4: Displaying Number From 1 To 5\n5: Sum Of Positive Numbers\n6: Sum Of Positive Numbers do..while\n7: Break With For Loop\n8: Break With While Loop\n9: Continue With For Loop\n10: Continue With While Loop\n11: Continue With Nested Loop\n12: Goto Statement\n13: Back To Menu");
                num4 = parseInt(prompt("Choice The Number Of The Code That You Want To See: "), 10);

                switch (num4) {
                    case 1:
                        printing();
                        break;
                    case 2:
                        disp();
                        break;
                    case 3:
                        natural();
                        break;
                    case 4:
                        print();
                        break;
                    case 5:
                        pos();
                        break;
                    case 6:
                        only();
                        break;
                    case 7:
                        brf();
                        break;
                    case 8:
                        brw();
                        break;
                    case 9:
                        cof();
                        break;
                    case 10:
                        cow();
                        break;
                    case 11:
                        con();
                        break;
                    case 12:
                        gto();
                        break;
                    case 13:
                        return;
                    default:
                        alert("Sorry! This Number Is Not In This Section");
                        break;
                }
            } while (prompt("Do You Want To Do It Again? (Y / N): ").toLowerCase() === 'y');
        }

        };
    } 

    else if (page === 'assignment2') {
        content.innerHTML = `
            <div id="simple">
                <div class="breadcumb-area3">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12 text-center">
                                <div class="breadcumb-content">
                                    <div class="breadcumb-title">
                                        <h4>Assignment 2</h4>
                                    </div>
                                    <ul>
                                        <li><a href="#">Assi..2</a></li>
                                        <li>Programs</li><br>
                                        <li><a href="#" onclick="loadPage('Assignments')">Go To Assignments Page</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content2">
                    <div id="info">
                        <div class="name">Name: Abdullahi Abdiweli Adam <br> ID: CS1400767</div>
                    </div>
                    <div id="output"></div>
                </div>
            </div><br><br><br><br><br>
        `;
    
        // Perform calculations immediately
        // 1. Arithmetic Operators
        let a = 15;
        let b = 10;
        let sum = a + b;        
        let difference = a - b; 
        let product = a * b;    
        let quotient = a / b;   
        let remainder = a % b;  
    
        // 2. Assignment Operators
        let x = 10;
        x += 5;  let Add = x;
        x -= 3;  let Subtract = x;
        x *= 2;  let Multiply = x;
        x /= 4;  let Divide = x;
        x %= 2;  let Modulus = x;
    
        // 3. Comparison Operators
        let isEqual = (a == b);         
        let isNotEqual = (a != b);      
        let isGreater = (a > b);        
        let isLess = (a < b);           
        let isGreaterOrEqual = (a >= b);
        let isLessOrEqual = (a <= b);   
    
        // 4. Logical Operators
        let isTrue = (a > 0 && b > 0);  
        let isFalse = (a < 0 || b < 0); 
        let isNot = !(a > 0);           

        document.getElementById("output").innerHTML = `
            <h2 class="h2">Arithmetic Operators</h2>
            <h3 class="center">A = 15, B = 10</h3>
            <p class="p">Sum: ${sum}</p>
            <p class="p">Difference: ${difference}</p>
            <p class="p">Product: ${product}</p>
            <p class="p">Quotient: ${quotient}</p>
            <p class="p">Remainder: ${remainder}</p>
    
            <h2 class="h2">Assignment Operators</h2>
            <h3 class="center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X = 10</h3>
            <p class="p">x after += 5: ${Add}</p>
            <p class="p">x after -= 3: ${Subtract}</p>
            <p class="p">x after *= 2: ${Multiply}</p>
            <p class="p">x after /= 4: ${Divide}</p>
            <p class="p">x after %= 2: ${Modulus}</p>
    
            <h2 class="h2">Comparison Operators</h2>
            <h3 class="center">A = 15, B = 10</h3>
            <p class="p">Is Equal: ${isEqual}</p>
            <p class="p">Is Not Equal: ${isNotEqual}</p>
            <p class="p">Is Greater: ${isGreater}</p>
            <p class="p">Is Less: ${isLess}</p>
            <p class="p">Is Greater or Equal: ${isGreaterOrEqual}</p>
            <p class="p">Is Less or Equal: ${isLessOrEqual}</p>
    
            <h2 class="h2">Logical Operators</h2>
            <h3 class="center">A = 15, B = 10</h3>
            <p class="p">AND Operator (a > 0 && b > 0): ${isTrue}</p>
            <p class="p">OR Operator (a < 0 || b < 0): ${isFalse}</p>
            <p class="p">NOT Operator !(a > 0): ${isNot}</p>
        `; 
    }
    
    else if (page === 'about') {
        content.innerHTML = `
            <div id="simple">
                <div class="breadcumb-area5">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12 text-center">
                                <div class="breadcumb-content">
                                    <div class="breadcumb-title">
                                        <h4>About Us Page</h4>
                                    </div>
                                    <ul>
                                        <li><a href="#">About</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Team" class="team-area">
                    <div class="container">
                        <div class="row">
                        <div class="col-lg-12 text-center">
                                <div class="section-title">
                                    <h4>Our Team</h4>
                                    <h1>Meet Our Dedicated Members</h1>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="single-team-box">
                                    <div class="single-team-thumb">
                                        <img src="aboutimg me.png" width="100%" alt="">
                                    </div>
                                    <div class="team-content">
                                        <h4>Abdullahi Abdiweli Adam</h4>
                                        <p>Member Of Group 19</p>
                                        <p id="paragraph_about">I’m Abdullahi Abdiweli Adam, a web developer and designer currently studying Computer 
                                            Science And IT at Jazeera University in Mogadishu. My instructor, Jamila Hassan Mohammed, 
                                            has guided me in Matriculate my skills in web development, helping me create dynamic and 
                                            interactive digital projects.
                                        </p>
                                        <div class="skills-section">
                                            <h2>My Skills</h2>
                                            <div class="skills">
                                                <div class="skill">
                                                    <h3>HTML</h3>
                                                    <div class="skill-bar" style="width: 90%;"></div>
                                                </div>
                                                <div class="skill">
                                                    <h3>CSS</h3>
                                                    <div class="skill-bar" style="width: 85%;"></div>
                                                </div>
                                                <div class="skill">
                                                    <h3>JavaScript</h3>
                                                    <div class="skill-bar" style="width: 80%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="team-social-icon">
                                            <ul>
                                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>			
                            <div class="col-lg-6 col-md-6">
                                <div class="single-team-box">
                                    <div class="single-team-thumb">
                                        <img src="aboutimg fitax.png" width="100%" alt="">
                                    </div>
                                    <div class="team-content">
                                        <h4>Abdifitah Abdiqadir Mohammed</h4>
                                        <p>Member Of Group 19</p>
                                        <p id="paragraph_about">I’m Abdifitax, a web developer and designer currently studying Computer 
                                            Science And IT at Jazeera University in Mogadishu. My instructor, Jamila Hassan Mohammed, 
                                            has guided me in Matriculate my skills in web development, helping me create dynamic and 
                                            interactive digital projects.
                                        </p>
                                        <div class="skills-section">
                                            <h2>My Skills</h2>
                                            <div class="skills">
                                                <div class="skill">
                                                    <h3>HTML</h3>
                                                    <div class="skill-bar" style="width: 90%;"></div>
                                                </div>
                                                <div class="skill">
                                                    <h3>CSS</h3>
                                                    <div class="skill-bar" style="width: 85%;"></div>
                                                </div>
                                                <div class="skill">
                                                    <h3>JavaScript</h3>
                                                    <div class="skill-bar" style="width: 80%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="team-social-icon">
                                            <ul>
                                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    else if (page === 'quiz'){
        content.innerHTML = `
            <div id="simple">
                <div class="breadcumb-area4">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12 text-center">
                                <div class="breadcumb-content">
                                    <div class="breadcumb-title">
                                        <h4>Quiz Page</h4>
                                    </div>
                                    <ul>
                                        <li><a href="#">Quiz</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="conten">
                    <div class="start_btn">
                    <button>Start Quiz</button>
                </div>
            
                <!-- info box -->
                <div class="info_box">
                    <div class="info_title">
                        <span>Some Rules of this Quiz</span>
                    </div>
                    <div class="info_list">
                        <div class="info">1. You will have only <span>15 seconds </span> per each question</div>
                        <div class="info">2. Once you select your answer, you can't reselect.</div>
                        <div class="info">3. You can't select any option once time goes off.</div>
                        <div class="info">4. you can't exit from the Quiz while you're playing.</div>
                        <div class="info">5. you'll get points on the basis of your correct answer</div>
                    </div>
                    <div class="buttons">
                        <button class="quit">Exit Quiz</button>
                        <button class="restart">Continue</button>
                    </div>
                </div>
            
                <!-- Quiz box -->
                <div class="quiz_box">
                    <header>
                        <div class="title">Awesome Quiz Application</div>
                        <div class="timer">
                            <div class="time_text">Time Left</div>
                            <div class="timer_sec">15</div>
                        </div>
                        <div class="time_line"></div>
                    </header>
                    <section>
                        <div class="que_text">
                            <span>What does HTML stands for?</span>
                        </div>
                        <div class="option_list">
                            <div class="option">
                                <span>Hyper Text Preprocessor</span>
                                <div class="icon tick"><i class="fas fa-check"></i></div>
                            </div>
                            <div class="option">
                                <span>Hyper Text Markup Language</span>
                                <div class="icon cross"><i class="fas fa-times"></i></div>
                            </div>
                            <div class="option">
                                <span>Hyper Text Preprocessor</span>
                            </div>
                            <div class="option">
                                <span>Hyper Text Preprocessor</span>
                            </div>
                        </div>
                    </section>
                    <!-- <img src="../../acmel pictures/malaay.jpg" style="width: 40%;" alt=""> -->
                    <!-- quiz footer -->
                    <footer>
                        <div class="total_que">
                            <!-- <span><p>2 </p> of <p>5</p> <p>Questions</p></span> -->
                        </div>
                        <button class="next_btn">Next Ques.</button>
                    </footer>
                </div>
        
                <!-- result box -->
                <div class="result_box">
                    <div class="icon">
                        <i class="fas fa-crown"></i>
                    </div>
                    <div class="complete_text">You've completed the Quiz</div>
                    <div class="score_text"></div>
                
                    <!-- Progress Circle -->
                    <div class="progress-container">
                        <div class="progress-circle" style="--progress: 0;"></div>
                        <div class="progress-center"></div>
                        <div class="progress-text">0%</div>
                    </div>
                
                    <!-- Stars -->
                    <div class="stars"></div>
                
                    <!-- Buttons -->
                    <div class="buttons">
                        <button class="restart">Replay Quiz</button>
                        <button class="quit">Quit Quiz</button>
                    </div>
                </div>  
                </div>
            </div>
            
        `
        const start_btn = document.querySelector('.start_btn button');
        const info_box = document.querySelector('.info_box');
        const exit_btn = info_box.querySelector('.buttons .quit');
        const continue_btn = info_box.querySelector('.buttons .restart');
        const quiz_box = document.querySelector('.quiz_box');
        const next_btn = quiz_box.querySelector('.next_btn');
        const bottom_ques_counter = quiz_box.querySelector(".total_que")
        const timeCount = quiz_box.querySelector(".timer .timer_sec");
        const timeline = quiz_box.querySelector("header .time_line");
        const timeoff = quiz_box.querySelector("header .time_text");
        const result_box = document.querySelector(".result_box");
        const restart_quiz = result_box.querySelector(".buttons .restart");
        const quit_quiz = result_box.querySelector(".buttons .quit");


        let que_count = 0;
        let que_numb = 1;
        let counter;
        let counterLine;
        let timeValue = 15;
        let widthValue = 0;
        let userScore = 0;

        start_btn.onclick = () => {
            info_box.classList.add("activeInfo")
        }
        exit_btn.onclick = () => {
            info_box.classList.remove("activeInfo")
        }
        continue_btn.onclick = () => {
            info_box.classList.remove("activeInfo");
            quiz_box.classList.add("activeQuiz");
            start_btn.style.display = "none";       // Hide the start button
            showQuestion(0);
            questionCounter(1);
            startTimer(15);
            startTimerLine(0);
        };

        let questions = [
            {
                numb: 1,
                question: `<img src="questions image.jpg" style="width: 100%;" alt="HTML image"> <br> Waa Imisa Isku Darkooda?`,
                answer: "2",
                options: [
                    "6",
                    "2",
                    "5",
                    "1",
                ],
            },
            {
                numb: 2,
                question: `<img src="questions2 image.jpg" style="width: 100%;" alt="HTML image"> <br> Waa Maxay Xayawankan?`,
                answer: "Libaax",
                options: [
                    "Marodi",
                    "Yanyuur",
                    "Libaax",
                    "Faras",
                ],
            },
            {
                numb: 3,
                question: `<img src="questions3 image.jpg" style="width: 100%;" alt="HTML image"> <br> Imisa Shimbir Aya Ku Sawiran?`,
                answer: "7 xabo",
                options: [
                    "7 xabo",
                    "3 xabo",
                    "9 xabo",
                    "6 xabo",
                ],
            },
            {
                numb: 4,
                question: `<img src="questions4 image.jpg" style="width: 100%;" alt="HTML image"> <br> Sawirkan Wa Meqo Gesodle?`,
                answer: "4 gees",
                options: [
                    "2 gees",
                    "3 gees",
                    "5 gees",
                    "4 gees",
                ],
            },
            {
                numb: 5,
                question: `<img src="questions5 image.jpg" style="width: 100%;" alt="HTML image"> <br> Waa Maxay Khudartaan?`,
                answer: "Liin Macaan",
                options: [
                    "Moos",
                    "Liin Macaan",
                    "Cinab",
                    "Tufaax",
                ],
            },
        ];

        function showQuestion(index) {
            const que_text = document.querySelector('.que_text');
            const option_list = document.querySelector('.option_list');
            
            let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
            let option_tag = '<div class="option">'+questions[index].options[0]+'<span></span></div>'
                            + '<div class="option">'+questions[index].options[1]+'<span></span></div>'
                            + '<div class="option">'+questions[index].options[2]+'<span></span></div>'
                            + '<div class="option">'+questions[index].options[3]+'<span></span></div>';
                            
            que_text.innerHTML = que_tag;
            option_list.innerHTML = option_tag; // Corrected here

            const options = option_list.querySelectorAll('.option');
            options.forEach(option => {
                option.addEventListener('click', function () {
                    optionSelected(this);
                });
            });
        }

        let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
        let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

        function optionSelected(answer) {
            clearInterval(counter);
            clearInterval(counterLine);
            let userAns = answer.textContent;
            let correctAns = questions[que_count].answer;
            // Retrieve the option list element
            const option_list = document.querySelector('.option_list');
            let allOptions = option_list.children.length;
            if (userAns == correctAns) {
                userScore += 1;
                console.log(userScore)
                answer.classList.add("correct");
                console.log("Your answer is correct");
                answer.insertAdjacentHTML("beforeend" , tickIcon);
            } 
            else {
                answer.classList.add("incorrect");
                console.log("Wrong answer");
                answer.insertAdjacentHTML("beforeend" , crossIcon);
                // If the answer is incorrect, highlight the correct answer
                for (let i = 0; i < allOptions; i++) {
                    if (option_list.children[i].textContent == correctAns) {
                        option_list.children[i].classList.add("correct"); // Highlight correct option
                        option_list.children[i].insertAdjacentHTML("beforeend" , tickIcon);
                    }
                }
                // Disable all options
                for (let i = 0; i < allOptions; i++) {
                    option_list.children[i].classList.add("disabled");
                }
            }
            // Disable all options after the user selects an answer
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }
            next_btn.style.display = "block";
        }

        function showResultBox() {
            info_box.classList.remove("activeInfo");
            quiz_box.classList.remove("activeQuiz");
            result_box.classList.add("activeResult");

            const scoreText = result_box.querySelector(".score_text");
            const starsContainer = result_box.querySelector(".stars");

            // Update the score message and progress
            let scoreTag = '';
            if (userScore === 0) {
                scoreTag = `<span>and sorry, you got only <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
                updateProgress(0); // Set progress to 0%
                updateStars(starsContainer, 0); // 0 stars
            } 
            else if (userScore === 1) {
                scoreTag = `<span>and nice! you got <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
                updateProgress(20); // Set progress to 20%
                updateStars(starsContainer, 1); // 1 star
            } 
            else if (userScore === 2) {
                scoreTag = `<span>and nice! you got <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
                updateProgress(40); // Set progress to 40%
                updateStars(starsContainer, 2); // 2 stars
            } 
            else if (userScore === 3) {
                scoreTag = `<span>and congrats! you got <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
                updateProgress(60); // Set progress to 60%
                updateStars(starsContainer, 3); // 3 stars
            } 
            else if (userScore === 4) {
                scoreTag = `<span>and congrats! you got <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
                updateProgress(80); // Set progress to 80%
                updateStars(starsContainer, 4); // 4 stars
            } 
            else if (userScore === 5) {
                scoreTag = `<span>and congrats! you got <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
                updateProgress(100); // Set progress to 100%
                updateStars(starsContainer, 5); // 5 stars
            }

            scoreText.innerHTML = scoreTag;
        }

        // Function to update stars based on the score
        function updateStars(container, count) {
            container.innerHTML = ''; // Clear previous stars
            for (let i = 0; i < 5; i++) {
                const star = document.createElement('i');
                star.classList.add('fas', 'fa-star', 'star');
                if (i < count) {
                    star.classList.add('active');
                }
                container.appendChild(star);
            }
        }

        // Function to update the progress circle
        function updateProgress(progressValue) {
            const progressCircle = result_box.querySelector('.progress-circle');
            const progressText = result_box.querySelector('.progress-text');
            progressCircle.style.setProperty('--progress', progressValue);
            progressText.textContent = `${progressValue}%`;

            // Optional: Animate the progress change
            animateProgress(result_box.querySelector('.progress-container'), progressValue, 2000);
        }

        // Animation function (same as before)
        function animateProgress(progressElement, targetProgress, duration) {
            const startTime = performance.now();
            const progressCircle = progressElement.querySelector('.progress-circle');
            const progressText = progressElement.querySelector('.progress-text');

            function updateAnimation(currentTime) {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min((elapsedTime / duration) * targetProgress, targetProgress);

                progressCircle.style.setProperty('--progress', progress);
                progressText.textContent = `${Math.round(progress)}%`;

                if (progress < targetProgress) {
                    requestAnimationFrame(updateAnimation);
                }
            }

            requestAnimationFrame(updateAnimation);
        }

        restart_quiz.onclick = () => {
            result_box.classList.remove("activeResult");
            quiz_box.classList.add("activeQuiz");
            // Reset global variables
            que_count = 0;
            que_numb = 1;
            timeValue = 15;
            widthValue = 0;
            userScore = 0;
            // Show the first question and reset counters
            showQuestion(que_count);
            questionCounter(que_numb);
            // Restart timers
            clearInterval(counter);
            startTimer(timeValue);
            clearInterval(counterLine);
            startTimerLine(widthValue);
            // Reset UI elements
            next_btn.style.display = "none";
            timeoff.textContent = "time left";
        };

        quit_quiz.onclick = () => {
            window.location.reload();
        }

        next_btn.onclick = () => {
            if(que_count < questions.length - 1){
                que_count++;
                que_numb++;
                showQuestion(que_count);
                questionCounter(que_numb);
                clearInterval(counter);
                startTimer(timeValue);
                clearInterval(counterLine);
                startTimerLine(widthValue);
                next_btn.style.display = "none";
                timeoff.textContent = "time left";
            }
            else{
                clearInterval(counter);
                clearInterval(counterLine);
                console.log("questions completed");
                showResultBox();
            }
        }

        function startTimer(time) {
            counter = setInterval(timer, 1000);
            function timer() {
                timeCount.textContent = time; // Correctly updates the timer text
                time--;
                if (time < 9) {
                    let addZero = timeCount.textContent;
                    timeCount.textContent = "0" + addZero;
                }
                if (time < 0) { // Stop the timer when it reaches zero
                    clearInterval(counter);
                    timeCount.textContent = "00"; // Ensures the timer shows zero
                    timeoff.textContent = "time off";

                    const option_list = document.querySelector('.option_list');
                    const correctAns = questions[que_count].answer;
                    const allOptions = option_list.children.length;

                    // Highlight the correct answer when time runs out
                    for (let i = 0; i < allOptions; i++) {
                        if (option_list.children[i].textContent == correctAns) {
                            option_list.children[i].classList.add("correct");
                            option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                        }
                    }

                    // Disable all options after time runs out
                    for (let i = 0; i < allOptions; i++) {
                        option_list.children[i].classList.add("disabled");
                    }

                    next_btn.style.display = "block"; // Show the "Next" button
                }
            }
        }

        function startTimerLine(time) {
            counterLine = setInterval(timer, 29);
            function timer() {
                time += 1;
                timeline.style.width = time + "px";
                if (time > 549) { // Stop the timer when it reaches zero
                    clearInterval(counterLine);
                }
            }
        }

        function questionCounter(index){
            let totalQuestionCountTag = '<span><p>'+ index +'</p>  of<p>'+ questions.length +'</p> <p>Questions</p></span>'
            bottom_ques_counter.innerHTML = totalQuestionCountTag;
        }
    }

    else if (page === 'help_page'){
        content.innerHTML = `
            <div id="simple">
                <div class="breadcumb-area6">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12 text-center">
                                <div class="breadcumb-content">
                                    <div class="breadcumb-title">
                                        <h4>Help Page</h4>
                                    </div>
                                    <ul>
                                        <li><a href="#">For all pages of the website</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="blog-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="section-title left">
                                    <h4>Help Page</h4>
                                    <h1>Welcome To Help Page</h1>
                                </div><br>
                            </div>
                            <div class="col-lg-4">
                                <div class="echofy-button">
                                    <a href="index.html">Go To Home Page</a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog-box">
                                    <div class="single-blog-thumb">
                                        <img src="quiz part.png" alt="">
                                    </div>
                                    <div class="blog-content">
                                        <a href="#" onclick="loadPage('quiz')">Quiz Page</a>
                                        <p>This is the kids Quiz page that contains five question that is well organized</p>
                                    </div>
                                <div class="blog-arthor">
                                        <div class="blog-author-title">
                                            <h6><span>Q</span>Quiz</h6>
                                        </div>
                                        <div class="blog-button">
                                            <a href="#" onclick="loadPage('quiz')"><i class="bi bi-arrow-right-short"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>			
                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog-box">
                                    <div class="single-blog-thumb">
                                        <img src="chapters.png" alt="">
                                    </div>
                                    <div class="blog-content">
                                        <a href="#" onclick="loadPage('chapters')">Chapter Page</a>
                                        <p>This is the chapters it is contain 8 chapters navigation that is well organized</p>
                                    </div>
                                <div class="blog-arthor">
                                        <div class="blog-author-title">
                                            <h6><span>C</span>Chapters</h6>
                                        </div>
                                        <div class="blog-button">
                                            <a href="#" onclick="loadPage('chapters')"><i class="bi bi-arrow-right-short"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>			
                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog-box">
                                    <div class="single-blog-thumb">
                                        <img src="lab.png" alt="">
                                    </div>
                                    <div class="blog-content">
                                        <a href="#" onclick="loadPage('lab')">Lab Page</a>
                                        <p>This is the lab page that contains three questions in the lab of the uni</p>
                                    </div>
                                <div class="blog-arthor">
                                        <div class="blog-author-title">
                                            <h6><span>L</span>Lab</h6>
                                        </div>
                                        <div class="blog-button">
                                            <a href="#" onclick="loadPage('lab')"><i class="bi bi-arrow-right-short"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog-box">
                                    <div class="single-blog-thumb">
                                        <img src="contact.png" alt="">
                                    </div>
                                    <div class="blog-content">
                                        <a href="contactUs.html">Contact Page</a>
                                        <p>This is contact us page or guest page for the user questions and messages</p>
                                    </div>
                                <div class="blog-arthor">
                                        <div class="blog-author-title">
                                            <h6><span>C</span>Contact</h6>
                                        </div>
                                        <div class="blog-button">
                                            <a href="contactUs.html"><i class="bi bi-arrow-right-short"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog-box">
                                    <div class="single-blog-thumb">
                                        <img src="about.png" alt="">
                                    </div>
                                    <div class="blog-content">
                                        <a href="#" onclick="loadPage('about')">About Us Page</a>
                                        <p>This is About us page of team that composed of two individuals</p>
                                    </div>
                                <div class="blog-arthor">
                                        <div class="blog-author-title">
                                            <h6><span>A</span>About</h6>
                                        </div>
                                        <div class="blog-button">
                                            <a href="#" onclick="loadPage('about')"><i class="bi bi-arrow-right-short"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog-box">
                                    <div class="single-blog-thumb">
                                        <img src="Assignments.png" alt="">
                                    </div>
                                    <div class="blog-content">
                                        <a href="#" onclick="loadPage('Assignments')">Assignments Page</a>
                                        <p>This is Assignment Page Of The Somali Online Quiz For Kids</p>
                                    </div>
                                <div class="blog-arthor">
                                        <div class="blog-author-title">
                                            <h6><span>A</span>Assignments</h6>
                                        </div>
                                        <div class="blog-button">
                                            <a href="#" onclick="loadPage('Assignments')"><i class="bi bi-arrow-right-short"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br><br><br><br><br<br>
        `
    }

    else if (page === 'chapters'){
        content.innerHTML = `
            <div id="simple">
                <div class="breadcumb-area">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12 text-center">
                                <div class="breadcumb-content">
                                    <div class="breadcumb-title">
                                        <h4>Chapters Page</h4>
                                    </div>
                                    <ul>
                                        <li><a href="#">Chapters Page In Help Page</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="blog-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="section-title left">
                                    <h4>Chapters Page</h4>
                                    <h1>Welcome To Chapters Page</h1>
                                </div><br>
                            </div>
                            <div class="col-lg-4">
                                <div class="echofy-button">
                                    <a href="#" onclick="loadPage('help_page')">Go Back To Help Page</a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog-box">
                                    <div class="single-blog-thumb">
                                        <img src="ch1.png" alt="">
                                    </div>
                                    <div class="blog-content">
                                        <a href="#" onclick="loadPage('chapter1')">Chapter One</a>
                                        <p>Chapter One Examples</p>
                                    </div>
                                <div class="blog-arthor">
                                        <div class="blog-author-title">
                                            <h6><span>1</span>Chapter 1</h6>
                                        </div>
                                        <div class="blog-button">
                                            <a href="#" onclick="loadPage('chapter1')""><i class="bi bi-arrow-right-short"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog-box">
                                    <div class="single-blog-thumb">
                                        <img src="ch2.png" alt="">
                                    </div>
                                    <div class="blog-content">
                                        <a href="#" onclick="loadPage('chapter2')">Chapter Two</a>
                                        <p>Chapter Two Examples</p>
                                    </div>
                                <div class="blog-arthor">
                                        <div class="blog-author-title">
                                            <h6><span>2</span>Chapter 2</h6>
                                        </div>
                                        <div class="blog-button">
                                            <a href="#" onclick="loadPage('chapter2')""><i class="bi bi-arrow-right-short"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog-box">
                                    <div class="single-blog-thumb">
                                        <img src="ch3.png" alt="">
                                    </div>
                                    <div class="blog-content">
                                        <a href="#" onclick="loadPage('chapter3')">Chapter Three</a>
                                        <p>Chapter Three Examples</p>
                                    </div>
                                <div class="blog-arthor">
                                        <div class="blog-author-title">
                                            <h6><span>3</span>Chapter 3</h6>
                                        </div>
                                        <div class="blog-button">
                                            <a href="#" onclick="loadPage('chapter3')""><i class="bi bi-arrow-right-short"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog-box">
                                    <div class="single-blog-thumb">
                                        <img src="ch4.png" alt="">
                                    </div>
                                    <div class="blog-content">
                                        <a href="#" onclick="loadPage('chapter4')">Chapter Four</a>
                                        <p>Chapter Four Examples</p>
                                    </div>
                                <div class="blog-arthor">
                                        <div class="blog-author-title">
                                            <h6><span>4</span>Chapter 4</h6>
                                        </div>
                                        <div class="blog-button">
                                            <a href="#" onclick="loadPage('chapter4')""><i class="bi bi-arrow-right-short"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog-box">
                                    <div class="single-blog-thumb">
                                        <img src="ch5.png" alt="">
                                    </div>
                                    <div class="blog-content">
                                        <a href="#" onclick="loadPage('chapter5')">Chapter Five</a>
                                        <p>Chapter Five Examples</p>
                                    </div>
                                <div class="blog-arthor">
                                        <div class="blog-author-title">
                                            <h6><span>5</span>Chapter 5</h6>
                                        </div>
                                        <div class="blog-button">
                                            <a href="#" onclick="loadPage('chapter5')""><i class="bi bi-arrow-right-short"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog-box">
                                    <div class="single-blog-thumb">
                                        <img src="ch6.png" alt="">
                                    </div>
                                    <div class="blog-content">
                                        <a href="#" onclick="loadPage('chapter6')">Chapter Six</a>
                                        <p>Chapter Six Examples</p>
                                    </div>
                                <div class="blog-arthor">
                                        <div class="blog-author-title">
                                            <h6><span>6</span>Chapter 6</h6>
                                        </div>
                                        <div class="blog-button">
                                            <a href="#" onclick="loadPage('chapter6')""><i class="bi bi-arrow-right-short"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog-box">
                                    <div class="single-blog-thumb">
                                        <img src="ch7.png" alt="">
                                    </div>
                                    <div class="blog-content">
                                        <a href="#" onclick="loadPage('chapter7')">Chapter Seven</a>
                                        <p>Chapter Seven Examples</p>
                                    </div>
                                <div class="blog-arthor">
                                        <div class="blog-author-title">
                                            <h6><span>7</span>Chapter 7</h6>
                                        </div>
                                        <div class="blog-button">
                                            <a href="#" onclick="loadPage('chapter7')""><i class="bi bi-arrow-right-short"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog-box">
                                    <div class="single-blog-thumb">
                                        <img src="ch8.png" alt="">
                                    </div>
                                    <div class="blog-content">
                                        <a href="#" onclick="loadPage('chapter8')">Chapter Eight</a>
                                        <p>Chapter Eight Examples</p>
                                    </div>
                                <div class="blog-arthor">
                                        <div class="blog-author-title">
                                            <h6><span>8</span>Chapter 8</h6>
                                        </div>
                                        <div class="blog-button">
                                            <a href="#" onclick="loadPage('chapter8')""><i class="bi bi-arrow-right-short"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div><br><br><br><br><br<br>
        `
    }

    else if (page === 'Assignments'){
        content.innerHTML = `
            <div id="simple">
                <div class="breadcumb-area3">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12 text-center">
                                <div class="breadcumb-content">
                                    <div class="breadcumb-title">
                                        <h4>Assignments Page</h4>
                                    </div>
                                    <ul>
                                        <li><a href="#">Assignments Page In Help Page</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="blog-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="section-title left">
                                    <h4>Assignments Page</h4>
                                    <h1>Welcome To Asssignments Page</h1>
                                </div><br>
                            </div>
                            <div class="col-lg-4">
                                <div class="echofy-button">
                                    <a href="#" onclick="loadPage('help_page')">Go Back To Help Page</a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog-box">
                                    <div class="single-blog-thumb">
                                        <img src="assi1.png" alt="">
                                    </div>
                                    <div class="blog-content">
                                        <a href="#" onclick="loadPage('assignment1')">Assignment One</a>
                                        <p>Assinment One Examples</p>
                                    </div>
                                <div class="blog-arthor">
                                        <div class="blog-author-title">
                                            <h6><span>1</span>Assignment 1</h6>
                                        </div>
                                        <div class="blog-button">
                                            <a href="#" onclick="loadPage('assignment1')""><i class="bi bi-arrow-right-short"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog-box">
                                    <div class="single-blog-thumb">
                                        <img src="assi2.png" alt="">
                                    </div>
                                    <div class="blog-content">
                                        <a href="#" onclick="loadPage('assignment2')">Asssignment Two</a>
                                        <p>Assignment Two Examples</p>
                                    </div>
                                <div class="blog-arthor">
                                        <div class="blog-author-title">
                                            <h6><span>2</span>Assignment 2</h6>
                                        </div>
                                        <div class="blog-button">
                                            <a href="#" onclick="loadPage('assignment2')""><i class="bi bi-arrow-right-short"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div><br><br><br><br><br<br>
        `
    }
}

loadPage('home');

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".needs-validation");

    form.addEventListener("submit", function (event) {
        // Prevent form submission if validation fails
        if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        }

        form.classList.add("was-validated");
    });

    // Custom email validation
    const emailField = document.getElementById("validationCustomEmail");
    emailField.addEventListener("input", function () {
        const emailValue = emailField.value;
        const emailFeedback = document.getElementById("emailFeedback");

        // Regular expression for stricter email validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (emailRegex.test(emailValue)) {
        emailField.classList.remove("is-invalid");
        emailField.classList.add("is-valid");
        emailFeedback.textContent = "Valid email!";
        } 
        else {
          emailField.classList.remove("is-valid");
          emailField.classList.add("is-invalid");
          emailFeedback.textContent = "Please provide a valid email address (e.g., user@example.com).";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".needs-validation");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
        popup.style.display = "flex"; // Show the popup
        form.reset(); // Reset the form
        form.classList.remove("was-validated"); // Remove validation styles
        } 
        else {
            form.classList.add("was-validated");
        }
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none"; // Close the popup
    });

    // Close the popup when clicking outside the content
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});

//skills animation
document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".skill-bar");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const targetWidth = bar.getAttribute("data-width");
                    bar.style.width = targetWidth; // Set width dynamically
                    bar.style.opacity = 1; // Make the bar visible
                    observer.unobserve(bar); // Stop observing after animation
                }
            });
        },
        {
            threshold: 0.5, // Trigger when 50% of the section is visible
        }
    );

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
});

//sticky and meanu
(function ($) {
    'use strict';

    // Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        meanMenuOpen: "<span></span> <span></span> <span></span>",
        onePage: false,
    });

    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

   // marquee
    function updateMarqueDivWidth() {

    const flexContainer = document.querySelector('.marquee');
    const flexItems = document.querySelectorAll('.marquee .scroll');
      
    let totalWidth = 0;
    flexItems.forEach((item) => {
        totalWidth += item.offsetWidth;
    });
        
}
window.addEventListener('load', updateMarqueDivWidth);
window.addEventListener('resize', updateMarqueDivWidth);

})(jQuery);