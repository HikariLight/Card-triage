const filterData = (data, attribute, value) => {
    return data.filter((patient) => patient[attribute] === value)
}

const filterDataByInequality = (data, attribute, value) => {
    return data.filter((patient) => patient[attribute] !== value)
}

export { filterData, filterDataByInequality }
