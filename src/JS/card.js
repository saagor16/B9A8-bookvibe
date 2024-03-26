import toast from 'react-hot-toast'
export const getCards = () => {
    let cards = []
    const storedCards = localStorage.getItem('blogs')
    if (storedCards) {
      cards = JSON.parse(storedCards)
    }
    return cards
}
export const saveCard = card => {
    let cards = getCards()
    const isExist = cards.find(b => b.id === card.id)
    if (isExist) {
      return toast.error('Already Bookmarked!')
    }
    cards.push(card)
    localStorage.setItem('cards', JSON.stringify(cards))
    toast.success('Blog Bookmarked Successfully!')
  }
  