export type TTemplateType = 'list-button' | 'list-card'

export type TButton = {
  type: 'postback' | 'web_url'
  title: string
  payload?: string
  url?: string
}

export type TCard = {
  title: string
  subtitle: string
  image_url: string
  buttons: TButton[]
}

export type TTemplate<T = unknown> = {
  type: TTemplateType
  data: Array<T>
}

export type TMessage<T = any> = {
  message: string
  template: TTemplate<T>
  userId: string
  isBot: boolean
}

export type TButtonsMessage = TMessage<TButton>
export type TCardsMessage = TMessage<TCard>
