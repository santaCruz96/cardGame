import './css/style.css'

const LOW_LEVEL_CARDS_PAIRS = 3
const MID_LEVEL_CARDS_PAIRS = 6
const HIGH_LEVEL_CARDS_PAIRS = 9
const LOW_LEVEL = 1
const MID_LEVEL = 2
const HIGH_LEVEL = 3

const screen: any = document.querySelector('.screen')
const levelButtons: any = document.querySelectorAll('.level-button')
const startButton: any = document.querySelector('.start-button')

type Cards = { name: string; imagePath: string }
type Card = { dataset: { name: string } }

let level: number
let cardsPairs: number
let cardsPack: Cards[] = []
const shirt = './img/shirt.jpg'
let hasFlippedCard: boolean = false
let firstCard: Card | any, secondCard: Card | any
let score = 0
let totalTime: string
const winImg = './img/winImg.png'
const loseImg = './img/loseImg.png'

levelButtons.forEach((levelButton: HTMLButtonElement) => {
    levelButton.addEventListener('click', () => {
        startButton.disabled = false
        level = Number(levelButton.value)
        if (levelButton.value === '1') {
            cardsPairs = LOW_LEVEL_CARDS_PAIRS
            levelButtons[0].classList.add('level-button-active')
            levelButtons[1].classList.remove('level-button-active')
            levelButtons[2].classList.remove('level-button-active')
        }
        if (levelButton.value === '2') {
            cardsPairs = MID_LEVEL_CARDS_PAIRS
            levelButtons[1].classList.add('level-button-active')
            levelButtons[0].classList.remove('level-button-active')
            levelButtons[2].classList.remove('level-button-active')
        }
        if (levelButton.value === '3') {
            cardsPairs = HIGH_LEVEL_CARDS_PAIRS
            levelButtons[2].classList.add('level-button-active')
            levelButtons[0].classList.remove('level-button-active')
            levelButtons[1].classList.remove('level-button-active')
        }
        console.log(cardsPairs)
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
    const minutes = document.createElement('p')
    minutes.classList.add('min')
    minutes.textContent = 'min'
    const seconds = document.createElement('p')
    seconds.classList.add('sec')
    seconds.textContent = 'sec'
    const time = document.createElement('p')
    time.classList.add('time')
    time.textContent = '00.00'
    timer.appendChild(minutes)
    timer.appendChild(seconds)
    timer.appendChild(time)
    const button = document.createElement('button')
    button.classList.add('repeat-button')
    button.textContent = 'Начать заново'
    header.appendChild(button)
    const field = document.createElement('div')
    field.classList.add('cards-field')
    container.appendChild(field)

    let sec = 0
    let min = 0
    let t: string | number | NodeJS.Timeout | undefined

    function tick() {
        sec++
        if (sec >= 60) {
            sec = 0
            min++
        }
    }

    function add() {
        tick()
        time.textContent =
            (min > 9 ? min : '0' + min) + '.' + (sec > 9 ? sec : '0' + sec)
        start()
        totalTime = time.textContent
    }

    function start() {
        t = setTimeout(add, 1000)
    }

    setTimeout(start, 5000)

    button.addEventListener('click', () => {
        window.location.reload()
    })

    generateField()

    function cardsFieldTemplate(cards: Cards) {
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

    function flipCard(this: any) {
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
            if (score === cardsPairs) {
                clearTimeout(t)
                setTimeout(function () {
                    renderFinalScreen(winImg, 'Вы выиграли!')
                }, 300)
            }
        } else {
            clearTimeout(t)
            setTimeout(function () {
                renderFinalScreen(loseImg, 'Вы проиграли!')
            }, 300)
        }
    }

    cards.forEach((card) => {
        if (card.classList.contains('flip')) {
            setTimeout(function () {
                card.classList.remove('flip')
            }, 5000)
        }
        card.addEventListener('click', () => {
            card.classList.add('flip')

            if (!hasFlippedCard) {
                hasFlippedCard = true
                firstCard = card
                return
            }
            secondCard = card
            hasFlippedCard = false

            checkForMatch()
        })
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
    if (level === LOW_LEVEL) {
        fieldLength = 6
    }
    if (level === MID_LEVEL) {
        fieldLength = 12
    }
    if (level === HIGH_LEVEL) {
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

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max)
}

function renderFinalScreen(img: string, text: string) {
    const finalScreen = document.createElement('div')
    finalScreen.classList.add('final-screen')
    screen.appendChild(finalScreen)

    const finalBlock = document.createElement('div')
    finalBlock.classList.add('difficulty-level')
    finalScreen.appendChild(finalBlock)

    const finalImg = document.createElement('img')
    finalImg.setAttribute('src', img)
    finalImg.classList.add('final-img')
    finalBlock.appendChild(finalImg)

    const finalTitle = document.createElement('h2')
    finalTitle.classList.add('final-title')
    finalTitle.textContent = text
    finalBlock.appendChild(finalTitle)

    const elapsedTime = document.createElement('p')
    elapsedTime.classList.add('elapsed-time')
    elapsedTime.textContent = 'Затраченное время:'
    finalBlock.appendChild(elapsedTime)

    const finalTime = document.createElement('h1')
    finalTime.classList.add('final-time')
    finalTime.textContent = totalTime
    finalBlock.appendChild(finalTime)

    const finalButton = document.createElement('button')
    finalButton.classList.add('final-button')
    finalButton.textContent = 'Играть снова'
    finalBlock.appendChild(finalButton)

    finalButton.addEventListener('click', () => {
        document.location.reload()
    })

    return finalScreen
}
