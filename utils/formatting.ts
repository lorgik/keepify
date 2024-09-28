import { Operation } from '@/lib/features/operations/operationsSlice'

export function formatNumber(num: number) {
    return new Intl.NumberFormat('ru-RU').format(num)
}

export function formatNumberWithSign(num: number) {
    if (num > 0) {
        return `+ ${formatNumber(num)}`
    } else if (num < 0) {
        return `- ${formatNumber(Math.abs(num))}`
    }

    return formatNumber(Number(num))
}

export function operationsUnification(operations: Operation[]) {
    return operations.reduce((acc: Operation[], curr: Operation): Operation[] => {
        if (
            acc.findIndex((o) => {
                return o.category === curr.category
            }) === -1
        ) {
            acc.push(curr)
        } else {
            let findedIndex = acc.findIndex((o) => o.category === curr.category)

            acc.splice(findedIndex, 1, {
                ...curr,
                value: curr.value + acc[findedIndex].value,
            })
        }
        return acc
    }, [])
}
