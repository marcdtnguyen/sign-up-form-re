const pword = document.querySelector('#pword');
const cpword = document.querySelector('#cpword');

function isEqual(){
    if (pword.value == cpword.value && pword.value != '') {
        pword.classList.toggle('error');
        cpword.classList.toggle('error');
    } else {
        pword.classList.add('error')
        cpword.classList.add('error')
    }
}

pword.addEventListener('input', isEqual)
cpword.addEventListener('input', isEqual)