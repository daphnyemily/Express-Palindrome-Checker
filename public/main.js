
document.querySelector('button').addEventListener('click', searchPalindrome)

function searchPalindrome(){
    let input = document.querySelector('input').value
   
    fetch(`/api?input=${input}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        showResult(data)

        function showResult (data){
            if (data.isPali === true){
                document.getElementById('result').innerText="This is a Palindrome"

            }else{
                document.getElementById('result').innerText="Nope, not a Palindrome"
        }}
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
} 