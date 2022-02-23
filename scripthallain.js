const txtElementk2 = ['my first website'];
let count2 = 0;
let txtIndex2 = 0;
let currentTxt2= '';
let words2 = '';
let baris=0;
let hitung=0;


(function ngetik2(){
    currentTxt2 = txtElementk2[count2];
    words2 = currentTxt2.slice(0, txtIndex2=txtIndex2+1);
    document.querySelector('.efekngetik').textContent = words2;
    setTimeout(ngetik2, 50);
    
})();

