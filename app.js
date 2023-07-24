let homeScore = document.querySelector('.home-score')
let awayScore = document.querySelector('.away-score')
const homeAdd1 = document.querySelector('.home-add-1')
const homeAdd2 = document.querySelector('.home-add-2')
const homeAdd3 = document.querySelector('.home-add-3')
const awayAdd1 = document.querySelector('.away-add-1')
const awayAdd2 = document.querySelector('.away-add-2')
const awayAdd3 = document.querySelector('.away-add-3')
let clearScores = document.querySelector('.clear')



let homeCurrentScore = 0
let awayCurrentScore = 0

homeAdd1.addEventListener('click', () => {
  homeCurrentScore += 1
  homeScore.textContent = homeCurrentScore
})

homeAdd2.addEventListener('click', () => {
  homeCurrentScore += 2
  homeScore.textContent = homeCurrentScore
})

homeAdd3.addEventListener('click', () => {
  homeCurrentScore += 3
  homeScore.textContent = homeCurrentScore
})

awayAdd1.addEventListener('click', () => {
  awayCurrentScore += 1
  awayScore.textContent = awayCurrentScore
})

awayAdd2.addEventListener('click', () => {
  awayCurrentScore += 2
  awayScore.textContent = awayCurrentScore
})

awayAdd3.addEventListener('click', () => {
  awayCurrentScore += 3
  awayScore.textContent = awayCurrentScore
})

clearScores.addEventListener('click', () => {
  location.reload()
})
