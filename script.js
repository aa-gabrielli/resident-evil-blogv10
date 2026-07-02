const likeBtn = document.getElementById('like-btn');
const dislikeBtn = document.getElementById('dislike-btn');
const commentBtn = document.getElementById('comment-btn');

likeBtn.addEventListener('click', () => {
    alert('Você deu Like! Muito ROX! ( ˘ ³˘)♥︎');
    likeBtn.style.backgroundColor = '#8A0303';
    likeBtn.innerText = 'Liked!';
});

dislikeBtn.addEventListener('click', () => {
    alert('Que noob lolz... Deslike registrado. :(');
});

commentBtn.addEventListener('click', () => {
    let comment = prompt('Deixe seu scrap na página (Caixa de comentários):');
    if(comment) {
        alert('Seu comentário: "' + comment + '" foi enviado para a dona do Flogão!');
    }
});