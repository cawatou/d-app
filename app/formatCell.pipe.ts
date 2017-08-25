import {Pipe, PipeTransform} from '@angular/core';
import {Dragon} from "./dragon";

@Pipe({
  name: 'formatCell'
})
export class FormatCell implements PipeTransform {

  transform(dragon: Dragon, arg: string): string {

    switch (arg) {
      case 'rus':
        return `<img src="../assets/img/dragons/${dragon.name}-icon.png" alt=${dragon.rus}><a href="/how-to-breed/${dragon.name}">${dragon.rus}</a>`;
      case 'type':
        return `<img src = "../assets/img/icon/${dragon.type}-type-icon.png">`;
      case 'note':
        return FormatCell.showNotes(dragon.note);
      case 'elements':
        return FormatCell.showElements(dragon.elements);
      case 'breeding':
        return FormatCell.showTime(dragon.breeding);
      case 'hatching':
        return FormatCell.showTime(dragon.hatching);
      case 'cost':
        return FormatCell.showPrice(dragon.cost);
      case 'attack':
        return `<img src="../assets/img/icon/attack-icon.png" />&nbsp;${dragon.attack}`;
      case 'health':
        return `<img src="../assets/img/icon/health-icon.png" />&nbsp;${dragon.health}`;
      case 'gold':
        return `<img src="../assets/img/icon/gold-icon.png" />&nbsp;${dragon.gold}`;
      case 'version':
        return dragon.version;

      default:
        return dragon.name;
    }
  }

  static showNotes(arr: string[]): string {
    let html = "";
    for (let i = 0; i < arr.length; i++) {
      html += `<img src="../assets/img/icon/${arr[i]}-icon.png" />`;
    }
    return html;
  }

  static showElements(arr: string[]): string {
    let html = "";
    for (let i = 0; i < arr.length; i++) {
      html += `<img src="../assets/img/icon/${arr[i]}-element-icon.png" />`;
    }
    return html;
  }

  static showTime(time) {
    if (!parseInt(time)) {
      return time;
    } else {
      let seconds = parseInt(time);
      let numdays = Math.floor(seconds / 86400);
      let numhours = Math.floor((seconds % 86400) / 3600);
      let numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
      let numseconds = ((seconds % 86400) % 3600) % 60;
      let result = "";
      if (numdays > 0) result += numdays + "д ";
      if (numhours > 0) result += numhours + "ч ";
      if (numminutes > 0) result += numminutes + "м ";
      if (numseconds > 0) result += numseconds + "с";
      return result;
    }
  }


  static showPrice(arr) {
    if (arr[0] == "undefined" && arr[1] == "gems") {
      return `<img src="../assets/img/icon/gems-icon.png" />&nbsp;???`;
    }
    if (arr[0] == "undefined") {
      return arr[1];
    }
    return `<img src="../assets/img/icon/${arr[1]}-icon.png" />&nbsp;${parseInt(arr[0])}`;
  }
}
