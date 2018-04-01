import { Directive, ViewContainerRef, TemplateRef, Input } from "@angular/core";

@Directive({
	selector: "[appRangeDropdown]"
})
export class RangeDropdownDirective {
	private range: number[];

	constructor(
		private viewContainerRef: ViewContainerRef,
		private templateRef: TemplateRef<any>
	) {}

	@Input()
	set appRangeDropdown(value) {
		this.viewContainerRef.clear();
		this.range = this.generateRange(value[0], value[1]);
		this.range.map(number =>
			this.viewContainerRef.createEmbeddedView(this.templateRef, {
				$implicit: number
			})
		);
	}
	private generateRange(from, to): number[] {
		return new Array(to - from + 1).fill(0).map((_, index) => from + index);
	}
}
