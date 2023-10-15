let namastebutton = document.querySelector('button');
namastebutton.addEventListener('click',inputMsg);

function inputMsg(){
    let name = prompt('Enter name of a student');
    namastebutton.textContent = 'Roll No.1' + name;
}