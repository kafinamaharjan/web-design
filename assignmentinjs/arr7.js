const words=['hi','its','me','Kafina','Maharjan']
function len(words){
    let i 
    for(i=0; i<words.length; i++){
        if(words[i].length>5){
            console.log(words[i])
        }
    }

}
len(words)