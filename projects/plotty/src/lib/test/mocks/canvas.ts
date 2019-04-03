import ContextMock from './context.js'

export default class {

    mock: Array<any>;
    width: number;
    height: number;
    context: ContextMock;

  constructor (width, height)
  {
    this.mock = [];
    this.width = width;
    this.height = height;
    this.context = new ContextMock(this.mock);
  }

  getContext (string)
  {
    this.mock.push('[getContext ' + string + ']')
    return this.context
  }
}