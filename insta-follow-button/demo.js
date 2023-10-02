const addBTN = document.getElementById('add')
let check = 0;

addBTN.addEventListener('click',function(){
    if(check == 0){
        const friends = document.querySelector('#card h5');
        friends.textContent = "friends"
        friends.style.color = 'green'
        check++;
    }else if(check > 0){
        const stranger = document.querySelector('#card h5');
        stranger.textContent = "stranger"
        stranger.style.color = 'red'
        check = 0
    }
})