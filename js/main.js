
 const item = [
  {
    img: `img/i1.png`,
    name: `Resolute Hand Creame`,
    description: `Bergamont Rind`,
    size: `250ml`,
    price: 90
  }, {
    img: `img/i2.png`,
    name: `Resolute Hand Soap`,
    description: `Noir Rose`,
    size: `250ml`,
    price: 60
  }, {
    img: `img/i3.png`,
    name: `Resolute Aftershave`,
    description: `Seoul`,
    size: `250ml`,
    price: 70
  }, {
    img: `img/i4.png`,
    name: `Resolute Body Wash`,
    description: `Vert`,
    size: `250ml`,
    price: 90
  }, {
    img: `img/i11.png`,
    name: `Resolute Shower Oil`,
    description: `tril`,
    size: `250ml`,
    price: 90
  }, {
    img: `iimg/i6.png`,
    name: `Resolute Shower Oil`,
    description: `tril`,
    size: `250ml`,
    price: 90
  }, {
    img: `img/i7.png`,
    name: `Resolute Shower Oil`,
    description: `tril`,
    size: `250ml`,
    price: 90
  }, {
    img: `img/i8.png`,
    name: `Resolute Shower Oil`,
    description: `tril`,
    size: `250ml`,
    price: 90
  }, {
    img: `img/i10.png`,
    name: `Resolute Shower Oil`,
    description: `tril`,
    size: `250ml`,
    price: 90
  }, {
    img: `img/i11.png`,
    name: `Resolute Shower Oil`,
    description: `tril`,
    size: `250ml`,
    price: 90
  }
];

  function getItemAsHtmlString(item) {
  return `<div> 
              <img src=${item.img} width="230px" height="230px">
              <a><strong>${item.name}</strong></a>
              <a><strong>${item.description}</strong></a>
              <a><strong>${item.size}</strong></a>
              <a>$<strong>${item.price}</strong></a>
              <a class="button" href="product.html">Add to bag</a>
        </div>
        <br>`
  }
  
  function changeGrids() {
    document.getElementById(`item`).classList.toggle(`grid-toggle`);
  }

    function renderItem(arr) {
      const arrOfHtml = arr.map(getItemAsHtmlString)
      const strOfHtml = arrOfHtml.join(`\n`)
      document.getElementById(`item`).innerHTML = strOfHtml;
    }

    renderItem(item.slice(0, 5));

    document.getElementById('layout').addEventListener('click', event => changeGrids() )

    

    