const txtElementk2 = ['welcome to','my first website'];
let count2 = 0;
let txtIndex2 = 0;
let currentTxt2= '';
let words2 = '';
let baris=0;
let hitung=0;
let selesai=0;

/*
(function ngetik2(){
    currentTxt2 = txtElementk2[count2];
    words2 = currentTxt2.slice(0, txtIndex2=txtIndex2+1);
    document.querySelector('.efek2ngetik').textContent = words2;
    setTimeout(ngetik2, 100);
    
})();
*/
/*
for(let baris = 0; baris >=1 ; baris++){
    if(baris==0){
        (function ngetik2(){
            currentTxt2 = txtElementk2[count2];
            words2 = currentTxt2.slice(0, txtIndex2=txtIndex2+1);
            document.querySelector('.efek2ngetik').textContent = words2;
            setTimeout(ngetik2, 100);
            
        })();
    }else{
        (function ngetik3(){
            currentTxt2 = txtElementk2[count2];
            words2 = currentTxt2.slice(0, txtIndex2=txtIndex2+5);
            document.querySelector('.efek3ngetik').textContent = words2;
            setTimeout(ngetik3, 900);
            
        })();
    }
    count2=0;
    document.write('\n');

}
*/

(function ngetik2(){
    currentTxt2 = txtElementk2[count2];
    words2 = currentTxt2.slice(0, txtIndex2=txtIndex2+1);
    if(baris==0){
        document.querySelector('.efek2ngetik').textContent = words2;

    }else{
        document.querySelector('.efek3ngetik').textContent = words2;
    

    }
    hitung=hitung+1;
        if(hitung==25){
            baris=1;
            if(selesai==0){
                txtIndex2=0;
                selesai=1;
            }
            hitung=0;
            count2=1;
        }
    
    setTimeout(ngetik2, 50);
    
})();

/*
count2 = 0;
(function ngetik3(){
    currentTxt2 = txtElementk2[count2];
    words2 = currentTxt2.slice(0, txtIndex2=txtIndex2+1);
    document.querySelector('.efek3ngetik').textContent = words2;
    setTimeout(ngetik3, 100);
    
})();
*/