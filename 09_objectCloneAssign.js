

// 1. Create the object 'bankSbi' using literals with at least 4 properties
console.log(`====== bankSbi=========`);
  
const bankSbi = {
    name: "State Bank of India",
    type: "Public Sector Bank",
    branches: 24000,
    assets: "USD 600 billion"
  };
  console.table(bankSbi);
  // 2. Create the object 'bankLocation' using literals with properties: street, city, pin
  console.log(`====== bankLocation =========`);
  
  const bankLocation = {
    street: "Main Street",
    city: "Mumbai",
    pin: "400001"
  };
  console.table(bankLocation );
  // 3. Clone the step 1 (bankSbi) and step 2 (bankLocation) objects using Object.assign()
  const clonedBankSbi = Object.assign({}, bankSbi);
  console.log("Cloned bankSbi:", clonedBankSbi);
  
  const clonedBankLocation = Object.assign({}, bankLocation);
  console.log("Cloned bankLocation:", clonedBankLocation);
  
  // 4. Create the object using object literals → rateOfInterest with properties
  const rateOfInterest = {
    homeLoanInterest: "8%",
    personalLoanInterest: "12%",
    duelnterest: "10%"
  };
  
  // 5. Merge the step 1, step 2, and step 4 objects into new object namely → sbiDetails
  const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
  console.log("Merged sbiDetails:", sbiDetails);
  
  
  
  
