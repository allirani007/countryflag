fetch('https://restcountries.eu/rest/v2/all')
.then (function(resp) {
    return resp.json();
})
.then(function(data){
    foo(data);
})
.catch(function(error){
    console.log(error);
})
 

function foo(data){
    let container =document.createElement("div");
    container.setAttribute("class","container");
    let row = document.createElement("div");
    row.setAttribute("class","row");

        data.forEach((element) => 
         {
        let col=document.createElement("div");
        col.setAttribute("class","col-4 mb-3");

        let card=document.createElement("div");
        card.setAttribute("class","card h-100");
        
        let cardImg = document.createElement("img");
        cardImg.setAttribute("class","card-img-top");
        cardImg.setAttribute("src",element.flag);

        let cardBody =document.createElement("div")
        cardBody.setAttribute("class","card-body");
        
        let cardTilte =document.createElement("he");
        cardTilte.setAttribute("class","h2");
        cardTilte.innerHTML=element.name;
        

        let cardtext=document.createElement('p');
        cardtext.setAttribute("class","card-text");
        cardtext.innerHTML = element.capital + "-" + element.region +"-" 
        +element.population + "-" + element.area;

        cardBody.append(cardTilte,cardtext);

        card.append(cardImg, cardBody);
        col.append(card);
        row.append(col);
        });
   
         container.append(row);
        document.body.append(container);
     }