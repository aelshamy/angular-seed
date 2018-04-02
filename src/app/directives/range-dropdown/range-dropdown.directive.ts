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
	set appRangeDropdown([from, to]: [number, number]) {
		this.viewContainerRef.clear();
		this.range = this.generateRange(from, to);
		this.range.map(number =>
			this.viewContainerRef.createEmbeddedView(this.templateRef, {
				$implicit: number
			})
		);
	}
	private generateRange(from: number, to: number): number[] {
		return new Array(to - from + 1).fill(0).map((_, index) => from + index);
	}
}
