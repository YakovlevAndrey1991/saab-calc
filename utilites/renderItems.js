import AddOption from "../classes/CreateSelect/CreateOptions";

const renderItems = (data, parentId) => {
    data.forEach(({title, value}) => {
        new AddOption(title, value, parentId).render()
    })
}

export default renderItems