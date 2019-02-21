document.querySelector('.yes').addEventListener('click', function(){  

       var foto =  Math.floor(Math.random() *7) + 1;

        var fotoDOM = document.querySelector('.foto');
        fotoDOM.src = 'foto-' + foto + '.jpg';
        console.log(foto);
});