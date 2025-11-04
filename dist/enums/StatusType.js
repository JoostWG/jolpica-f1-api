'use strict';
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all) {
        __defProp(target, name, { get: all[name], enumerable: true });
    }
};
var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === 'object' || typeof from === 'function') {
        for (let key of __getOwnPropNames(from)) {
            if (!__hasOwnProp.call(to, key) && key !== except) {
                __defProp(to, key, {
                    get: () => from[key],
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
                });
            }
        }
    }
    return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);

// src/enums/StatusType.ts
var StatusType_exports = {};
__export(StatusType_exports, {
    StatusType: () => StatusType,
});
module.exports = __toCommonJS(StatusType_exports);
var StatusType = /* @__PURE__ */ ((StatusType2) => {
    StatusType2['Finished'] = '1';
    StatusType2['Plus1Lap'] = '11';
    StatusType2['Engine'] = '5';
    StatusType2['Plus2Laps'] = '12';
    StatusType2['Accident'] = '3';
    StatusType2['Collision'] = '4';
    StatusType2['Gearbox'] = '6';
    StatusType2['SpunOff'] = '20';
    StatusType2['Plus3Laps'] = '13';
    StatusType2['Suspension'] = '22';
    StatusType2['Plus4Laps'] = '14';
    StatusType2['Transmission'] = '7';
    StatusType2['Electrical'] = '10';
    StatusType2['Lapped'] = '143';
    StatusType2['Brakes'] = '23';
    StatusType2['Withdrew'] = '54';
    StatusType2['Retired'] = '31';
    StatusType2['Plus5Laps'] = '15';
    StatusType2['Clutch'] = '8';
    StatusType2['NotClassified'] = '62';
    StatusType2['FuelSystem'] = '69';
    StatusType2['Plus6Laps'] = '16';
    StatusType2['Disqualified'] = '2';
    StatusType2['Turbo'] = '101';
    StatusType2['Hydraulics'] = '9';
    StatusType2['Overheating'] = '25';
    StatusType2['Ignition'] = '80';
    StatusType2['OilLeak'] = '44';
    StatusType2['Throttle'] = '37';
    StatusType2['OutOfFuel'] = '60';
    StatusType2['Plus7Laps'] = '17';
    StatusType2['Halfshaft'] = '86';
    StatusType2['Wheel'] = '36';
    StatusType2['OilPressure'] = '51';
    StatusType2['FuelPump'] = '48';
    StatusType2['Differential'] = '24';
    StatusType2['Tyre'] = '27';
    StatusType2['Handling'] = '64';
    StatusType2['Plus8Laps'] = '18';
    StatusType2['FuelLeak'] = '95';
    StatusType2['CollisionDamage'] = '130';
    StatusType2['Steering'] = '38';
    StatusType2['Radiator'] = '21';
    StatusType2['PowerUnit'] = '131';
    StatusType2['Puncture'] = '29';
    StatusType2['Plus9Laps'] = '19';
    StatusType2['WheelBearing'] = '67';
    StatusType2['Injection'] = '98';
    StatusType2['FuelPressure'] = '32';
    StatusType2['Plus10Laps'] = '88';
    StatusType2['WaterLeak'] = '47';
    StatusType2['Alternator'] = '91';
    StatusType2['Physical'] = '68';
    StatusType2['Exhaust'] = '43';
    StatusType2['Chassis'] = '83';
    StatusType2['Mechanical'] = '26';
    StatusType2['Magneto'] = '121';
    StatusType2['Driveshaft'] = '30';
    StatusType2['Axle'] = '109';
    StatusType2['HeatShieldFire'] = '42';
    StatusType2['Plus11Laps'] = '45';
    StatusType2['Battery'] = '84';
    StatusType2['Distributor'] = '99';
    StatusType2['OilPump'] = '94';
    StatusType2['PowerLoss'] = '75';
    StatusType2['Plus13Laps'] = '53';
    StatusType2['Injury'] = '82';
    StatusType2['Plus12Laps'] = '55';
    StatusType2['Plus14Laps'] = '111';
    StatusType2['OilPipe'] = '108';
    StatusType2['BrokenWing'] = '41';
    StatusType2['Electronics'] = '40';
    StatusType2['DriverUnwell'] = '100';
    StatusType2['Vibrations'] = '76';
    StatusType2['Plus15Laps'] = '112';
    StatusType2['DidNotStart'] = '142';
    StatusType2['RearWing'] = '65';
    StatusType2['WheelNut'] = '61';
    StatusType2['Excluded'] = '96';
    StatusType2['WaterPressure'] = '34';
    StatusType2['Plus16Laps'] = '116';
    StatusType2['Plus17Laps'] = '50';
    StatusType2['Injured'] = '73';
    StatusType2['WaterPump'] = '103';
    StatusType2['ERS'] = '132';
    StatusType2['FrontWing'] = '33';
    StatusType2['Supercharger'] = '126';
    StatusType2['Plus18Laps'] = '114';
    StatusType2['Plus19Laps'] = '124';
    StatusType2['Plus22Laps'] = '115';
    StatusType2['Plus24Laps'] = '117';
    StatusType2['Fuel'] = '74';
    StatusType2['Pneumatics'] = '63';
    StatusType2['Technical'] = '39';
    StatusType2['Plus25Laps'] = '113';
    StatusType2['FatalAccident'] = '104';
    StatusType2['Fire'] = '66';
    StatusType2['FuelPipe'] = '106';
    StatusType2['SparkPlugs'] = '105';
    StatusType2['Undertray'] = '140';
    StatusType2['WaterPipe'] = '110';
    StatusType2['WheelRim'] = '46';
    StatusType2['Damage'] = '137';
    StatusType2['Drivetrain'] = '79';
    StatusType2['FuelRig'] = '71';
    StatusType2['Illness'] = '139';
    StatusType2['OilLine'] = '70';
    StatusType2['Safety'] = '78';
    StatusType2['SafetyConcerns'] = '89';
    StatusType2['Stalled'] = '85';
    StatusType2['TrackRod'] = '49';
    StatusType2['Plus20Laps'] = '127';
    StatusType2['Plus21Laps'] = '120';
    StatusType2['Plus23Laps'] = '119';
    StatusType2['Plus26Laps'] = '58';
    StatusType2['Plus29Laps'] = '118';
    StatusType2['Plus30Laps'] = '123';
    StatusType2['Plus42Laps'] = '128';
    StatusType2['Plus44Laps'] = '122';
    StatusType2['Plus46Laps'] = '125';
    StatusType2['BrakeDuct'] = '135';
    StatusType2['CoolingSystem'] = '141';
    StatusType2['Crankshaft'] = '87';
    StatusType2['CVJoint'] = '102';
    StatusType2['Debris'] = '138';
    StatusType2['DriverSeat'] = '28';
    StatusType2['EngineFire'] = '56';
    StatusType2['EngineMisfire'] = '129';
    StatusType2['EyeInjury'] = '107';
    StatusType2['LaunchControl'] = '72';
    StatusType2['NotRestarted'] = '90';
    StatusType2['Refuelling'] = '35';
    StatusType2['SafetyBelt'] = '93';
    StatusType2['Seat'] = '136';
    StatusType2['TyrePuncture'] = '59';
    StatusType2['Underweight'] = '92';
    return StatusType2;
})(StatusType || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    StatusType,
});
