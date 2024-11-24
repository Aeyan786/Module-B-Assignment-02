// marksheet
let  fullName = document.getElementById("name")
let  age = document.getElementById("Age")
let  rollnumber = document.getElementById("rollnumber")

let studName = prompt("Enter your Full name")
let studAge = +prompt("Enter your Age")
let studNo = +prompt("Enter your Enrollment number")

fullName.innerText = studName
age.innerText = studAge
rollnumber.innerText = studNo
console.log(fullName.innerText);

let  mathMarks = +prompt("Marks Obtained in Math")
let  chemMarks = +prompt("Marks Obtained in Chemistry")
let  phyMarks = +prompt("Marks Obtained in Physics")
let  urduMarks = +prompt("Marks Obtained in Urdu")
let  total = mathMarks + chemMarks + phyMarks + urduMarks
let percentage = total / 400 *100

let table = ` <br><br><br><br>
        <table>
            <tr>
                <th>Subjects</th>
                <th>Marks Obtained</th>
                <th>Max Marks</th>

            </tr>
            <tr>
                <th>Math</th>
                <th>${mathMarks}</th>
                <th>100</th>

            </tr>
            <tr>
                <th>Chemistry</th>
                <th>${chemMarks}</th>
                <th>100</th>

            </tr>
            <tr>
                <th>Physics</th>
                <th>${phyMarks}</th>

                <th>100</th>

            </tr>
            <tr>
                <th>Urdu</th>
                <th>${urduMarks}</th>

                <th>100</th>

            </tr>
            
            <tr>
                <th>Percentage</th>
                <br>
                <th>${total}</th>
                <th>${percentage}%</th>


            </tr>
        </table>
    </div>`
 

document.write(table)