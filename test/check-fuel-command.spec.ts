import { expect, assert } from 'chai';

import { GameObject } from '../src/game-object';
import { CheckFuelCommand } from '../src/check-fuel-command';
import { Point } from '../src/point';
import { Vector } from '../src/vector';
import { CommandException } from '../src/command-exception';

describe('CheckFuelCommand tests', function() {
  describe('CheckFuelCommand test set', function() {
    // eslint-disable-next-line max-len
    it('point 3. CheckFuelCommand: у объекта есть топливо для движения', function() {
      const obj:GameObject = new GameObject({ 
        position: null, 
        velocity: null, 
        fuel: 10
      });
      const checkFuelCommand = new CheckFuelCommand();
      checkFuelCommand.setTarget(obj);

      expect(function () { checkFuelCommand.execute(); }).to.not.throw();
    });

    it('point 3.CheckFuelCommand: у объекта нет топлива для движения', function() {
      const obj:GameObject = new GameObject({ 
        position: new Point(12, 5), 
        velocity: new Vector(-7, 3), 
        fuel: 0
      });
      const checkFuelCommand = new CheckFuelCommand();
      checkFuelCommand.setTarget(obj);
      expect(function() { checkFuelCommand.execute(); } ).to.throw(CommandException);
    });

  });
});