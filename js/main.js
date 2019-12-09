const item = [
  {
    img: `img/i1.png`,
    category: `skincare`,
    name: `Resolute Hand Cream`,
    description: `Bergamont Rind`,
    size: `250ml`,
    cost: 90
  }, {
    img: `img/i2.png`,
    category: `skincare`,
    name: `Resolute Hand Cream`,
    description: `Noir Rose`,
    size: `250ml`,
    cost: 60
  }, {
    img: `img/i3.png`,
    category: `skincare`,
    name: `Resolute Aftershave`,
    description: `Seoul`,
    size: `250ml`,
    cost: 70
  }, {
    img: `img/i4.png`,
    category: `skincare`,
    name: `Resolute Body Cream`,
    description: `Vert`,
    size: `250ml`,
    cost: 95
  }, {
    img: `img/i11.png`,
    category: `skincare`,
    name: `Resolute Body Oil`,
    description: `Sandalwood`,
    size: `250ml`,
    cost: 98
  }, {
    img: `img/i6.png`,
    category: `skincare`,
    name: `Resolute face cream`,
    description: `Coffee`,
    size: `250ml`,
    cost: 90
  }, {
    img: `img/i7.png`,
    category: `skincare`,
    name: `Resolute Lip Cream`,
    description: `live`,
    size: `250ml`,
    cost: 90
  }, {
    img: `img/i8.png`,
    category: `skincare`,
    name: `Resolute moisturizer`,
    description: `hike`,
    size: `250ml`,
    cost: 90
  }, {
    img: `img/i10.png`,
    category: `shower`,
    name: `Resolute Shower Oil`,
    description: `tril`,
    description: `salt`,
    size: `250ml`,
    cost: 50
  }, {
    img: `img/i11.png`,
    category: `shower`,
    name: `Resolute Shower Oil`,
    description: `sandalwood`,
    size: `250ml`,
    cost: 50
  }, {
    img: `img/i12.png`,
    category: `skincare`,
    name: `Resolute Hand Creame`,
    description: `Lemon Rind`,
    size: `250ml`,
    cost: 97
  }, {
    img: `img/i13.png`,
    category: `shower`,
    name: `Resolute Hand Soap`,
    description: `Noir Rose`,
    size: `250ml`,
    cost: 35
  }, {
    img: `img/i14.png`,
    category: `skincare`,
    name: `Resolute Aftershave`,
    description: `Basil`,
    size: `250ml`,
    cost: 70
  }, {
    img: `img/i15.png`,
    category: `shower`,
    name: `Resolute Body Wash`,
    description: `Day`,
    size: `250ml`,
    cost: 50
  }, {
    img: `img/i16.png`,
    category: `shower`,
    name: `Resolute Shower Oil`,
    description: `Sea Mist`,
    size: `250ml`,
    cost: 40
  }, {
    img: `img/i17.png`,
    category: `skincare`,
    name: `Resolute Shower Oil`,
    description: `Coffee`,
    size: `250ml`,
    price: 90
  }, {
    img: `img/i18.png`,
    category: `skincare`,
    name: `Resolute Shower Oil`,
    description: `live`,
    size: `250ml`,
    cost: 120
  }, {
    img: `img/i19.png`,
    category: `skincare`,
    name: `Resolute Shower Oil`,
    description: `hike`,
    size: `250ml`,
    cost: 130
  }, {
    img: `img/i20.png`,
    category: `skincare`,
    name: `Resolute Soap Bar`,
    description: `salt`,
    size: `250ml`,
    cost: 90
  }, {
    img: `img/i1.png`,
    category: `skincare`,
    name: `Resolute Shower Oil`,
    description: `sandalwood`,
    size: `250ml`,
    cost: 90
  },
];


function getItemAsHtmlString(item) {
return `<article class="item ${item.category}">
<div><h3>${item.name}</h3>
<img src=${item.img} width="230px" height="230px">
<a><strong>${item.description}</strong></a>
<a><strong>${item.size}</strong></a>
<a class="item-cost">$<strong>${item.cost}</strong></a>
<a class="button" href="product.html">Add to bag</a></div>
</article>`;
}

  
  function changeGrids() {
    document.getElementById(`item`).classList.toggle(`grid-toggle`);
  }
    function renderItem(arr) {
      const arrOfHtml = arr.map(getItemAsHtmlString)
      const strOfHtml = arrOfHtml.join(`\n`)
      document.getElementById(`item`).innerHTML = strOfHtml;
    }

    renderItem(item.slice(0, 20));

    console.table(item);
    
    function checkCategory(event) {
      const userSearch = event.target.value;

      const matchingCategories = item.filter(item => item.category == userSearch);
      renderItem(matchingCategories)
    }
    function checkInput(event) {
      const userSearch = event.target.value.toLowerCase();
     
      const matchingNames = item.filter(item => item.name.toLowerCase().includes(userSearch));
      renderItem(matchingNames);
    }

    document.getElementById('layout').addEventListener('click', event => changeGrids() )
    document.getElementById('itemCategory').addEventListener('click',event => checkCategory(event))
    document.getElementById('itemName').addEventListener('input', event => checkInput(event) )

