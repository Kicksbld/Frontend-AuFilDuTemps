// src/services/index.js
import { makeService } from "./resourceFactory"

export const coupons    = makeService('rewards')
export const orders    = makeService('orders')
export const products    = makeService('products')
export const users    = makeService('users')
export const addresses    = makeService('addresses')
export const favorites    = makeService('favorites')
export const preferences    = makeService('preferences')

