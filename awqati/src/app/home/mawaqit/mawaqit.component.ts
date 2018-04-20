import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'; //
@Component({
  selector: 'app-mawaqit',
  templateUrl: './mawaqit.component.html',
  styleUrls: ['./mawaqit.component.css']
})
export class MawaqitComponent implements OnInit {

  fajr: string;
  dhohor: string;
  asr: string;
  maghrib: string;
  icha: string;
  times: any;
  toDay: any;
  now: any;

  toDayYear: any;
  toDayDay: any;
  mois: any;
  toDayMonth: any;
  dayName: any;
  toDayInvocation: any;
  toDayInvocationTakhrij: any;
  // tslint:disable-next-line:max-line-length
  iMonthNames = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأولى', 'جمادى الثانية', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];
   // tslint:disable-next-line:no-unused-expression
   wdNames = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس' , 'الجمعة' , 'السبت'];

  constructor() {
    const prayTime = new PrayTimes('MWL');

      prayTime.adjust({'fajr': parseFloat('15')});
      prayTime.adjust({'isha': parseFloat('15')});
    this.times = prayTime.getTimes(new Date(), [48.985430, 2.619156], 0);
   }

  ngOnInit() {
    console.log(this.times);
    this.initOrRefreshDateAndTime();
    setInterval(() => {this.updateDate(); }, 1000);

    // tslint:disable-next-line:max-line-length
    this.toDayInvocation = '.عن جابر بن عبدالله رضي الله عنهما قال رسول الله صلى الله عليه وسلم : القرآن شافع مشفع و ماحل مصدق من جعله أمامه قاده إلى الجنة و من جعله خلف ظهره ساقه إلى النار‏';
this.toDayInvocationTakhrij = '(رواه بن حبان و صححه الشيخ الألباني في السلسلة الصحيحة رقم ٢٠١٩)';
  }


updateDate() {
  this.now = moment().format('LTS');
  this.initOrRefreshDateAndTime();

}
initOrRefreshDateAndTime() {
    const moment = require('moment-hijri');
     moment.locale('ar-dz');
    this.toDayYear = moment().format('iYYYY');
    this.toDayDay = moment().format('iDD');
    const mois = moment().format('iM');
    this.toDayMonth = this.iMonthNames[mois - 1];
    this.dayName = moment().format('dddd');
    this.toDay = moment().format('iYYYY') + moment().format('iD') + this.iMonthNames[8 - 1];
}

}
