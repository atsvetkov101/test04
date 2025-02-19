import { Point } from '../point';
import { StraightMoveCommand } from '../straight-move-command';
import { TeleportationCommand } from '../teleportation-command';

export type Fn = (...args: any[]) => any
export type scopeIocDependencies = Map<string, Fn>;
export type IocDependencies = Map<string, Map<string, Fn>>;

export class IoC{
  
  private static defaultScope = 'default';
  private static dependencies: Map<string, Map<string, Fn>>;
  private static currentScope;

  public static getDefaultScopeName() {
    return IoC.defaultScope;
  }

  public static setCurrenScope( scope: string ) {
    IoC.currentScope = scope;
  }

  public static getCurrentScope() {
    return IoC.currentScope;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public static init( dependencies ) {
    IoC.dependencies = dependencies;
    IoC.currentScope = IoC.defaultScope;
  }

  public static getCurrentScopeDependencies() {
    return IoC.dependencies.get(IoC.currentScope);
  }

  public static Resolve<T>(dependency: string, ...args) {
    const records = IoC.getCurrentScopeDependencies();
    if(!records){
      return null;
    }
    const func = records.get(dependency);
    if(!func){
      return null;
    }
    return func(...args);
  }

}


