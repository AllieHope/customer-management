import { CustomerManagementPage } from './app.po';

describe('customer-management App', () => {
  let page: CustomerManagementPage;

  beforeEach(() => {
    page = new CustomerManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
