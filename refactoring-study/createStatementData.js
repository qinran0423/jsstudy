
export default function createStatementData(invoice, plays) {
  const statementData = {}
  statementData.customer = invoice.customer
  statementData.performances = invoice.performances.map(enrichPerformance)
  statementData.totalAmount = totalAmount(statementData)
  statementData.totalVolumeCredits = totalVolumeCredits(statementData)
  return statementData
  function enrichPerformance(aPerformance) {
    const calculator = createPerformanceCalcutor(aPerformance, playFor(aPerformance))
    const result = Object.assign({}, aPerformance)
    result.play = calculator.play
    result.amount = calculator.amount
    result.volumeCredits = calculator.volumeCredits
    return result
  }
  function totalAmount(data) {
    return data.performances
      .reduce((total, p) => total + p.amount, 0)
  }

  function totalVolumeCredits(data) {
    return data.performances
      .reduce((total, p) => total + p.volumeCredits, 0)
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID]
  }

  // function volumeCreditsFor(aPerformance) {
  //   return new PerformanceCalculator(aPerformance, playFor(aPerformance)).volumeCredits
  // }

  // function amountFor(aPerformance) {
  //   return new PerformanceCalculator(aPerformance, playFor(aPerformance)).amount
  // }
}


class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance
    this.play = aPlay
  }

  get amount() {
    throw new Error('subclass responsibility')
  }

  get volumeCredits() {
    return Math.max(this.performance.audience - 30, 0);
  }
}


function createPerformanceCalcutor(aPerformance, aPlay) {
  switch (aPlay.type) {
    case 'tragedy':
      return new TragedyCalculator(aPerformance, playFor(aPerformance))
    case 'comedy':
      return new ComedyCalculator(aPerformance, playFor(aPerformance))
    default:
      throw new Error(`unknown type: ${aPlay.type}`)
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 4000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30)
    }
    return result
  }

}
class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 3000
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20)
    }
    result += 300 * this.performance.audience
    return result
  }
  get volumeCredits() {

    return super.volumeCredits + Math.floor(this.performance.audience / 5)


  }
}