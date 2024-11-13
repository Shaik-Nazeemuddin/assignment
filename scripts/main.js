
window.addEventListener('load',function(){
    document.getElementById("tabfirst").addEventListener("click",function(){
        document.getElementById("tabpanelfirst").classList.add('active');
        document.getElementById("tabpanelsecond").classList.remove('active');
        document.getElementById("tabpanelthird").classList.remove('active');
    })
    document.getElementById("tabsecond").addEventListener("click",function(){
        document.getElementById("tabpanelsecond").classList.add('active');
        document.getElementById("tabpanelfirst").classList.remove('active');
        document.getElementById("tabpanelthird").classList.remove('active');
    })
    document.getElementById("tabthird").addEventListener("click",function(){
        document.getElementById("tabpanelthird").classList.add('active');
        document.getElementById("tabpanelfirst").classList.remove('active');
        document.getElementById("tabpanelsecond").classList.remove('active');
    })

    document.getElementById('accordion-button-first').addEventListener('click',function(e){
      e.preventDefault();
      let accordionid = document.getElementById('accordion-panel-first');
      accordionid.classList.toggle('hide');
    })
    document.getElementById('accordion-button-second').addEventListener('click',function(e){
        e.preventDefault();
        let accordionid = document.getElementById('accordion-panel-second');
        accordionid.classList.toggle('hide');
    })
    document.getElementById('accordion-button-third').addEventListener('click',function(e){
        e.preventDefault();
        let accordionid = document.getElementById('accordion-panel-third');
        accordionid.classList.toggle('hide');
    })
})



