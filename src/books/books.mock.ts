import { identity } from "rxjs"

export const BOOKS = [
    {
        id: 1,
        subject: 'Toán',
        title: 'Sách toán cao cấp 1',
        price: 50,
        store_id: 1,
    },
    {
        id: 2,
        subject: 'Toán',
        title: 'Sách toán cao cấp 2',
        price: 50,
        store_id: 2
    },
    {
        id: 3,
        subject: 'Toán',
        title: 'Sách toán cao cấp 2',
        price: 60,
        store_id: 2
    },
    {
        id: 4,
        subject: 'Tiếng Anh',
        title: 'Sách tiếng anh lớp 1',
        price: 100,
        store_id: 1
    },
    {
        id: 5,
        subject: 'Tiếng Anh',
        title: 'Sách tiếng anh lớp 2',
        price: 100,
        store_id: 1
    }
]
export const STORES = [
    {
        id: 1,
        store_name: 'Store A',
        address: 'A'

    },
    {
        id: 2,
        store_name: 'Store B',
        address: 'B'

    },
    {
        id: 3,
        store_name: 'Store C',
        address: 'C'

    }
]