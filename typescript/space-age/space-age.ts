const mkFromEarthYears =
    (seconds: number) =>
        (factor: number) =>
            Number((seconds / 31557600 / factor).toFixed(2))

export default class SpaceAge {
    readonly seconds: number
    private fromEarthYears: Function
    constructor(seconds: number) {
        this.seconds = seconds
        this.fromEarthYears = mkFromEarthYears(seconds)
    }

    onMercury = () => this.fromEarthYears(0.2408467)
    onVenus = () => this.fromEarthYears(0.61519726)
    onEarth = () => this.fromEarthYears(1)
    onMars = () => this.fromEarthYears(1.8808158)
    onJupiter = () => this.fromEarthYears(11.862615)
    onSaturn = () => this.fromEarthYears(29.447498)
    onUranus = () => this.fromEarthYears(84.016846)
    onNeptune = () => this.fromEarthYears(164.79132)
}