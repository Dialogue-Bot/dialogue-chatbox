export const EVENTS_SOCKET = {
  MESSAGE: 'message',
  TYPING: 'typing',
  STOP_TYPING: 'stop-typing',
  AGENT_MESSAGE: 'agent-message',
}

export const USER_ID_KEY = 'user-bot-id'

export const API_URL = import.meta.env.DEV
  ? 'http://localhost:8080'
  : 'https://api.dialoguebot.tech'
