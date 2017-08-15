import {Injectable} from '@angular/core';

export interface NavigationData {
  customerId: number;
  pages: string;
  timestamp: string;
}

@Injectable()
export class NavigationService {
  initialNavigationData: NavigationData[];

  constructor() {
    this.initialNavigationData = [{
      customerId: 1,
      pages: 'A',
      timestamp: '2013-06-01 10:10:12'
    },
      {
        customerId: 1,
        pages: 'B',
        timestamp: '2013-06-01 10:11:12'
      },
      {
        customerId: 1,
        pages: 'A',
        timestamp: '2013-06-01 10:12:12'
      },
      {
        customerId: 2,
        pages: 'C',
        timestamp: '2013-07-08 09:03:09'
      },
      {
        customerId: 2,
        pages: 'A',
        timestamp: '2013-07-08 09:09:09'
      },
      {
        customerId: 2,
        pages: 'D',
        timestamp: '2013-07-08 09:19:09'
      },
      {
        customerId: 3,
        pages: 'B',
        timestamp: '2013-07-08 09:19:09'
      },
      {
        customerId: 3,
        pages: 'A',
        timestamp: '2013-07-08 09:19:10'
      },
      {
        customerId: 4,
        pages: 'D',
        timestamp: '2013-07-08 09:19:11'
      },
      {
        customerId: 4,
        pages: 'A',
        timestamp: '2013-07-08 09:19:12'
      },
      {
        customerId: 5,
        pages: 'X',
        timestamp: '2013-07-08 09:19:13'
      },
      {
        customerId: 5,
        pages: 'A',
        timestamp: '2013-07-08 09:19:14'
      },
      {
        customerId: 5,
        pages: 'B',
        timestamp: '2013-07-08 09:19:15'
      }
    ];
  }

  getCustomerNavigationData(customer): NavigationData[] {
    return this.initialNavigationData.filter(c => c.customerId === customer.id);
  }

}
