// Code your solution here
function findMatching(drivers, string) {
    const match = drivers.filter( driver => {
        return driver.toUpperCase() == string.toUpperCase()
    })
    return match
}

function fuzzyMatch(drivers, string) {
    const match = drivers.filter(driver => {
        return driver.slice(0, 2) === string.slice(0, 2)
    })
    return match
}

function matchName(drivers, string) {
    const match = drivers.filter(driver => {
        return driver["name"] === string
    })
    return match
}