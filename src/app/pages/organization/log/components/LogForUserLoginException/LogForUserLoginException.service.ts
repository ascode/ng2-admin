import {Injectable} from '@angular/core';



import {DefaultConfig } from '../../../../../config/default_config';

@Injectable()
export class LogForUserLoginExceptionService {
  public config;
  smartTableData = [
    {
      id: 1,
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      age: '授权'
    },
    {
      id: 2,
       firstName: '',
      lastName: '',
      username: '',
      email: '',
      age: '授权'
    },
    {
      id: 3,
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      age: '授权'
    },
    {
      id: 4,
     firstName: '',
      lastName: '',
      username: '',
      email: '',
      age: '授权'
    },
    {
      id: 5,
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      age: '授权'
    },
    {
      id: 6,
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      age: '授权'
    },
     {
      id: 1,
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      age: '授权'
    },
    {
      id: 2,
     firstName: '',
      lastName: '',
      username: '',
      email: '',
      age: '授权'
    },
    {
      id: 3,
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      age: '授权'
    },
    {
      id: 4,
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      age: '授权'
    },
    {
      id: 5,
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      age: '授权'
    },
    {
      id: 6,
      firstName: 'Ann',
      lastName: 'Smith',
      username: '@ann',
      email: 'ann@gmail.com',
      age: '授权'
    },
     {
      id: 1,
      firstName: 'Mark',
      lastName: 'Otto',
      username: '@mdo',
      email: 'mdo@gmail.com',
      age: '授权'
    },
    {
      id: 2,
      firstName: 'Jacob',
      lastName: 'Thornton',
      username: '@fat',
      email: 'fat@yandex.ru',
      age: '授权'
    },
    {
      id: 3,
      firstName: 'Larry',
      lastName: 'Bird',
      username: '@twitter',
      email: 'twitter@outlook.com',
      age: '授权'
    },
    {
      id: 4,
      firstName: 'John',
      lastName: 'Snow',
      username: '@snow',
      email: 'snow@gmail.com',
      age: '授权'
    },
    {
      id: 5,
      firstName: 'Jack',
      lastName: 'Sparrow',
      username: '@jack',
      email: 'jack@yandex.ru',
      age: '授权'
    },
    {
      id: 6,
      firstName: 'Ann',
      lastName: 'Smith',
      username: '@ann',
      email: 'ann@gmail.com',
      age: '授权'
    },
     ];
 metricsTableData = [
    {
      image: 'app/browsers/chrome.svg',
      browser: 'Google Chrome',
      visits: '10,392',
      isVisitsUp: true,
      purchases: '4,214',
      isPurchasesUp: true,
      percent: '45%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/firefox.svg',
      browser: 'Mozilla Firefox',
      visits: '7,873',
      isVisitsUp: true,
      purchases: '3,031',
      isPurchasesUp: false,
      percent: '28%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/ie.svg',
      browser: 'Internet Explorer',
      visits: '5,890',
      isVisitsUp: false,
      purchases: '2,102',
      isPurchasesUp: false,
      percent: '17%',
      isPercentUp: false
    },
    {
      image: 'app/browsers/safari.svg',
      browser: 'Safari',
      visits: '4,001',
      isVisitsUp: false,
      purchases: '1,001',
      isPurchasesUp: false,
      percent: '14%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/opera.svg',
      browser: 'Opera',
      visits: '1,833',
      isVisitsUp: true,
      purchases: '83',
      isPurchasesUp: true,
      percent: '5%',
      isPercentUp: false
    },
    
  ];

  constructor(){
    this.config = new DefaultConfig();
  }

  getData(http): Promise<any> {
    return new Promise((resolve, reject) => {
      http.post(this.config.getApiURL() + 'queryLogOfUserLoginExceptionReq',null).subscribe((res: Response) => {
          console.log(res);
          resolve(res);
        })
    });
  }
}
