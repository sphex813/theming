import { Component } from '@angular/core';
import { ThemingService } from './theming.service';
import { Theme } from './theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private _themes = Object.values(Theme);

  constructor(private _themingService: ThemingService) {}

  public setPrevTheme(): void {
    const current: number = this._themes.indexOf(
      this._themingService.currentTheme
    );

    const next: Theme =
      this._themes[(current + this._themes.length + 1) % this._themes.length];
    this._themingService.setTheme(next);
  }

  public setNextTheme(): void {
    const current: number = this._themes.indexOf(
      this._themingService.currentTheme
    );

    const previous: Theme =
      this._themes[(current + this._themes.length - 1) % this._themes.length];
    this._themingService.setTheme(previous);
  }
}
