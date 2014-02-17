//Numeral Converter project
function integerRoman(n){
    // Your code here
    
    var mapaBrojeva=[
        ['M',1000],
        ['CM',900],
        ['D',500],
        ['CD',400],
        ['C',100],
        ['XC',90],
        ['L',50],
        ['XL',40],
        ['X',10],
        ['IX',9],
        ['V',5],
        ['IV',4],
        ['I',3]
    ]
    var rimskiBroj="";
    
    for (var i=0;i<mapaBrojeva.length;i++){
        while(n-mapaBrojeva[i][1]>=0){
            
            n-=mapaBrojeva[i][1];
            rimskiBroj+=mapaBrojeva[i][0];
        }
        
    }
    return rimskiBroj;
}