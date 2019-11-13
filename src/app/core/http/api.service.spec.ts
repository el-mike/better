import { ApiService } from './api.service';

describe('ApiService', () => {
  const testApiUrl = 'testUrl';

  class ChildServiceStub extends ApiService {
    constructor() {
      super(testApiUrl);
    }

    public getUrl() {
      return this.apiUrl;
    }
  }

  test('stores protected apiUrl variable', () => {
    const service = new ChildServiceStub();

    expect(service.getUrl()).toEqual(testApiUrl);
  });
});
