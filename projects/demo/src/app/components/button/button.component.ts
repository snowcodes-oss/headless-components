import { Component } from "@angular/core";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

  usageImport = 'import { HeadlessButtonModule } from "@snowcodes/headless-components/button";';
  usageHtml = '<headless-button>Hello world</headless-button>';
  usageHtmlType = `<headless-button type="submit | reset | button">Button with different type</headless-button>`;
  usageHtmlDisabled = `<headless-button disabled>Disabled button</headless-button>`;
  usageHtmlCustom = `<headless-button override="custom-button-color">With custom color</headless-button>`;

  usageHtmlColor = `<headless-button color="primary | secondary | ...">Your button</headless-button>`;
  usageHtmlOutlined = `<headless-button appearance="default | outlined" color="...">Your button</headless-button>`;
}