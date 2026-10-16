// write a student summary that contain two inner function na,ed as findaverage  which return total of three marks avg of three marks 
function studentSummary( name,m1,m2,m3){
  function findTotal(){
    let total =m1+m2+m3
    return total ;
  }
  function findAverage(){
    let avg =(m1+m2+m3)/3;
    return avg;
  }
  let res1=findTotal();
  let res2=findAverage();
  return `the name ${name} gets total marks =${res1} and average ${res2}`
};
let final =studentSummary("rahsi",36,79,67)
console.log(final)