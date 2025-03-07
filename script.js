    let names = document.getElementById("name")
    let age = document.getElementById("age")
    let gender

    let course = document.getElementById("course")
    let mail = document.getElementById("mail")
    let btn = document.getElementById("btn")
    let name1 = document.getElementById("name1")
    let age1 = document.getElementById("age1")
    let course1 = document.getElementById("course1")
    let mail1 = document.getElementById("mail1")
    let gender1= document.getElementById("gender1")
    let del = document.getElementById("del")
    let tbody = document.querySelector(".table2 tbody")
    // THIS IS gender function
    function getGender(){
        let selectGender = document.querySelector('input[name = "gender"]:checked')   
       return selectGender? selectGender.value: "Not selected";
    }
        //this this delete function to remove closet TR
    function delt(event) {
        event.target.closest("tr").remove();
    }
   
    //this is the even listner
    btn.addEventListener("click", function ()
    {

        event.preventDefault();//prevents from loading
            //this for the alret msg when fields are missing
        if (!names.value || !age.value || !course.value || !mail.value) {
            alert("Please fill all field");
            return;
        }


        let selectGender = getGender()

        let tr =document.createElement("tr")
        
      
       let tdName = document.createElement("td")
        tdName.innerHTML = names.value 
        console.log(tdName.innerHTML)
        name1.append(tdName)

        let tdAge = document.createElement("td")
        tdAge.innerHTML=age.value
        console.log(tdAge.innerHTML)
        age1.append(tdAge)
        
        let tdGender = document.createElement("td")
        tdGender.innerHTML = selectGender
        gender1.append(tdGender)

      
        let tdCourse = document.createElement("td")
        tdCourse.innerHTML = course.value
        console.log(tdCourse.innerHTML)
        course1.append(tdCourse)

        let tdMail = document.createElement("td")
        tdMail.innerHTML = mail.value 
        console.log(tdMail.innerHTML)
        mail1.append(tdMail)

        let tdDel = document.createElement("td")
        let deltBtn = document.createElement("button")
        deltBtn.innerHTML = "delete"
        deltBtn.classList.add("delete-btn")
        deltBtn.addEventListener("click", delt)
        tdDel.append(deltBtn)
       //appending all tds to trs
  tr.append(tdName, tdAge, tdGender, tdCourse, tdMail, tdDel )
        
        tbody.appendChild(tr);

        names.value="";
        age.value="";
        course.value="";
        mail.value="";
        document.querySelectorAll('input[name="gender"]').forEach((radio) => {
            radio.checked = false;
        });
     

       
    })
