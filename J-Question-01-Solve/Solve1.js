let orginalArr = [1, 3, 2, 7, 4, 6];
const changingPosition = 3;
for(let i=0; i<changingPosition; i++){
    orginalArr.unshift(orginalArr.pop())
}
console.log(orginalArr);

