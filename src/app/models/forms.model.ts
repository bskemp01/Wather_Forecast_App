import { FormControl } from "@angular/forms";

export interface GeoLocationFormModel {
    city?: FormControl<string | null | undefined>;
    state?: FormControl<string | null | undefined>;
    zipCode?: FormControl<number | null | undefined>;
}