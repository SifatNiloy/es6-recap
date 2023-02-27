document.getElementById('apply-js').addEventListener('click', function(){
    const friends= document.getElementsByClassName('friend');
    for (const friend of friends){
        console.log(friends);
        friend.style.backgroundColor='lightblue'
    }
})

document.getElementById('center-third').addEventListener('click', function(){
    const third= document.getElementById('third');
    third.style.textAlign='center';
})
document.getElementById('add-friend').addEventListener('click', function(){
    const friendContainer= document.getElementById('friends')
    const friend= document.createElement('div');
    friend.innerHTML=`
    <h3 class="friend-name">Friend-6</h3>
    <p>Ddfsgg ercit dtiongsh te temporibus as dgh menda iusts ggsdfg tes ftur ex szta!</p>
    `
    friendContainer.appendChild(friend)
})