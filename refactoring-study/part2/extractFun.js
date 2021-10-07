function printOwing(invoice) {
  printBanner()
  let outstanding = calculateOutstanding()

  // print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
}


// 提炼函数
// 根据这个函数的意图来对它命名（以它“做什么”来命名， 而不是以它“怎么做”来命名）
function printOwing(invoice) {
  printBanner()
  let outstanding = calculateOutstanding()

  // print details
  printDetails(outstanding);

  function printDetails(outstanding) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
  }
}