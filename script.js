const menuUrl = 'https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json';

// Function to fetch the menu items and display them on the screen
async function getMenu() {
  const response = await fetch(menuUrl);
  const menuItems = await response.json();
  const menuDiv = document.getElementById('menu');

  menuItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `<h4>${item.name}</h4><p>${item.description}</p><p>Price: ${item.price}</p>`;
    menuDiv.appendChild(itemDiv);
  });
}

// Function to take the user's order
async function takeOrder() {
  const response = await fetch(menuUrl);
  const menuItems = await response.json();

  // Choose three random items from the menu
  const orderItems = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * menuItems.length);
    const menuItem = menuItems[randomIndex];
    orderItems.push(menuItem);
  }

  // Return an object containing the order items
  return { order: orderItems };
}

// Function to prepare the order
async function orderPrep() {
  // Simulate order preparation by waiting 1500 milliseconds
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Return an object indicating the order is ready for delivery
  return { order_status: true, paid: false };
}

// Function to mark the order as paid
async function payOrder() {
  // Simulate payment processing by waiting 1000 milliseconds
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Return an object indicating the order is paid
  return { order_status: true, paid: true };
}

// Function to thank the user for their order
function thankyouFnc() {
  alert('Thank you for eating with us today!');
}

// Call the functions in sequence
async function placeOrder() {
  await getMenu();
  const order = await takeOrder();
  console.log('Order:', order);
  const orderStatus = await orderPrep();
  console.log('Order status:', orderStatus);
  const paymentStatus = await payOrder();
  console.log('Payment status:', paymentStatus);
  if (paymentStatus.paid) {
    thankyouFnc();
  }
}

placeOrder();
