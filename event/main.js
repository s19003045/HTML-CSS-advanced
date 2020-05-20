'use strict'

// ======== elements ============
const form = document.getElementsByClassName('form')
console.log('form:', form) // HTMLCollection: array
const btn = document.getElementsByClassName('btn btn-primary')
console.log('btn:', btn) // HTMLCollection: array
const formTag = document.getElementsByTagName('form')
console.log('formTag:', formTag) // HTMLCollection: array
const list = document.getElementById('list')
const behavior = document.getElementsByClassName('behavior')
console.log('behavior:', behavior)
// ======== Event handler ==========
const btnClickHandler = function (event) {
  console.log('event.target:', event.target) // button.btn.btn-primary.ml-3
  console.log('event.currentTarget:', event.currentTarget) // button.btn.btn-primary.ml-3
}
const formHandler = function (event) {
  console.log('event.target:', event.target) // button.btn.btn-primary.ml-3
  console.log('event.currentTarget:', event.currentTarget) //form.form
}


// ========== Event listener ========

// Event capturing：從 event.target 的最上層，往下一層一層補捉，直至 event.target. 
// 與 Event bubbling 的順序剛好相反
btn[0].addEventListener('click', btnClickHandler, true) // 第三個參數為 event capturing 開啟或關閉

// Event delegation:
list.addEventListener('click', e => {
  // 檢查被按的元件確實在這個list裡面
  const li = e.target.closest('li')  //若自己就是 li，則回傳自己，不然，則回傳符合 li 且最接近的祖先 li
  if (!li || !list.contains(li)) return

  alert(li.dataset.num)
})

// behavior pattern
behavior[0].addEventListener('click', e => {
  console.log('e.target.dataset.counter:', typeof e.target.dataset.counter)
  console.log('e.target:', e.target)
  if (typeof e.target.dataset.counter !== undefined) {
    e.target.value++
  }
})