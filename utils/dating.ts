function getWeekDay(date: Date) {
    let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    return days[date.getDay()]
}

function getMonthWithEnding(date: Date) {
    let month = date.toLocaleString('default', { month: 'long' })
    let value = date.getMonth()

    if (value === 2 || value === 7) {
        return `${month}а`
    }
    return `${month.slice(0, -1)}я`
}

function getFormatDay(date: Date) {
    return `${getWeekDay(date)}, ${date.getDate()} ${getMonthWithEnding(date)}`
}

export { getFormatDay }