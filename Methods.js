//Methods: are used to perform certain actions, and they are also known as functions.

function construct(arr) {
    let sum=0;
  for (let i = 0; i < arr.length; i++) {
    sum+=arr[i];
  }
console.log(sum);
}

construct([2, 3, 4]);
