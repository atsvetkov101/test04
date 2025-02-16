import { ICommand } from './icommand';

export interface IBurnFuelCommand extends ICommand {
  setFuelToBurn(amount:number);

  getFuelToBurn():number;

}
