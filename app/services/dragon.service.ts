import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Dragon} from "../dragon";
import {DRAGONS} from "../mock-dragons";


@Injectable()
export class DragonService {

  getDragons(): Promise<Dragon[]> {
    return Promise.resolve(DRAGONS);
  }

}
