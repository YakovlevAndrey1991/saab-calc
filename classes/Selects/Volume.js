import CreateSelectWindow from "../CreateSelect/CreateSelectWindow";
import CreateSelect from "../CreateSelect/CreateSelect";
import getResource from "../../utilites/getResource";
import renderItems from "../../utilites/renderItems";
import volumeData from "./dataBase/volumeData";


const volumeSelectWindow = new CreateSelectWindow(
    'Выберите значение',
    'selectVolumeWindow',
    '.wrapper-volume-content'
).render()

const selectLevel = new CreateSelect(
    'selectTableAcc',
    '.selectVolumeWindow'
).render()

renderItems(volumeData, '#selectTableAcc')
// getResource('http://localhost:3000/volume', '#selectTableAcc')

export default volumeSelectWindow