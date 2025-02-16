import { expect, assert } from 'chai';

import { GameObject } from '../src/game-object';
import { CheckFuelCommand } from '../src/check-fuel-command';
import { Point } from '../src/point';
import { Vector } from '../src/vector';
import { CommandException } from '../src/command-exception';
import { BurnFuelCommand } from '../src/burn-fuel-command';
import { StraightMoveBurlFuelMacroCommand } from '../src/straight-move-burl-fuel-command';

describe('StraightMoveBurlFuelMacroCommand tests', function() {
  describe('StraightMoveBurlFuelMacroCommand test set', function() {
    // eslint-disable-next-line max-len
    it('point 7.StraightMoveBurlFuelMacroCommand: перемещаемся и сжигаем топливо, топливо есть', function() {
      const obj:GameObject = new GameObject({ 
        position: new Point(12, 5), 
        velocity: new Vector(-7, 3), 
        fuel: 5
      });

      const macroCommand = new StraightMoveBurlFuelMacroCommand();
      macroCommand.setFuelToBurn(4);
      macroCommand.setTarget(obj);
      expect(function () { macroCommand.execute(); }).to.not.throw();
      expect(obj.getFuel()).equals(1);
    });

    it('point 7.StraightMoveBurlFuelMacroCommand: пытаемся перемещаться и сжигать топливо, но топлива нет', function() {
      const obj:GameObject = new GameObject({ 
        position: new Point(12, 5), 
        velocity: new Vector(-7, 3), 
        fuel: 0
      });

      const macroCommand = new StraightMoveBurlFuelMacroCommand();
      macroCommand.setFuelToBurn(4);
      macroCommand.setTarget(obj);
      expect(function() { macroCommand.execute(); } ).to.throw(CommandException);
      expect(obj.getFuel()).equals(0);
    });

    // eslint-disable-next-line max-len
    it('point 7.StraightMoveBurlFuelMacroCommand: проверяем, что объект переместился, скорость не изменилась и топливо было израсходовано', function() {
      const obj:GameObject = new GameObject({ 
        position: new Point(12, 5), 
        velocity: new Vector(-7, 3), 
        fuel: 7
      });

      const macroCommand = new StraightMoveBurlFuelMacroCommand();
      macroCommand.setFuelToBurn(4);
      macroCommand.setTarget(obj);
      expect(function() { macroCommand.execute(); } ).to.not.throw();
      
      const location = obj.getLocation();
      expect(location.x).equals(5);
      expect(location.y).equals(8);

      const velocity = obj.getVelocity();
      expect(velocity.x).equals(-7);
      expect(velocity.y).equals(3);

      expect(obj.getFuel()).equals(3);
    });



  });
});