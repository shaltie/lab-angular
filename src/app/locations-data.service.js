var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var LocationsDataService = (function () {
    function LocationsDataService(http) {
        this.http = http;
        this.DATA_URL = 'https://github.com/spinning-spindle/lab-angular/blob/master/locations.json';
    }
    LocationsDataService.prototype.getData = function () {
        this.data = this.http.get(this.DATA_URL);
        console.log('Yeah', this.data);
    };
    LocationsDataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LocationsDataService);
    return LocationsDataService;
})();
exports.LocationsDataService = LocationsDataService;
//# sourceMappingURL=locations-data.service.js.map