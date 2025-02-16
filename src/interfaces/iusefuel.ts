export interface IUseFuel {

  getFuel(): number;

  refuel(amount: number);

  burn(amount: number);

  ableToMove(): boolean;


}