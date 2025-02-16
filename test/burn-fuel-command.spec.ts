import { expect, assert } from 'chai';

import { GameObject } from '../src/game-object';
import { CheckFuelCommand } from '../src/check-fuel-command';
import { Point } from '../src/point';
import { Vector } from '../src/vector';
import { CommandException } from '../src/command-exception';
import { BurnFuelCommand } from '../src/burn-fuel-command';

describe('BurnFuelCommand tests', function() {
  describe('BurnFuelCommand test set', function() {
    // eslint-disable-next-line max-len
    it('point 5.BurnFuelCommand: сжигаем топливо, топливо есть', function() {
      const obj:GameObject = new GameObject({ 
        position: null, 
        velocity: null, 
        fuel: 10
      });
      const burnFuelCommand = new BurnFuelCommand();
      burnFuelCommand.setFuelToBurn(6);
      burnFuelCommand.setTarget(obj);
      burnFuelCommand.execute();

      expect(obj.getFuel()).equals(4);
    });

    it('point 5.BurnFuelCommand: сжигаем весь остаток топлива', function() {
      const obj:GameObject = new GameObject({ 
        position: new Point(12, 5), 
        velocity: new Vector(-7, 3), 
        fuel: 5
      });
      const burnFuelCommand = new BurnFuelCommand();
      burnFuelCommand.setFuelToBurn(6);
      burnFuelCommand.setTarget(obj);
      burnFuelCommand.execute();

      expect(obj.getFuel()).equals(0);
    });

  });
});