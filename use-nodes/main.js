'use strict'
// ========== select element========
const kitchen = document.getElementById('kitchen')
const table = document.getElementsByClassName('table')
const menu = document.getElementById('menu')
const ul = document.getElementsByClassName('ul')
const childLi = ul[0].querySelector('li')
const lastChildLi = ul[0].lastChild
console.log('lastChildLi:', lastChildLi)

// ========== actions on nodes ======
// @@@ create node
const tea = document.createElement('p')
tea.innerHTML = 'I am tea'



// @@@ copy node
const teaClone = tea.cloneNode()  //複製 node，不包含 innerHTML
teaClone.innerHTML = 'I am tea clone'
const teaCloneWithChildren = tea.cloneNode(true)  //複製 node 及其子(包含 innerHTML)



// @@@ insert node
/**
 * node.appendChild() =>放在子節點的末端
 */
table[0].appendChild(tea)
table[1].appendChild(teaClone)
kitchen.appendChild(teaCloneWithChildren)

const teaClone2 = tea.cloneNode()
teaClone2.innerHTML = 'I am tea clone 2'
const preUl = tea.cloneNode()
preUl.innerHTML = 'I am before ul'
lastChildLi.before(teaClone2)
// lastChildLi.after(teaClone2)
// lastChildLi.replaceWith(teaClone2)
ul[0].prepend(preUl)

// @@@ delete node
childLi.remove()



// @@@ move node
const firstChildLi = ul[0].firstChild
firstChildLi.innerHTML = 'I am from ul-1. Someone move me here'
console.log('firstChildLi:', firstChildLi)
ul[1].appendChild(firstChildLi)
const ul3 = document.getElementsByClassName('ul')[2]
console.log('ul3:', ul3)
console.log('ul3 childNode:', ul3.childNodes)
//移除所有子代節點(li)-方法1：
function removeList(ele) {
  while (ele.firstChild) {
    ele.firstChild.remove()
  }
}
removeList(ul3)
//移除所有子代節點-方法2：
function removeList2(ele) {
  ele.innerHTML = ''
}
removeList2(ul[3])


// @@@ search node
const ul1Li = ul[0].querySelector('li') //選擇子代符合的第一個 node
console.log('ul1Li:', ul1Li)

const ul2LiList = ul[1].querySelectorAll('li') //選擇子代所有符合的 nodes
console.log('ul2LiList:', ul2LiList)



// =========== Event handler ==========








// =========== event listener =========









