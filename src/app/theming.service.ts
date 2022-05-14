import { Injectable } from "@angular/core";
import { Theme } from "./theme";

@Injectable({
  providedIn: 'root',
})
export class ThemingService {
  public currentTheme: Theme = Theme.DAY;

  public setTheme(theme: Theme): void {
    this._removeClasses(this.currentTheme);
    this._addClasses(theme);
    this.currentTheme = theme;
  }

  private _addClasses(arr: string): void {
    document.documentElement.classList.add(...[arr]);
  }

  private _removeClasses(arr: string): void {
    document.documentElement.classList.remove(...[arr]);
  }
}
