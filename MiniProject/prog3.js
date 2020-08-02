var quo=[
    'Letsupgrade is good platform for learning new technology',
    'Sai sir is CEO of Letsupgrade',
    'Letsupgrade is provide a certification through ITM group',
    'I am learning a javascript through letsupgrade',
    'I also learn python from letsupgrade',
    'Now letsupgrade come with many of free courses',
    'Letsupgrade is a combination of ITM Group And Skill India and provide a certification to us',
    'We can verify our certification from letsupgrade/verify.com'
    
]
function newQuote(){
var rNum = Math.floor(Math.random()*(quo.length));
document.getElementById('quoteDisplay').innerHTML=quo[rNum];
}
