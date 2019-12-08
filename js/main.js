
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
    img: `img/i6.png`,
    name: `Resolute Shower Oil`,
    description: `Coffee`,
    size: `250ml`,
    price: 90
  }, {
    img: `img/i7.png`,
    name: `Resolute Shower Oil`,
    description: `live`,
    size: `250ml`,
    price: 90
  }, {
    img: `img/i8.png`,
    name: `Resolute Shower Oil`,
    description: `hike`,
    size: `250ml`,
    price: 90
  }, {
    img: `img/i10.png`,
    name: `Resolute Shower Oil`,
    description: `salt`,
    size: `250ml`,
    price: 90
  }, {
    img: `img/i11.png`,
    name: `Resolute Shower Oil`,
    description: `sandalwood`,
    size: `250ml`,
    price: 90
  }, {
    img: `img/i12.png`,
    name: `Resolute Hand Creame`,
    description: `Bergamont Rind`,
    size: `250ml`,
    price: 90
  }, {
    img: `img/i13.png`,
    name: `Resolute Hand Soap`,
    description: `Noir Rose`,
    size: `250ml`,
    price: 60
  }, {
    img: `img/i14.png`,
    name: `Resolute Aftershave`,
    description: `Seoul`,
    size: `250ml`,
    price: 70
  }, {
    img: `img/i15.png`,
    name: `Resolute Body Wash`,
    description: `Vert`,
    size: `250ml`,
    price: 90
  }, {
    img: `img/i16.png`,
    name: `Resolute Shower Oil`,
    description: `tril`,
    size: `250ml`,
    price: 90
  }, {
    img: `img/i17.png`,
    name: `Resolute Shower Oil`,
    description: `Coffee`,
    size: `250ml`,
    price: 90
  }, {
    img: `img/i18.png`,
    name: `Resolute Shower Oil`,
    description: `live`,
    size: `250ml`,
    price: 90
  }, {
    img: `img/i19.png`,
    name: `Resolute Shower Oil`,
    description: `hike`,
    size: `250ml`,
    price: 90
  }, {
    img: `img/i20.png`,
    name: `Resolute Shower Oil`,
    description: `salt`,
    size: `250ml`,
    price: 90
  }, {
    img: `img/i1.png`,
    name: `Resolute Shower Oil`,
    description: `sandalwood`,
    size: `250ml`,
    price: 90
  },
];

  function getItemAsHtmlString(item) {
  return `<div> 
              <img src=${item.img} width="230px" height="230px">
              <h3><strong>${item.name}</strong></h3>
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

    renderItem(item.slice(0, 20));

    document.getElementById('layout').addEventListener('click', event => changeGrids() )

    

    