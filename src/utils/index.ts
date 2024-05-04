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
export const getAddress = (channelId: string, incomeUserId?: string) => {
  const userId = incomeUserId ? incomeUserId : genId()

  return `${channelId}_${userId}`
}

export const openInNewTab = (url: string) => {
  window.open(url, '_blank')?.focus()
}

/**
 * Converts a hexadecimal color code to HSL (Hue, Saturation, Lightness) format.
 * @param hex - The hexadecimal color code to convert.
 * @returns An object containing the HSL values.
 */
export const hexToHSL = (hex: string) => {
  hex = hex.replace(/^#/, '')

  // Convert hex to RGB
  const bigint = parseInt(hex, 16)
  let r = (bigint >> 16) & 255
  let g = (bigint >> 8) & 255
  let b = bigint & 255

  // Normalize RGB values
  r /= 255
  g /= 255
  b /= 255

  // Find the maximum and minimum values of R, G, B
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0,
    s
  const l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  h *= 360

  return {
    h: Math.round(h),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}
