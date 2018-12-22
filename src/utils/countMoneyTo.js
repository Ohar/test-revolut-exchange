import CENTS_KOEF from '@/consts/CENTS_KOEF'

export default function countMoneyTo (moneyFrom, rateFrom, rateTo) {
  return Math.floor(CENTS_KOEF * moneyFrom * rateTo / rateFrom) / CENTS_KOEF
}
