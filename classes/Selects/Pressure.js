import CreateSelectWindow from "../CreateSelect/CreateSelectWindow";
import CreateSelect from "../CreateSelect/CreateSelect";
import getResource from "../../utilites/getResource";
import renderItems from "../../utilites/renderItems";
import pressureData from "./dataBase/pressureData";

const pressureSelectWindow = new CreateSelectWindow(
    'Выберите датчик',
    'selectPressureWindow',
    '.wrapper-pressure-content'
).render()

const selectPressure = new CreateSelect(
    'selectPressure',
    '.selectPressureWindow'
).render()

export default pressureSelectWindow;
renderItems(pressureData, '#selectPressure')
// getResource('http://localhost:3000/pressure', '#selectPressure')