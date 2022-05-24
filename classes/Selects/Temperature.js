import CreateSelectWindow from "../CreateSelect/CreateSelectWindow";
import CreateSelect from "../CreateSelect/CreateSelect";
import getResource from "../../utilites/getResource";
import renderItems from "../../utilites/renderItems";
import temperatureData from "./dataBase/temperatureData";

const tempSelectWindow = new CreateSelectWindow(
    'Выберите датчик',
    'selectTempWindow',
    '.wrapper-temp-content'
).render()

const selectTemp = new CreateSelect(
    'selectTemp',
    '.selectTempWindow'
).render()

export default tempSelectWindow;
renderItems(temperatureData, '#selectTemp')
// getResource('http://localhost:3000/temperature', '#selectTemp')