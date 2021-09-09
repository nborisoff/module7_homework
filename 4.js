function ElectricalAppliance() {
    this.type = "Kitchen Appliance";
    this.state = "off";
}

ElectricalAppliance.prototype.plugIn = function(name) {
    this.state = "on";
    console.log(`${name} is plugged in`);
};

ElectricalAppliance.prototype.unplug = function(name) {
    this.state = "off";
    console.log(`${name} is unplugged`);
};

function Blender(type, brand, name, power, rpm, capacityJar, materialJar, materialBody, features) {
    this.type = type;
    this.brand = brand;
    this.name = name;
    this.power = power;
    this.rpm = rpm;
    this.capacityJar = capacityJar;
    this.materialJar = materialJar;
    this.materialBody = materialBody;
    this.features = features;
}
Blender.prototype = new ElectricalAppliance();
Blender.prototype.getState = function() {
    console.log(`${this.type} ${this.brand} is ${this.state}`)
}

function Fridge(type, brand, name, power, size, style, capacity, material, features) {
    this.type = type;
    this.brand = brand;
    this.name = name;
    this.power = power;
    this.size = size;
    this.style = style;
    this.capacity = capacity;
    this.material = material;
    this.features = features;
}
Fridge.prototype = new ElectricalAppliance();
Fridge.prototype.getState = function() {
    console.log(`${this.type} ${this.brand} is ${this.state}`)
}

function calculatePowerConsumption(applianceArray) {
    let powerConsumption = 0;

    for (let i = 0; i < applianceArray.length; i++) {
        if (applianceArray[i].state == "on") {
            powerConsumption += applianceArray[i].power;
        }
    }
    return `Power consumption of all plugged appliances is ${powerConsumption} W`;
}

const blender1 = new Blender("Blender", "Philips", "HR3652/01", 1400, 35000, 1.8, "Glass", "Metal", "Variable speed"),
    blender2 = new Blender("Blender", "Bosch", "MMBH6P6BGB", 1600, 30000, 2, "Glass", "Plastic", "Pulse function"),   
    fridge = new Fridge("Fridge", "LG", "LSXC22396S", 637, "35x70x29", "Side-by-Side", 615, "Metal", "Wi-Fi");

console.log(blender1, blender2, fridge);

blender1.getState();
blender2.getState();
fridge.getState();

blender1.plugIn(`${blender1.type} ${blender1.brand}`);
fridge.plugIn(`${fridge.type} ${fridge.brand}`);
console.log(calculatePowerConsumption([blender1, blender2, fridge]));

blender1.unplug(`${blender1.type} ${blender1.brand}`);
console.log(calculatePowerConsumption([blender1, blender2, fridge]));