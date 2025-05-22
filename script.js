document.getElementById('quest-form').addEventListener('submit',function(event){
    event.preventDefault();
    questName =document.getElementById('questName').value.trim();
    questDesc=document.getElementById('quest-description').value;
    console.log(questName);
    console.log(questDesc);
})