import { ICommand } from '../src/interfaces/icommand';

export class FirstCommand implements ICommand {
  args;
  constructor(...args){
    this.args = args[0];
  }
  setTarget(object: any) {
    throw new Error('Method not implemented.');
  }

  execute(): void {
    throw new Error('Method not implemented.');
  }
  getType(): string {
    return 'FirstCommand';
  }
}