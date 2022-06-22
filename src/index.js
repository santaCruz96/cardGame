import './css/style.css'

const screen = document.querySelector('.screen')
const levelButtons = screen.querySelectorAll('.level-button')
const startButton = screen.querySelector('.start-button')

window.level
window.cardsPairs
let cardsPack = []
const shirt = './img/shirt.jpg'
let hasFlippedCard = false
let firstCard, secondCard
let score = 0

levelButtons.forEach((levelButton) => {
    levelButton.addEventListener('click', () => {
        startButton.disabled = false
        window.level = levelButton.value
        if (levelButton.value === '1') {
            window.cardsPairs = 3
            levelButtons[0].classList.add('level-button-active')
            levelButtons[1].classList.remove('level-button-active')
            levelButtons[2].classList.remove('level-button-active')
        }
        if (levelButton.value === '2') {
            window.cardsPairs = 6
            levelButtons[1].classList.add('level-button-active')
            levelButtons[0].classList.remove('level-button-active')
            levelButtons[2].classList.remove('level-button-active')
        }
        if (levelButton.value === '3') {
            window.cardsPairs = 9
            levelButtons[2].classList.add('level-button-active')
            levelButtons[0].classList.remove('level-button-active')
            levelButtons[1].classList.remove('level-button-active')
        }
        console.log(window.cardsPairs)
    })
})

startButton.addEventListener('click', () => {
    screen.textContent = ''
    const container = document.createElement('container')
    container.classList.add('container')
    screen.appendChild(container)
    const header = document.createElement('header')
    header.classList.add('header')
    container.appendChild(header)
    const timer = document.createElement('div')
    timer.classList.add('timer')
    header.appendChild(timer)
    const min = document.createElement('p')
    min.classList.add('min')
    min.textContent = 'min'
    const sec = document.createElement('p')
    sec.classList.add('sec')
    sec.textContent = 'sec'
    const time = document.createElement('p')
    time.classList.add('time')
    time.textContent = '00.00'
    timer.appendChild(min)
    timer.appendChild(sec)
    timer.appendChild(time)
    const button = document.createElement('button')
    button.classList.add('repeat-button')
    button.textContent = 'Начать заново'
    header.appendChild(button)
    const field = document.createElement('div')
    field.classList.add('cards-field')
    container.appendChild(field)

    generateField()

    function cardsFieldTemplate(cards) {
        const result = document.createElement('div')
        result.classList.add('card', 'flip')
        result.setAttribute('data-name', cards.name)
        const frontFace = document.createElement('img')
        frontFace.classList.add('front-face')
        frontFace.setAttribute('src', cards.imagePath)
        const backFace = document.createElement('img')
        backFace.classList.add('back-face')
        backFace.setAttribute('src', shirt)
        result.appendChild(frontFace)
        result.appendChild(backFace)
        return result
    }

    const fragment = document.createDocumentFragment()

    cardsPack.forEach((cards) => {
        const cardCell = cardsFieldTemplate(cards)
        fragment.appendChild(cardCell)
    })

    field.appendChild(fragment)

    const cards = document.querySelectorAll('.card')

    function flipCard() {
        this.classList.add('flip')

        if (!hasFlippedCard) {
            hasFlippedCard = true
            firstCard = this
            return
        }

        secondCard = this
        hasFlippedCard = false

        checkForMatch()
    }

    function checkForMatch() {
        if (firstCard.dataset.name === secondCard.dataset.name) {
            score++
            console.log(score)
            if (score === window.cardsPairs) {
                setTimeout(function () {
                    alert('Ты победил')
                }, 300)
                setTimeout(function () {
                    document.location.reload()
                }, 400)
            }
        } else {
            setTimeout(function () {
                alert('Ты проиграл')
            }, 300)
            setTimeout(function () {
                document.location.reload()
            }, 400)
        }
    }

    cards.forEach((card) => {
        if (card.classList.contains('flip')) {
            setTimeout(function () {
                card.classList.remove('flip')
            }, 5000)
        }
        card.addEventListener('click', flipCard)
    })
})

const cardsArr = [
    {
        name: 'six-clubs',
        imagePath: './img/6clubs.jpg',
    },
    {
        name: 'seven-clubs',
        imagePath: './img/7clubs.jpg',
    },
    {
        name: 'eight-clubs',
        imagePath: './img/8clubs.jpg',
    },
    {
        name: 'nine-clubs',
        imagePath: './img/9clubs.jpg',
    },
    {
        name: 'ten-clubs',
        imagePath: './img/10clubs.jpg',
    },
    {
        name: 'jack-clubs',
        imagePath: './img/jackClubs.jpg',
    },
    {
        name: 'queen-clubs',
        imagePath: './img/queenClubs.jpg',
    },
    {
        name: 'king-clubs',
        imagePath: './img/kingClubs.jpg',
    },
    {
        name: 'ace-clubs',
        imagePath: './img/aceClubs.jpg',
    },
    {
        name: 'six-diamonds',
        imagePath: './img/8diamonds.jpg',
    },
    {
        name: 'seven-diamonds',
        imagePath: './img/7diamonds.jpg',
    },
    {
        name: 'eight-diamonds',
        imagePath: './img/8diamonds.jpg',
    },
    {
        name: 'nine-diamonds',
        imagePath: './img/9diamonds.jpg',
    },
    {
        name: 'ten-diamonds',
        imagePath: './img/10diamonds.jpg',
    },
    {
        name: 'jack-diamonds',
        imagePath: './img/jackDiamonds.jpg',
    },
    {
        name: 'queen-diamonds',
        imagePath: './img/queenDiamonds.jpg',
    },
    {
        name: 'king-diamonds',
        imagePath: './img/kingDiamonds.jpg',
    },
    {
        name: 'ace-diamonds',
        imagePath: './img/aceDiamonds.jpg',
    },
    {
        name: 'six-hearts',
        imagePath: './img/6hearts.jpg',
    },
    {
        name: 'seven-hearts',
        imagePath: './img/7hearts.jpg',
    },
    {
        name: 'eight-hearts',
        imagePath: './img/8hearts.jpg',
    },
    {
        name: 'nine-hearts',
        imagePath: './img/9hearts.jpg',
    },
    {
        name: 'ten-hearts',
        imagePath: './img/10hearts.jpg',
    },
    {
        name: 'jack-hearts',
        imagePath: './img/jackHearts.jpg',
    },
    {
        name: 'queen-hearts',
        imagePath: './img/queenHearts.jpg',
    },
    {
        name: 'king-hearts',
        imagePath: './img/kingHearts.jpg',
    },
    {
        name: 'ace-hearts',
        imagePath: './img/aceHearts.jpg',
    },
    {
        name: 'six-spades',
        imagePath: './img/6spades.jpg',
    },
    {
        name: 'seven-spades',
        imagePath: './img/7spades.jpg',
    },
    {
        name: 'eight-spades',
        imagePath: './img/8spades.jpg',
    },
    {
        name: 'nine-spades',
        imagePath: './img/9spades.jpg',
    },
    {
        name: 'ten-spades',
        imagePath: './img/10spades.jpg',
    },
    {
        name: 'jack-spades',
        imagePath: './img/jackSpades.jpg',
    },
    {
        name: 'queen-spades',
        imagePath: './img/queenSpades.jpg',
    },
    {
        name: 'king-spades',
        imagePath: './img/kingSpades.jpg',
    },
    {
        name: 'ace-spades',
        imagePath: './img/aceSpades.jpg',
    },
]

function generateField() {
    let fieldLength = 0
    const totalCards = cardsArr.length
    if (window.level === '1') {
        fieldLength = 6
    }
    if (window.level === '2') {
        fieldLength = 12
    }
    if (window.level === '3') {
        fieldLength = 18
    }
    let i = 0
    while (i < fieldLength / 2) {
        let randomIndex = getRandomInt(totalCards)
        if (!cardsPack.includes(cardsArr[randomIndex])) {
            cardsPack.push(cardsArr[randomIndex])
            cardsPack.push(cardsArr[randomIndex])
            i++
        }
    }
    cardsPack.sort(function () {
        return 0.5 - Math.random()
    })
    console.log(cardsPack)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}
