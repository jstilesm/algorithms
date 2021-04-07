function get_products_of_all_ints_except_at_index(array) {
  // Function takes a list of integers
  // changed the current index into a multiplied ammount of all integers NOT at the current index

  // create a new array filled with ones to set as a base
  let output_array = [];

  for (let k = 0; k < array.length; k++) {
    output_array.push(1);
  }
  // [1,1,1,1]
  // iterate through each index in the array,
  for (let i = 0; i < array.length; i++) {
    // iterate through the new array multiplying each value in the new array by the number except at the current spot
    for (let j = 0; j < array.length; j++) {
      if (j !== i) {
        output_array[i] *= array[j];
      }
    }
  }

  // [1,7,3,4]
  // [7,1,1,1]

  // step 1
  // []

  // return new array
  return output_array;
}

console.log(get_products_of_all_ints_except_at_index([1, 7, 3, 4]));

function get_products_of_all_ints_except_at_index_better(array) {
  // Function takes a list of integers
  // changed the current index into a multiplied ammount of all integers NOT at the current index

  // create a new array filled with ones to set as a base
  let output_array = [];
  let previous_ammount = 1;
  let after_ammount = 1;

  for (let k = 0; k < array.length; k++) {
    output_array.push(1);
  }

  // [1,1,1,1]
  // iterate through each index in the array,
  for (let i = 0; i < array.length; i++) {
    previous_ammount *= array[i];
    after_ammount *= array[array.length - i];

    console.log(previous_ammount, after_ammount);
    output_array[i] *= previous_ammount * after_ammount;
  }

  return output_array;
}

console.log(get_products_of_all_ints_except_at_index_better([1, 7, 3, 4]));
