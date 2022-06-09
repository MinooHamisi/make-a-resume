//------------------------- add new Experience---------
function addNewExp()
{
    let titleExp=document.getElementById("title").value;
    let company=document.getElementById("companyName").value;
    let location=document.getElementById("locationExp").value;
    let startDate=document.getElementById("startDateExp").value;
    let endDate=document.getElementById("endDateExp").value;

    document.getElementById("demoExp").innerHTML= 
            "<hr id='hrDashed'><h2>"+
            titleExp + "</h2><h3>"
            + company +"</h3> " +
            "<img src='locationIcon.png' alt='location icon' id='icon'>"+
            location+"<br>"+
            "<img src='dateIcon.png' alt='dateIcon' id='icon'> "+ 
            startDate+ " - "+ endDate+"<br>";
}
//-------------------------add new skill---------------
function addNewSkill()
{
    let x=document.getElementById("newSkill").value;
    document.getElementById("demoSkill").className="borderedTxt";
    document.getElementById("demoSkill").innerHTML=x+"<br>";
}
//-------------------------add education---------------
function addEducation()
{
    let uniName=document.getElementById("uniName").value;
    let level=document.getElementById("level").value;
    let major=document.getElementById("major").value;
    let location=document.getElementById("location").value;
    let startDate=document.getElementById("startDate").value;
    let endDate=document.getElementById("endDate").value;
    
    document.getElementById("demoEducation").innerHTML= 
            "<hr id='hrDashed'><h2>"+
            level + " in " + major + "</h2><h3>"
            + uniName +"</h3> " +
            "<img src='locationIcon.png' alt='location icon' id='icon'>"+
            location+"<br>"+
            "<img src='dateIcon.png' alt='dateIcon' id='icon'> "+ startDate+ " - "+ endDate+"<br>";
}
//-------------------------add new publication----------
function addNewPub()
{
    let newPub=document.getElementById("newPub").value;
    document.getElementById("demoPublication").innerHTML=
            "<ul><li>"+newPub+"</li></ul>";
}