import AddOption from "../classes/CreateSelect/CreateOptions";

// Использовать, если работаете с приложением через IDE. В консоли запустить json-server db.json

const getResource = async (url, parentID) => {
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error(`Could not fetch${url}, status: ${res.status}`)
    }
    return await res.json()
        .then(data => {
            data.forEach(({title, value}) => {
                new AddOption(title, value, parentID).render()
            })
        })
}
export default getResource;

