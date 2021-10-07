function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invocie.customer} \n`;

  const format = new Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format;


  for (const perf of invoice.performances) {
    const play = plays[perf.playID];
    let thisAmount = 0;

    switch (play.type) {
      case 'tragedy':
        thisAmount = 4000;
        if (perf.audience > 30) {
          thisAmount += 1000 * (perf.audience - 30)
        }
        break;
      case 'comedy':
        thisAmount = 3000
        if (perf.audience > 20) {
          thisAmount += 10000 + 500 * (perf.audience - 20)
        }
        thisAmount += 300 * perf.audience
        break;
      default:
        throw new Error(`unknown type: ${play.type}`)
    }

    // add volume credits
    volumeCredits += Math.max(perf.audience - 30, 0);
    // add extra credits for every ten comedy attendees
    if ('comedy' === play.type) volumeCredits += Math.floor(perf.audience / 5)

    result += `${play.name}: ${format(thisAmount / 100)}(${perf.audience} seats) \n`
    totalAmount += thisAmount
  }

  result += `Amount owed is ${format(totalAmount / 100)}\n`
  result += `You earned ${volumeCredits} credits \n`
  return result
}