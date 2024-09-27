import BusinessIcon from '@/assets/img/svg/BusinessIcon'
import ClothesIcon from '@/assets/img/svg/ClothesIcon'
import CreditIcon from '@/assets/img/svg/CreditIcon'
import FastfoodIcon from '@/assets/img/svg/FastFoodIcon'
import HousingIcon from '@/assets/img/svg/HousingIcon'
import InvestmentsIcon from '@/assets/img/svg/InvestmentsIcon'
import ProductIcon from '@/assets/img/svg/ProductIcon'
import SalaryIcon from '@/assets/img/svg/SalaryIcon'
import TransportIcon from '@/assets/img/svg/TransportIcon'
import { createSlice } from '@reduxjs/toolkit'

export type Category = {
    id: number
    name: string
    color: string
    income: boolean
    image: any
}

const initialState: Category[] = [
    {
        id: 0,
        name: 'Фастфуд',
        color: '#36C6C9',
        income: false,
        image: FastfoodIcon,
    },
    {
        id: 1,
        name: 'Продукты',
        color: '#F48712',
        income: false,
        image: ProductIcon,
    },
    {
        id: 2,
        name: 'Жилье',
        color: '#2C88EA',
        income: false,
        image: HousingIcon,
    },
    {
        id: 3,
        name: 'Одежда и обувь',
        color: '#7951F5',
        income: false,
        image: ClothesIcon,
    },
    {
        id: 4,
        name: 'Транспорт',
        color: '#E23235',
        income: false,
        image: TransportIcon,
    },
    {
        id: 5,
        name: 'Кредит',
        color: '#3ADB7D',
        income: false,
        image: CreditIcon,
    },
    {
        id: 6,
        name: 'Зар. плата',
        color: '#007AFF',
        income: true,
        image: SalaryIcon,
    },
    {
        id: 7,
        name: 'Бизнес',
        color: '#FF8400',
        income: true,
        image: BusinessIcon,
    },
    {
        id: 8,
        name: 'Инвестиции',
        color: '#35CC5A',
        income: true,
        image: InvestmentsIcon,
    },
]

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory(state, action) {
            state.push({
                id: action.payload.id,
                name: action.payload.name,
                color: action.payload.color,
                income: action.payload.income,
                image: ProductIcon,
            })
        },
    },
})

export const { addCategory } = categoriesSlice.actions
export default categoriesSlice.reducer
