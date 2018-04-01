import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RangeDropdownDirective } from "./directives/range-dropdown/range-dropdown.directive";

@NgModule({
	declarations: [AppComponent, RangeDropdownDirective],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
