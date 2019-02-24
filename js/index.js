var foto ;
var yesMeetup = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var notMeetup = [17,18,19,20,21,22,23,24,25,26];
var notButton = document.getElementById('no');
var yesButton = document.getElementById('yes');
var decisao = document.getElementById('decisao');
var score = document.getElementById('score');
var scoreVal = 0;


function generate(){  
       
          foto =   Math.floor(Math.random() *26) + 1; 
          var fotoDOM = document.querySelector('.foto');
          fotoDOM.src = 'foto-' + foto + '.jpg';
          console.log(foto);
          fotoDOM.style.animation ="appearPerson 1s";
          decisao.style.animationIterationCount = "2";
           }

           generate();
                     
     document.querySelector('.btn').addEventListener('click', verify);     
           
           
           function verify()
           {
            yesMeetup;
            notMeetup;
            score;
            scoreVal;
          
                if(yesButton){
                      
                      if(yesMeetup.includes(foto) ){
                        
                      decisao.textContent = "You got it";
                      decisao.style.display ="block";
                      decisao.style.animation ="anim 1s";
                      decisao.style.animationIterationCount = "2";
                      scoreVal++;
                          generate();
                    }else{
                    
                    decisao.textContent = "wrong";
                    decisao.style.animation ="anim 1s";
                    decisao.style.display ="block";
                    decisao.style.animationIterationCount = "2";
                      scoreVal = 0;
                      generate();
                  }
                }
                score.textContent = scoreVal;
              }

              document.querySelector('#no').addEventListener('click', VerifyNo); 
                function VerifyNo(){
                  yesMeetup;
                  notMeetup;
                  score;
                  scoreVal;
                  if (notButton){
                          
                          if(notMeetup.includes(foto)){
                          
                        decisao.textContent = "You got it";
                        decisao.style.display ="block";
                        decisao.style.animation ="anim 1s";
                        decisao.style.animationIterationCount = "1";
                        scoreVal++;
                        generate();

                        }else{
                          
                          decisao.textContent = "Wrong";
                          decisao.style.display ="block";
                          decisao.style.animation ="anim 1s";
                          decisao.style.animationIterationCount = "1";
                         scoreVal = 0;
                         generate();
                        }

           
                      }
                      score.textContent = scoreVal;  
               }
           
              