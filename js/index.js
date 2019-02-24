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
          
           }

           generate();
                     
     document.querySelector('.btn').addEventListener('click', verify);     
           
           
           function verify()
           {
            
          
                if(yesButton){
                      
                      if(yesMeetup.includes(foto) ){
                      scoreVal++;
                      decisao.textContent = ' ';
                       generate();
                    }else{
                    
                   
                      scoreVal = 0;
                      decisao.textContent = 'Wrong';
                      decisao.style.color = 'red';
                      decisao.style.color = 'red';
                       decisao.style.animationName = "changeWrongColor";
                       decisao.style.animationDuration = ".5s";
                       decisao.style.animationIterationCount = "infinite";
                      
                      generate();
                  }
                }
                score.textContent = scoreVal;
              }

              document.querySelector('#no').addEventListener('click', VerifyNo); 
                function VerifyNo(){
                
                  if (notButton){
                          
                          if(notMeetup.includes(foto)){
                          
                      
                        scoreVal++;
                        decisao.textContent = ' ';
                        generate();

                        }else{
                          
                          
                         scoreVal = 0;
                         decisao.textContent = 'Wrong';
                         decisao.style.color = 'red';
                         decisao.style.animationName = "changeWrongColor";
                          decisao.style.animationDuration = ".5s";
                          decisao.style.animationIterationCount = "infinite";
                         generate();
                        }

           
                      }
                      score.textContent = scoreVal;  
               }
           
          