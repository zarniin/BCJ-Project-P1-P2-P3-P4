$(document).ready(function(){

    // Start Student Counter Section 

        var getcountervalues = document.querySelectorAll('.countervalue');
        // console.log(getcountervalues);

        getcountervalues.forEach(function(getcountervalue){
            // console.log(getcountervalue);

            getcountervalue.textContent = 0;

            const updatecounter = function(){

                const getcttarget = +getcountervalue.getAttribute('data-target');
                // console.log(getcttarget);
                // console.log(typeof getcttarget);

                const getctcontent = +getcountervalue.innerText;
                // console.log(getctcontent);
                // console.log(typeof getctcontent);

                const incnumber = getcttarget/100;
                // console.log(incnumber);

                if(getctcontent < getcttarget){
                    getcountervalue.textContent = getctcontent+incnumber;
                    setTimeout(updatecounter,100);
                }

            }

            updatecounter();

        });

    // End Student Counter Section 

    // Start Footer Section 
        
        const getyear = document.getElementById('getyear');
        const getfullyear = new Date().getUTCFullYear();
        getyear.textContent = getfullyear;

    // End Footer Section 

    // Start Login & Sticknote 
        // Start Login 
            $('#openform').click(function(){
                document.getElementById('myform').style.display = "block";
            });

             $('#closeform').click(function(){
                document.getElementById('myform').style.display = "none";
            });
        // End Login 
    // End Login & Sticknote 
    
});

