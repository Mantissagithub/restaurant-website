const menuItems = [
    { name: 'Chicken Curry', price: '$10', image: 'https://media.istockphoto.com/id/1286704566/photo/image-of-turquoise-blue-cooking-pan-filled-with-butter-chicken-tikka-curry-large-chunks-of.jpg?s=2048x2048&w=is&k=20&c=XN-LhLyIGh91VWouofOgvH8K2rNLo1FSs2jUqyGMzMM=' },
    { name: 'Vegetable Biryani', price: '$12', image: 'https://media.istockphoto.com/id/908630116/photo/vegetable-biryani-or-veg-pulav-or-steamed-rice.jpg?s=2048x2048&w=is&k=20&c=TxyQWlIcFAOtJ9vLCGksaDacsYEGHA9Sp20FlFKAEaE=' },
    { name: 'Paneer Tikka', price: '$8', image: 'https://media.istockphoto.com/id/1252422687/photo/tandoori-paneer-tikka.jpg?s=2048x2048&w=is&k=20&c=KQmrs2wGSUMG3m3bMHra3oaEQaevollwbly8h8YA2r0=' },
    { name: 'Chicken Biryani', price: '$9', image: 'https://media.istockphoto.com/id/1271533769/photo/delicious-chicken-biryani-top-view-biryani-rice-dish-beautiful-indian-rice-dish-delicious.jpg?s=2048x2048&w=is&k=20&c=mbSvHs5DFKLTMxRmdqeblrGl00CxFM6gsrApedCgGWM=' },
    { name: 'Pulasa Fish Curry', price: '$11', image: 'https://media.istockphoto.com/id/1295772368/photo/macher-jhol-in-black-bowl-on-dark-slate-table-top-indian-cuisine-bengali-fish-curry-asian.jpg?s=2048x2048&w=is&k=20&c=riBBJqeCNGKzQkG-Rrum3P2sHrh2vPn_BCVloqE_A3k=' },
    { name: 'Masala Dosa', price: '$7', image: 'https://media.istockphoto.com/id/1306083166/photo/masala-sin.webp?b=1&s=170667a&w=0&k=20&c=kzKmdnF6Z_9hZdNOqXgSctXDaTGFkH_FAvtz8NTgjlc=' },
    { name: 'Tandoori Chicken', price: '$11', image: 'https://media.istockphoto.com/id/1396604313/photo/roasted-whole-chicken-legs-with-condiment-directly-above-photo.webp?b=1&s=170667a&w=0&k=20&c=2JQz_OHH1-bPRI3a_b09N1VhLi30zXJgTiYuzcfh_IQ=' },
    { name: 'Palak Paneer', price: '$9', image: 'https://media.istockphoto.com/id/1273066728/photo/image-of-kadhai-balti-dish-containing-vegetarian-meal-palak-paneer-recipe-beside-a-dark-blue.webp?b=1&s=170667a&w=0&k=20&c=ATO5K16gmQ5wtueyexzlloE4MbfLigHW2mjwrPi70zo=' },
    { name: 'Rogan Josh', price: '$12', image: 'https://media.istockphoto.com/id/1217568305/photo/kashmiri-rogan-josh.webp?b=1&s=170667a&w=0&k=20&c=n-WRn3ZRLwUkWbXCHG3hAetu3dzM0IjtpdTg6A8Gmis=' },
    { name: 'Gulab Jamun', price: '$5', image: 'https://media.istockphoto.com/id/1363048391/photo/gulab-jamun.webp?b=1&s=170667a&w=0&k=20&c=0j2GQLUZqLefBO-1z-NTgz7AEgkZnTc8pN8C5MXwT2E=' },
  ];

  function createMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
  
    const itemImage = document.createElement('img');
    itemImage.src = item.image;
    itemImage.alt = item.name;
    itemImage.classList.add('menu-item-img');
  
    const itemDetails = document.createElement('div');
    itemDetails.classList.add('menu-item-details');
  
    const itemName = document.createElement('h3');
    itemName.textContent = item.name;
  
    const itemPrice = document.createElement('p');
    itemPrice.textContent = item.price;
  
    itemDetails.appendChild(itemName);
    itemDetails.appendChild(itemPrice);
  
    menuItem.appendChild(itemImage);
    menuItem.appendChild(itemDetails);
  
    return menuItem;
  }

  function displayMenuItems() {
    const menuContainer = document.querySelector('.menu-items');
  
    menuItems.forEach(item => {
      const menuItem = createMenuItem(item);
      menuContainer.appendChild(menuItem);
    });
  }

  window.addEventListener('DOMContentLoaded', displayMenuItems);