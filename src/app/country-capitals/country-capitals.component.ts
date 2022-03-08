import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-capitals',
  templateUrl: './country-capitals.component.html',
  styleUrls: ['./country-capitals.component.scss'],
})
export class CountryCapitalsComponent implements OnInit {
  @Input() data:
    | Array<{
        country: string;
        capital: string;
      }>
    | undefined;

  public buttons: Array<{
    selected: boolean;
    title: String;
    error: boolean;
    hit: boolean;
  }> = [];

  private compare: {
    type: String | null;
    value: String | null;
  } = {
    type: null,
    value: null,
  };

  private buttonIndex: number = 0;

  constructor() {}

  ngOnInit() {
    if (this.data) {
      let items: string[] = [];

      this.data.forEach((d) => {
        items.push(d.country);
        items.push(d.capital);
      });

      const random = items
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      random.forEach((rand) => {
        this.buttons.push({
          selected: false,
          title: rand,
          error: false,
          hit: false,
        });
      });
    }
  }

  public check(name: String): void {
    const find = this.data?.find((d) => d.country === name);
    const buttonIndex = this.buttons.findIndex(
      (button) => button.title === name
    );

    if (!this.compare.type) {
      if (find) {
        this.compare.type = 'country';
      } else {
        this.compare.type = 'capital';
      }

      this.compare.value = name;
      this.buttons[buttonIndex].selected = true;

      this.buttonIndex = buttonIndex;
    } else {
      let check;

      if (this.compare.type === 'country') {
        check = this.data?.find(
          (d) => d.country === this.compare.value && d.capital === name
        );
      } else {
        check = this.data?.find(
          (d) => d.capital === this.compare.value && d.country === name
        );
      }

      if (check) {
        this.buttons[buttonIndex].hit = true;
        this.buttons[this.buttonIndex].hit = true;

        this.compare = {
          type: null,
          value: null,
        };

        this.buttonIndex = 0;
      } else {
        this.buttons[buttonIndex].error = true;
        this.buttons[this.buttonIndex].error = true;

        setTimeout(() => {
          this.buttons[buttonIndex].error = false;
          this.buttons[this.buttonIndex].error = false;
          this.buttons[this.buttonIndex].selected = false;

          this.compare = {
            type: null,
            value: null,
          };
        }, 1e3);
      }
    }
  }
}
