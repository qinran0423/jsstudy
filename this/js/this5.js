;(function(doc) {
  var oBtn = doc.getElementById('J_btn')

  function Plus(a, b) {
    this.a = a
    this.b = b

    this.init()
  }
 

  Plus.prototype.init = function() {
    this.bindEvent()
  }


  Plus.prototype.bindEvent = function() {
    oBtn.addEventListener('click', this.handerBtnClick.bind(this), false)
  }


  Plus.prototype.handerBtnClick = function() {
    console.log(this.a + this.b);
  }

  window.Plus = Plus
})(document)


new Plus(3, 4)