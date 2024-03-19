var voteeligibilityCheck = function (age) {
  if ( (age) >= 18) {
    console.log(` Eligible for Vote :: ${age},`);
  }
  else {
    console.log(` Not Eligible for Vote ::${age}`); 
    }
   
};

voteeligibilityCheck(45);
voteeligibilityCheck(17);
voteeligibilityCheck(8);
voteeligibilityCheck(20);
voteeligibilityCheck(-10);
voteeligibilityCheck(200);
voteeligibilityCheck(0);
voteeligibilityCheck(null);
