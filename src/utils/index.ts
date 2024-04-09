import { USER_ID_KEY } from '@/constants'
import { createId } from '@paralleldrive/cuid2'

/**
 * Generates a unique ID for the user.
 * If a user ID is already stored in the local storage, it returns that ID.
 * Otherwise, it generates a new ID, stores it in the local storage, and returns it.
 * @returns The generated or stored user ID.
 */
export const genId = () => {
  const generatedId = createId()

  const userIdFromLocalStorage = localStorage.getItem(USER_ID_KEY)

  if (!userIdFromLocalStorage) {
    localStorage.setItem(USER_ID_KEY, generatedId)

    return generatedId
  }

  return userIdFromLocalStorage
}

/**
 * Generates a unique address based on the provided channelId.
 * @param channelId - The ID of the channel.
 * @returns The generated address.
 */
export const getAddress = (channelId: string) => {
  const userId = genId()

  return `${channelId}_${userId}`
}

export const openInNewTab = (url: string) => {
  window.open(url, '_blank')?.focus()
}
