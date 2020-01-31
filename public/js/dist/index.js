"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const immutable_1 = require("immutable");
const React = require("react");
 
const topbar_1 = require("./topbar");
const DeviceCardMap = {};
function registerDeviceCard(name, f) {
    DeviceCardMap[name] = f;
}
exports.registerDeviceCard = registerDeviceCard;
function createDeviceCard(name, props) {
    return DeviceCardMap[name](props);
}
exports.createDeviceCard = createDeviceCard;
class TrainingMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = { devices: immutable_1.List() };
    }
    addDevice(device) {
        this.setState({ devices: this.state.devices.push(device) });
    }
    render() {
        return React.createElement("div", { className: 'connect-model' },
            React.createElement(topbar_1.TopBar, null));
    }
}
exports.TrainingMain = TrainingMain;
//# sourceMappingURL=iot-simulator.js.map