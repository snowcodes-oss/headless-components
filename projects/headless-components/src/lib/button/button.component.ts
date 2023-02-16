import { Component, Input } from "@angular/core";

@Component({
  selector: 'headless-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class HeadlessButtonComponent {
  @Input()
  public type: 'submit' | 'button' | 'reset' = 'button';

  @Input()
  public disabled: string | null = null;

  @Input()
  public appearance: 'default' | 'outlined' = 'default';

  @Input()
  public color: 'primary' | 'secondary' | 'warn' | 'success' | 'error' = 'primary';

  @Input()
  public override: string = '';
}