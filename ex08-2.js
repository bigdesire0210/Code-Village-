const newH1 = document.createElement('h1')
newH1.textContent = 'DOM'
document.body.appendChild(newH1)

const newP = document.createElement('p')
newP.textContent = "JavaScriptからHTMLを扱うための仕組み"
document.body.appendChild(newP)

const newul = document.createElement('ul')
document.body.appendChild(newul)

const newli0 = document.createElement('li')
newli0.textContent = 'documentオブジェクト'
newul.appendChild(newli0)

const newli1 = document.createElement('li')
newli1.textContent = 'getElementById'
newul.appendChild(newli1)

const newli2 = document.createElement('li')
newli2.textContent = 'イベントリスナ'
newul.appendChild(newli2)