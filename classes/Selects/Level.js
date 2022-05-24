import CreateSelectWindow from "../CreateSelect/CreateSelectWindow";
import CreateSelect from "../CreateSelect/CreateSelect";
import getResource from "../../utilites/getResource";
import renderItems from "../../utilites/renderItems";
import levelData from "./dataBase/levelData";


const levelSelectWindow = new CreateSelectWindow(
    'Выберите уровнемер',
    'selectLevelWindow',
    '.wrapper-level-content'
).render()

const selectLevel = new CreateSelect(
    'selectLevel',
    '.selectLevelWindow'
).render()

// getResource('http://localhost:3000/level', '#selectLevel')
renderItems(levelData, '#selectLevel')

export default levelSelectWindow