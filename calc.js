function calculateTip(amount, tip) {
  let qtip = tip / 100;
  let tipAmount = amount * qtip;
  let totalAmount = amount + tipAmount;

  if (tip < 5) {
    console.log(`You are cheap! ${tip}% is too low!` + "\n");
    console.log(
      `Your tip amount is $${tipAmount} and total amount is $${totalAmount}`
    );
  } else if (tip > 20) {
    console.log(`You are a baller! ${tip}% is too high!` + "\n");
    console.log(
      `Your tip amount is $${tipAmount}  and total amount is $${totalAmount}`
    );
  } else {
    console.log(`Thank You for Your tip: ${tip}%.` + "\n");
    console.log(
      `Your tip amount is $${tipAmount} and total amount is $${totalAmount}`
    );
  }
}

//--------------------------------------------
//-------To Do List--------------------
//--------------------------------------------

const toDoList = [];

function addItems(arr) {
  let item = prompt("What would you like to add to your list?");
  let corrected = item.toLowerCase().trim();
  let errorMsg = "Item not added.  Item already exists";
  return arr.indexOf(corrected) === -1 ? arr.push(corrected) : alert(errorMsg);
}

addItems(toDoList);
addItems(toDoList);
addItems(toDoList);

console.log(toDoList);
