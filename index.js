async function genderDifine() {
    let name = document.getElementById("name").value;
    
    let resultdiv = document.getElementById('resultdiv');
    if(!name){
        resultdiv.innerHTML="Please Enter your name";
        
    }
    try {
        let response = await fetch(`https://api.genderize.io?name=${name}`);
        let data =await response.json();
        // console.log(data);

        if(data.gender){
            let percent=`${data.probability*100}`;
            resultdiv.innerHTML=`The predicted gender for ${name} is : ${data.gender} with percentage of ${percent}%`
        }
        else{
            resultdiv.innerHTML=`No gender predicted for ${name}`;
        }
        
    } catch (error) {
        resultdiv.innerHTML=`An error occurred:${error.message}`;
        
    }
    
}

