interface Card {
    src:string
    alt:string
    path:string
    header:string
    moreInfo?:string
}

interface CardComponentProps {
    cardData: Card;
}
  