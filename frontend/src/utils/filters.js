const filterData = (data, attribute, value) => {
    return data.filter((patient) => patient[attribute] === value)
}

const filterDataByInequality = (data, attribute, value) => {
    return data.filter((patient) => patient[attribute] !== value)
}

const filterDataByInclusion = (data, attribute, value) => {
    return data.filter((patient) => patient[attribute].includes(value))
}

const filtersPipeline = (data, filters) => {
    let result = data
    for (let filter of filters) {
        if (filter.type === "equality") {
            result = filterData(result, filter.attribute, filter.value)
        }

        if (filter.type === "inclusion") {
            result = filterDataByInclusion(
                result,
                filter.attribute,
                filter.value,
            )
        }
    }
    return result
}

export {
    filterData,
    filterDataByInequality,
    filterDataByInclusion,
    filtersPipeline,
}
