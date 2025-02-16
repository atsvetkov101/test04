export interface ICommand {

  execute(): void;
  getType(): string;
  setTarget( object );
}
