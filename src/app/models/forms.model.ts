import { FormControl } from "@angular/forms";
import { LocationType, UnitTypes } from "./types.model";

export interface GeoLocationFormModel {
    locationType?: FormControl<LocationType>;
    city?: FormControl<string | null | undefined>;
    state?: FormControl<string | null | undefined>;
    units?: FormControl<UnitTypes>;
    zipCode?: FormControl<number | null | undefined>;
}