export class Golvlampa {
    name: string;
    deviceName: string;
    manifacturer: string;
    firmwareVersion: string;
    brightness: string;

    constructor(
        name: string, 
        deviceName: string, 
        manifacturer: string, 
        firmwareVersion: string, 
        brightness: string
        ) {
      this.name = name;
      this.deviceName = deviceName;
      this.manifacturer = manifacturer;
      this.firmwareVersion = firmwareVersion;
      this.brightness = brightness;
    }
  }
  