const levelButtons = document.querySelectorAll('.level-button')
const startButton = document.querySelector('.start-button')

window.level

levelButtons.forEach((levelButton) => {
    levelButton.addEventListener('click', () => {
        window.level = levelButton.value
        if (levelButton.value === '1') {
            levelButtons[0].classList.add('level-button-active')
            levelButtons[1].classList.remove('level-button-active')
            levelButtons[2].classList.remove('level-button-active')
        }
        if (levelButton.value === '2') {
            levelButtons[1].classList.add('level-button-active')
            levelButtons[0].classList.remove('level-button-active')
            levelButtons[2].classList.remove('level-button-active')
        }
        if (levelButton.value === '3') {
            levelButtons[2].classList.add('level-button-active')
            levelButtons[0].classList.remove('level-button-active')
            levelButtons[1].classList.remove('level-button-active')
        }
    })
})

startButton.addEventListener('click', () => {
    window.location.href = 'secondpage.html'
})
